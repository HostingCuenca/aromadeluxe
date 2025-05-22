import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Send, Star, User, Truck } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
    });
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch random female users for reviews
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=6&gender=female&nat=us,gb,au,ca');
                const data = await response.json();

                const reviewsData = data.results.map((user, index) => ({
                    id: index + 1,
                    name: `${user.name.first} ${user.name.last}`,
                    avatar: user.picture.large,
                    rating: [4.5, 5, 4.8, 4.9, 5, 4.7][index],
                    comment: [
                        "¡Increíbles fragancias! La calidad es excelente y el precio súper accesible. Mi favorita es la inspirada en Black Opium, dura todo el día.",
                        "Servicio al cliente excepcional. Me ayudaron a elegir el perfume perfecto para mi tipo de piel. Definitivamente volveré a comprar.",
                        "Las cremas corporales son divinas, dejan la piel súper suave y el aroma perdura horas. La entrega fue rapidísima.",
                        "Compré el set Paradise y quedé enamorada. La presentación es hermosa y la fragancia es exactamente como esperaba.",
                        "Excelente relación calidad-precio. Los decants son perfectos para probar antes de comprar el tamaño completo.",
                        "El splash refrescante es perfecto para el verano. Fresco, duradero y con un aroma delicioso que recibo muchos cumplidos."
                    ][index],
                    date: [
                        "Hace 2 días",
                        "Hace 1 semana",
                        "Hace 3 días",
                        "Hace 5 días",
                        "Hace 1 semana",
                        "Hace 4 días"
                    ][index],
                    verified: true
                }));

                setReviews(reviewsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                // Fallback reviews if API fails
                setReviews([
                    {
                        id: 1,
                        name: "María González",
                        avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c2bb?w=150&h=150&fit=crop&crop=face",
                        rating: 5,
                        comment: "¡Increíbles fragancias! La calidad es excelente y el precio súper accesible.",
                        date: "Hace 2 días",
                        verified: true
                    },
                    {
                        id: 2,
                        name: "Ana Rodríguez",
                        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                        rating: 4.8,
                        comment: "Servicio al cliente excepcional. Me ayudaron a elegir el perfume perfecto.",
                        date: "Hace 1 semana",
                        verified: true
                    }
                ]);
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `¡Hola! Me comunico desde el formulario de contacto:

👤 *DATOS DE CONTACTO:*
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}

📋 *CONSULTA:*
Asunto: ${formData.asunto}
Mensaje: ${formData.mensaje}

¡Gracias!`;

        const whatsappUrl = `https://wa.me/593999999999?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={16}
                className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
            />
        ));
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        ¡Hablemos!
                    </h1>
                    <p className="text-xl sm:text-2xl text-pink-100 mb-8 max-w-3xl mx-auto">
                        Estamos aquí para ayudarte a encontrar tu fragancia perfecta
                    </p>

                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                            <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                            <h3 className="text-white font-bold mb-2">WhatsApp</h3>
                            <p className="text-pink-100">+593 99 999 9999</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                            <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                            <h3 className="text-white font-bold mb-2">Email</h3>
                            <p className="text-pink-100">info@aromasdeluxe.com</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                            <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
                            <h3 className="text-white font-bold mb-2">Ubicación</h3>
                            <p className="text-pink-100">Cuenca, Ecuador</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Shipping Banner Section */}
            <section className="py-8 bg-gradient-to-r from-green-500 to-emerald-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center space-x-4 text-white">
                        <Truck className="w-8 h-8" />
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold">🚚 ENVÍO GRATIS</h2>
                            <p className="text-green-100 text-lg">En pedidos de $99 o más</p>
                        </div>
                        <Truck className="w-8 h-8" />
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                Envíanos un Mensaje
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        <User size={16} className="inline mr-2 text-pink-600" />
                                        Nombre Completo *
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        className="w-full p-4 border-2 border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                        placeholder="Tu nombre completo"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            <Mail size={16} className="inline mr-2 text-pink-600" />
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full p-4 border-2 border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                            placeholder="tu@email.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            <Phone size={16} className="inline mr-2 text-pink-600" />
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                            className="w-full p-4 border-2 border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                            placeholder="0999999999"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Asunto *
                                    </label>
                                    <select
                                        name="asunto"
                                        value={formData.asunto}
                                        onChange={handleInputChange}
                                        className="w-full p-4 border-2 border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Selecciona un asunto</option>
                                        <option value="Consulta sobre productos">Consulta sobre productos</option>
                                        <option value="Pedido personalizado">Pedido personalizado</option>
                                        <option value="Información de envíos">Información de envíos</option>
                                        <option value="Reclamo o devolución">Reclamo o devolución</option>
                                        <option value="Colaboración comercial">Colaboración comercial</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Mensaje *
                                    </label>
                                    <textarea
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleInputChange}
                                        rows="6"
                                        className="w-full p-4 border-2 border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Cuéntanos cómo podemos ayudarte..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 px-6 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <Send size={20} />
                                    <span>Enviar Mensaje por WhatsApp</span>
                                </button>
                            </div>
                        </div>

                        {/* Contact Info and Social */}
                        <div className="space-y-8">
                            {/* Business Hours */}
                            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Clock className="mr-3 text-pink-600" />
                                    Horarios de Atención
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-700">Lunes - Viernes</span>
                                        <span className="text-pink-600 font-bold">8:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-700">Sábados</span>
                                        <span className="text-pink-600 font-bold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-700">Domingos</span>
                                        <span className="text-pink-600 font-bold">10:00 AM - 4:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Síguenos</h3>
                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                    <a
                                        href="https://www.instagram.com/aromasdeluxe.ec/?hl=es"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        <Instagram size={20} />
                                        <span className="font-medium">@aromasdeluxe.ec</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        <Facebook size={20} />
                                        <span className="font-medium">AromasDeluxe</span>
                                    </a>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">Fragancias premium de alta calidad</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">Precios accesibles para todos</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">Envío rápido y seguro</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">Atención personalizada</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">Garantía de satisfacción</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Reviews Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        Lo que dicen nuestras clientas
                    </h2>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg animate-pulse">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                        <div>
                                            <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                                            <div className="h-3 bg-gray-300 rounded w-16"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-3 bg-gray-300 rounded"></div>
                                        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                                        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900 flex items-center">
                                                {review.name}
                                                {review.verified && (
                                                    <div className="ml-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </h4>
                                            <div className="flex items-center space-x-2">
                                                <div className="flex">{renderStars(review.rating)}</div>
                                                <span className="text-sm text-gray-500">({review.rating})</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-3 leading-relaxed">{review.comment}</p>
                                    <p className="text-sm text-gray-500">{review.date}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 sm:p-12">
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                ¿Lista para encontrar tu fragancia perfecta?
                            </h3>
                            <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">
                                Nuestro equipo de expertos está aquí para ayudarte a elegir la fragancia ideal para ti
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://wa.me/593999999999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    <Phone size={20} />
                                    <span>Chatear por WhatsApp</span>
                                </a>
                                <a
                                    href="/productos"
                                    className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-pink-600 transition-all duration-300"
                                >
                                    <span>Ver Productos</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;