import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart, isInCart } = useCart();

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={16}
                className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
            />
        ));
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <Link to={`/producto/${product.id}`} className="block">
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Badges */}
                    {product.isOffer && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 text-xs font-bold rounded-full animate-pulse">
                            OFERTA
                        </div>
                    )}
                    {product.stock <= 5 && (
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 text-xs font-medium rounded-full">
                            ¡Solo {product.stock}!
                        </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col space-y-2">
                        <button
                            className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                            onClick={(e) => e.preventDefault()}
                        >
                            <Heart size={16} className="text-gray-600 hover:text-red-500 transition-colors" />
                        </button>
                        <button
                            className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                            onClick={(e) => e.preventDefault()}
                        >
                            <Eye size={16} className="text-gray-600 hover:text-pink-500 transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center mb-2">
                        {renderStars(product.rating)}
                        <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-800 mb-2 text-sm leading-tight h-10 line-clamp-2">
                        {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-xs mb-4 h-8 leading-4 line-clamp-2">
                        {product.description}
                    </p>

                    {/* Price and Add to Cart */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
                            {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                            )}
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 ${
                                isInCart(product.id)
                                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                                    : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'
                            }`}
                        >
                            {isInCart(product.id) ? 'En Carrito' : 'Agregar'}
                        </button>
                    </div>

                    {/* Product Type Badge */}
                    {product.type && (
                        <div className="mt-3 flex justify-center">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                {product.type === 'crema' ? '🧴 Crema' : product.type === 'set' ? '🎁 Set Completo' : '💐 Perfume'}
              </span>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;