import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

// Action types
const CART_ACTIONS = {
    ADD_ITEM: 'ADD_ITEM',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAR_CART: 'CLEAR_CART',
    LOAD_CART: 'LOAD_CART'
};

// Cart reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTIONS.ADD_ITEM: {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }

            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }]
            };
        }

        case CART_ACTIONS.UPDATE_QUANTITY: {
            if (action.payload.quantity === 0) {
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload.id)
                };
            }

            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };
        }

        case CART_ACTIONS.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };

        case CART_ACTIONS.CLEAR_CART:
            return {
                ...state,
                items: []
            };

        case CART_ACTIONS.LOAD_CART:
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }
};

// Initial state
const initialState = {
    items: [],
    isOpen: false
};

// CartProvider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('aromasdeluxe_cart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                dispatch({ type: CART_ACTIONS.LOAD_CART, payload: parsedCart });
            } catch (error) {
                console.error('Error loading cart from localStorage:', error);
            }
        }
    }, []);

    // Save cart to localStorage whenever items change
    useEffect(() => {
        localStorage.setItem('aromasdeluxe_cart', JSON.stringify(state.items));
    }, [state.items]);

    // Cart actions
    const addToCart = (product) => {
        dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: product });
    };

    const updateQuantity = (id, quantity) => {
        dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id, quantity } });
    };

    const removeFromCart = (id) => {
        dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: { id } });
    };

    const clearCart = () => {
        dispatch({ type: CART_ACTIONS.CLEAR_CART });
    };

    // Cart calculations
    const getTotalPrice = () => {
        return state.items.reduce((total, item) => {
            const price = item.originalPrice && item.isOffer ? item.originalPrice : item.price;
            return total + (price * item.quantity);
        }, 0).toFixed(2);
    };

    const getTotalItems = () => {
        return state.items.reduce((total, item) => total + item.quantity, 0);
    };

    const getItemsCount = () => {
        return state.items.length;
    };

    // Check if product is in cart
    const isInCart = (productId) => {
        return state.items.some(item => item.id === productId);
    };

    // Get item quantity
    const getItemQuantity = (productId) => {
        const item = state.items.find(item => item.id === productId);
        return item ? item.quantity : 0;
    };

    const value = {
        // State
        items: state.items,
        isOpen: state.isOpen,

        // Actions
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,

        // Calculations
        getTotalPrice,
        getTotalItems,
        getItemsCount,

        // Utils
        isInCart,
        getItemQuantity
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export default CartContext;