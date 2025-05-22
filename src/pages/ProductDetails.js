import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, ArrowLeft, Plus, Minus, Share2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import productosData from '../data/productos.json';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const { addToCart, isInCart, getItemQuantity } = useCart();

    useEffect(() => {
        // Find product by ID
        const foundProduct = productosData.perfumes.find(p => p.id === parseInt(id));
        setProduct(foundProduct);

        if (foundProduct) {
            // Set main image
            setSelectedImage(0);

            // Find related products (same category, different product)
            const related = productosData.perfumes
                .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
                .slice(0, 4);
            setRelatedProducts(related);
        }
    }, [id]);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={20}
                className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
            />
        ));
    };

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        setQuantity(1);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: product.name,
                text: product.description,
                url: window.location.href,
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Enlace copiado al portapapeles');
        }
    };

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Cargando producto...</p>
                </div>
            </div>
        );
    }

    const images = product.gallery || [product.image];

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
                    <Link to="/" className="hover:text-pink-600 transition-colors">Inicio</Link>
                    <span>/</span>
                    <Link to="/productos" className="hover:text-pink-600 transition-colors">Productos</Link>
                    <span>/</span>
                    <span className="text-gray-800 font-medium">{product.name}</span>
                </div>

                {/* Back Button */}
                <Link
                    to="/productos"
                    className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors mb-8"
                >
                    <ArrowLeft size={20} />
                    <span>Volver a productos</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
                            <img
                                src={images[selectedImage]}
                                alt={product.name}
                                className="w-full h-96 sm:h-[500px] object-cover"
                            />
                            {product.isOffer && (
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 text-sm font-bold rounded-full animate-pulse">
                                    OFERTA {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                </div>
                            )}
                            {product.stock <= 5 && (
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                                    ¡Solo {product.stock} disponibles!
                                </div>
                            )}
                        </div>

                        {/* Image Gallery */}
                        {images.length > 1 && (
                            <div className="flex space-x-2 overflow-x-auto">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                            selectedImage === index
                                                ? 'border-pink-500 ring-2 ring-pink-200'
                                                : 'border-gray-200 hover:border-pink-300'
                                        }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`${product.name} - ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        {/* Title and Rating */}
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="flex items-center">
                                    {renderStars(product.rating)}
                                    <span className="ml-2 text-lg text-gray-600">({product.rating})</span>
                                </div>
                                <span className="text-sm text-gray-500">
                  {product.stock > 10 ? 'En stock' : `Solo ${product.stock} disponibles`}
                </span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
                            {product.originalPrice && (
                                <div className="flex flex-col">
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                                    <span className="text-sm font-bold text-green-600">
                    Ahorras ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Descripción</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {product.longDescription || product.description}
                            </p>
                        </div>

                        {/* Notes */}
                        {product.notes && (
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Notas Olfativas</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.notes.map((note, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800"
                                        >
                      {note}
                    </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Product Type */}
                        {product.type && (
                            <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  {product.type === 'crema' ? '🧴 Crema Corporal' :
                      product.type === 'set' ? '🎁 Set Completo' :
                          '💐 Fragancia'}
                </span>
                            </div>
                        )}

                        {/* Quantity and Add to Cart */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <span className="text-lg font-medium text-gray-700">Cantidad:</span>
                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-2 border-2 border-pink-200 rounded-full hover:bg-pink-50 transition-colors"
                                    >
                                        <Minus size={18} className="text-pink-600" />
                                    </button>
                                    <span className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg text-lg font-bold min-w-16 text-center">
                    {quantity}
                  </span>
                                    <button
                                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                        className="p-2 border-2 border-pink-200 rounded-full hover:bg-pink-50 transition-colors"
                                    >
                                        <Plus size={18} className="text-pink-600" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 px-6 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <ShoppingCart size={20} />
                                    <span>
                    {isInCart(product.id)
                        ? `Agregar más (${getItemQuantity(product.id)} en carrito)`
                        : 'Agregar al Carrito'
                    }
                  </span>
                                </button>

                                <button className="p-4 border-2 border-pink-200 rounded-xl hover:bg-pink-50 transition-colors">
                                    <Heart size={20} className="text-pink-600" />
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="p-4 border-2 border-pink-200 rounded-xl hover:bg-pink-50 transition-colors"
                                >
                                    <Share2 size={20} className="text-pink-600" />
                                </button>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-800 mb-3">Información Adicional</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>✅ Envío gratis a partir de $25</li>
                                <li>🚚 Entrega en 1-3 días hábiles</li>
                                <li>🔄 Garantía de satisfacción</li>
                                <li>📞 Soporte al cliente 24/7</li>
                                <li>💳 Pago contra entrega disponible</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Productos Relacionados
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map(relatedProduct => (
                                <ProductCard key={relatedProduct.id} product={relatedProduct} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;