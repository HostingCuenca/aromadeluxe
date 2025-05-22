import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productosData from '../data/productos.json';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    // Hero images
    const heroImages = [
        {
            url: "https://victoriassecretbeautyecu.vtexassets.com/assets/vtex.file-manager-graphql/images/4a2d7092-f44e-4d53-8a72-4fde0ebcb5ad___1c0a23aa7225fcc327b50521d05a5efd.jpg",
            title: "Elegancia Absoluta",
            subtitle: "Descubre tu esencia perfecta"
        },
        {
            url: "https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A4110dddc-8ef6-45b0-812d-4463699578f2?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1",
            title: "Sensualidad Pura",
            subtitle: "Fragancias que despiertan pasiones"
        },
        {
            url: "https://hips.hearstapps.com/hmg-prod/images/home-dior-1643269404.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
            title: "Lo mejor en perfumes",
            subtitle: "La sofisticación a tu alcance"
        }
    ];

    // Auto-slide para el hero
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    // Load featured products
    useEffect(() => {
        const featured = productosData.perfumes.filter(product => product.featured).slice(0, 8);
        setFeaturedProducts(featured);
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen max-h-screen overflow-hidden flex items-center">
                <div className="absolute inset-0">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-transparent to-pink-900/15" />
                        </div>
                    ))}
                </div>

                <div className="relative z-10 w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl">
                            <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight animate-fade-in-up">
                <span className="block text-shadow-lg">
                  {heroImages[currentSlide].title}
                </span>
                            </h1>

                            <p className="font-poppins text-lg sm:text-xl md:text-2xl text-pink-100 mb-6 sm:mb-8 font-light tracking-wide leading-relaxed animate-fade-in-up-delay-1">
                                {heroImages[currentSlide].subtitle}
                            </p>

                            <div className="mb-6 sm:mb-8 animate-fade-in-up-delay-2">
                                <div className="flex items-baseline space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <span className="font-bodoni text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                    3X
                  </span>
                                    <span className="font-bodoni text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-pink-400 to-red-400 bg-clip-text text-transparent">
                    PERFUMES
                  </span>
                                </div>

                                <div className="font-bodoni text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 sm:mb-6 leading-none animate-scale-in-delay">
                                    $45
                                </div>
                            </div>

                            <p className="font-poppins text-sm sm:text-base md:text-lg text-gray-100 mb-8 sm:mb-10 max-w-2xl leading-relaxed font-normal animate-fade-in-up-delay-3">
                                Experimenta la <span className="font-semibold text-pink-200">elegancia y sofisticación</span> de las mejores fragancias del mundo.
                                <span className="block mt-1 sm:mt-2 text-pink-100">Calidad premium a precios accesibles.</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up-delay-4">
                                <Link
                                    to="/productos"
                                    className="font-poppins bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 hover:from-pink-600 hover:via-pink-700 hover:to-purple-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-sm sm:text-base transition-all duration-300 shadow-2xl hover:shadow-pink-500/30 transform hover:scale-105 hover:-translate-y-1 text-center"
                                >
                                    DESCUBRIR AHORA
                                </Link>

                                <button
                                    onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="font-poppins border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-sm sm:text-base transition-all duration-300 hover:border-white/50 transform hover:scale-105"
                                >
                                    VER OFERTAS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide indicators */}
                <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`transition-all duration-300 ${
                                index === currentSlide
                                    ? 'w-8 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-lg'
                                    : 'w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full'
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        Nuestras Categorías
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {productosData.categories.map(category => (
                            <Link
                                key={category.id}
                                to={`/productos?category=${category.id}`}
                                className="group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-pink-100"
                            >
                                <div className="relative">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-24 sm:h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 text-lg sm:text-2xl bg-white/90 rounded-full p-1 sm:p-2">
                                        {category.icon}
                                    </div>
                                </div>
                                <div className="p-3 sm:p-4 text-center">
                                    <h3 className="font-bold text-gray-800 text-xs sm:text-sm group-hover:text-pink-600 transition-colors">
                                        {category.name}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-12 sm:py-16 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Productos Destacados
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">Los favoritos de nuestros clientes</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-8 sm:mt-12">
                        <Link
                            to="/productos"
                            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Ver Todos los Productos
                        </Link>
                    </div>
                </div>
            </section>

            {/* Special Offers */}
            <section id="ofertas" className="py-12 sm:py-16 bg-gradient-to-r from-pink-100 to-purple-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        Ofertas Irresistibles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl text-center transition-all duration-300 hover:shadow-pink-500/25 hover:-translate-y-2 border border-pink-200">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">DESCUENTO</h3>
                            <div className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-4">
                                50%
                            </div>
                            <p className="text-xl sm:text-2xl font-bold mb-4 text-gray-700">OFF</p>
                            <p className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">FEROMONAS</p>
                            <div className="flex justify-center space-x-4 mt-4 sm:mt-6">
                                <img
                                    src="https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3"
                                    alt="Feromona"
                                    className="w-16 sm:w-24 h-16 sm:h-24 object-cover rounded-xl shadow-lg"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3"
                                    alt="Feromona"
                                    className="w-16 sm:w-24 h-16 sm:h-24 object-cover rounded-xl shadow-lg"
                                />
                            </div>
                        </div>

                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl text-center transition-all duration-300 hover:shadow-purple-500/25 hover:-translate-y-2 border border-purple-200">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">DESCUENTO</h3>
                            <div className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-4">
                                50%
                            </div>
                            <p className="text-xl sm:text-2xl font-bold mb-4 text-gray-700">OFF</p>
                            <p className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">SPLASH</p>
                            <div className="flex justify-center space-x-4 mt-4 sm:mt-6">
                                <img
                                    src="https://i0.wp.com/www.baratazo.com/baratazo/wp-content/uploads/2022/11/vs-rush-splash.webp?fit=1754%2C1754&ssl=1"
                                    alt="Splash"
                                    className="w-16 sm:w-24 h-16 sm:h-24 object-cover rounded-xl shadow-lg"
                                />
                                <img
                                    src="https://victoriassecretbeautyecu.vtexassets.com/arquivos/ids/173851/112047176582_SW.jpg?v=638790432814230000"
                                    alt="Splash"
                                    className="w-16 sm:w-24 h-16 sm:h-24 object-cover rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-12 sm:py-16 bg-gradient-to-r from-pink-500 to-purple-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        ¡No te pierdas nuestras ofertas exclusivas!
                    </h2>
                    <p className="text-pink-100 text-base sm:text-lg mb-6 sm:mb-8">
                        Suscríbete y recibe descuentos especiales en tu email
                    </p>
                    <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full border-0 focus:ring-4 focus:ring-white/30 text-sm sm:text-base"
                        />
                        <button className="bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                            Suscribirse
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;