import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2, ArrowLeft, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutModal from './CheckoutModal';

const CartModal = ({ isOpen, onClose }) => {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50">
                <div className="h-full w-full md:flex md:justify-end">
                    <div className="bg-white w-full md:max-w-lg h-full overflow-y-auto">
                        {/* Header */}
                        <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-pink-50 to-purple-50">
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={onClose}
                                    className="md:hidden p-2 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    <ArrowLeft size={20} />
                                </button>
                                <h2 className="text-lg md:text-xl font-bold text-gray-800">Mi Carrito</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="hidden md:block p-2 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 md:p-6">
                            {items.length === 0 ? (
                                <div className="text-center py-12">
                                    <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
                                    <p className="text-gray-500 text-lg font-medium">Tu carrito está vacío</p>
                                    <p className="text-gray-400 text-sm mt-2">¡Descubre nuestras fragancias exclusivas!</p>
                                </div>
                            ) : (
                                <>
                                    {/* Cart Items */}
                                    <div className="space-y-4">
                                        {items.map(item => (
                                            <div key={item.id} className="flex items-center space-x-4 p-3 md:p-4 bg-gradient-to-r from-gray-50 to-pink-50 rounded-xl">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-lg shadow-md"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-xs md:text-sm text-gray-800 truncate">{item.name}</h4>
                                                    <div className="flex items-center space-x-2">
                                                        <p className="text-pink-600 font-bold text-sm">${item.price.toFixed(2)}</p>
                                                        {item.originalPrice && item.isOffer && (
                                                            <p className="text-gray-400 line-through text-xs">${item.originalPrice.toFixed(2)}</p>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center space-x-2 md:space-x-3 mt-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="p-1 hover:bg-pink-100 rounded-full transition-colors"
                                                        >
                                                            <Minus size={14} className="text-pink-600" />
                                                        </button>
                                                        <span className="px-2 md:px-3 py-1 bg-white rounded-lg text-xs md:text-sm font-bold min-w-8 md:min-w-12 text-center shadow-sm">
                              {item.quantity}
                            </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="p-1 hover:bg-pink-100 rounded-full transition-colors"
                                                        >
                                                            <Plus size={14} className="text-pink-600" />
                                                        </button>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="p-1 hover:bg-red-100 rounded-full text-red-600 transition-colors ml-1 md:ml-2"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Cart Summary */}
                                    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                                        <div className="flex justify-between items-center mb-4 md:mb-6">
                                            <span className="text-base md:text-lg font-bold text-gray-800">Total:</span>
                                            <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        ${getTotalPrice()}
                      </span>
                                        </div>
                                        <button
                                            onClick={() => setIsCheckoutOpen(true)}
                                            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 md:py-4 rounded-xl transition-all duration-300 font-bold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                                        >
                                            Finalizar Compra
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Checkout Modal */}
            {isCheckoutOpen && (
                <CheckoutModal
                    isOpen={isCheckoutOpen}
                    onClose={() => setIsCheckoutOpen(false)}
                />
            )}
        </>
    );
};

export default CartModal;