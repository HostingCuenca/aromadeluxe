import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contacto" className="bg-gray-900 text-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Aromas<span className="text-red-400">Deluxe</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                            Perfumes premium de alta calidad a precios accesibles en Ecuador.
                            Experimenta la elegancia sin comprometer tu presupuesto.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                <span className="text-white font-bold text-sm sm:text-base">F</span>
                            </div>
                            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                <span className="text-white font-bold text-sm sm:text-base">I</span>
                            </div>
                            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                <span className="text-white font-bold text-sm sm:text-base">T</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg text-pink-400">Enlaces Rápidos</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                            <li>
                                <Link to="/" className="hover:text-pink-400 transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/productos" className="hover:text-pink-400 transition-colors">
                                    Productos
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="hover:text-pink-400 transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                                >
                                    Ofertas
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="hover:text-pink-400 transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                                >
                                    Contacto
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg text-purple-400">Categorías</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                            <li>
                                <Link
                                    to="/productos?category=masculino"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Masculinos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/productos?category=femenino"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Femeninos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/productos?category=unisex"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Unisex
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/productos?category=nicho"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    De Nicho
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg text-pink-400">Contacto</h4>
                        <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                            <div className="flex items-center">
                                <Phone size={16} className="mr-3 text-pink-400 flex-shrink-0" />
                                <a
                                    href="https://wa.me/593999999999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-400 transition-colors"
                                >
                                    +593 99 999 9999
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Mail size={16} className="mr-3 text-pink-400 flex-shrink-0" />
                                <a
                                    href="mailto:info@aromasdeluxe.com"
                                    className="hover:text-pink-400 transition-colors"
                                >
                                    info@aromasdeluxe.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <MapPin size={16} className="mr-3 text-pink-400 flex-shrink-0" />
                                <span>Cuenca, Ecuador</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
                    <div className="text-center mb-6 sm:mb-8">
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
                            ¡No te pierdas nuestras ofertas exclusivas!
                        </h4>
                        <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                            Suscríbete y recibe descuentos especiales en tu email
                        </p>
                        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full border-0 focus:ring-4 focus:ring-pink-500/30 text-sm sm:text-base text-gray-900"
                            />
                            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base transform hover:scale-105">
                                Suscribirse
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
                    <p className="text-sm sm:text-base">&copy; 2025 Aromas Deluxe. Todos los derechos reservados.</p>
                    <p className="mt-2 text-xs sm:text-sm">
                        Diseñado y desarrollado por{' '}
                        <a
                            href="https://torisoftt.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-300 hover:to-purple-300 transition-all"
                        >
                            torisoftt.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;