import React, { useState, useEffect } from 'react';
import { X, User, Phone, Mail, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ciudadesData from '../data/ciudades.json';

const CheckoutModal = ({ isOpen, onClose }) => {
    const { items, getTotalPrice } = useCart();
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [formData, setFormData] = useState({
        nombreCompleto: '',
        ubicacion: '',
        referencia: '',
        provincia: '',
        ciudad: '',
        telefono: '',
        email: ''
    });

    // Load provinces on component mount
    useEffect(() => {
        const provinceList = Object.keys(ciudadesData.ecuador).sort();
        setProvinces(provinceList);
    }, []);

    // Update cities when province changes
    useEffect(() => {
        if (selectedProvince && ciudadesData.ecuador[selectedProvince]) {
            setCities(ciudadesData.ecuador[selectedProvince]);
        }
    }, [selectedProvince]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'provincia') {
            setSelectedProvince(value);
            setFormData(prev => ({
                ...prev,
                ciudad: '' // Reset ciudad cuando cambia provincia
            }));
        }
    };

    const sendWhatsAppMessage = () => {
        const orderDetails = items.map(item =>
            `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
        ).join('\n');

        const message = `¡Hola! Me gustaría realizar el siguiente pedido:

📦 *PRODUCTOS:*
${orderDetails}

💰 *Total: $${getTotalPrice()}*

👤 *DATOS DEL CLIENTE:*
Nombre: ${formData.nombreCompleto}
Teléfono: ${formData.telefono}
Email: ${formData.email}
Ubicación: ${formData.ubicacion}
Referencia: ${formData.referencia}
Provincia: ${formData.provincia}
Ciudad: ${formData.ciudad}

¡Gracias!`;

        const whatsappUrl = `https://wa.me/593999999999?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-screen overflow-y-auto shadow-2xl">
                {/* Header */}
                <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-pink-50 to-purple-50">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800">Datos de Envío</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                    <form className="space-y-4 md:space-y-5">
                        {/* Nombre Completo */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                <User size={16} className="inline mr-2 text-pink-600" />
                                Nombre Completo *
                            </label>
                            <input
                                type="text"
                                name="nombreCompleto"
                                value={formData.nombreCompleto}
                                onChange={handleInputChange}
                                className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                placeholder="Ingresa tu nombre completo"
                                required
                            />
                        </div>

                        {/* Teléfono y Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    <Phone size={16} className="inline mr-2 text-pink-600" />
                                    Teléfono *
                                </label>
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleInputChange}
                                    className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                    placeholder="0999999999"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    <Mail size={16} className="inline mr-2 text-pink-600" />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>

                        {/* Ubicación */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                <MapPin size={16} className="inline mr-2 text-pink-600" />
                                Ubicación *
                            </label>
                            <input
                                type="text"
                                name="ubicacion"
                                value={formData.ubicacion}
                                onChange={handleInputChange}
                                className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                placeholder="Dirección completa"
                                required
                            />
                        </div>

                        {/* Referencia */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Referencia
                            </label>
                            <input
                                type="text"
                                name="referencia"
                                value={formData.referencia}
                                onChange={handleInputChange}
                                className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                placeholder="Punto de referencia cercano"
                            />
                        </div>

                        {/* Provincia y Ciudad */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Provincia *
                                </label>
                                <select
                                    name="provincia"
                                    value={formData.provincia}
                                    onChange={handleInputChange}
                                    className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                    required
                                >
                                    <option value="">Selecciona una provincia</option>
                                    {provinces.map(province => (
                                        <option key={province} value={province}>
                                            {province}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Ciudad *
                                </label>
                                <select
                                    name="ciudad"
                                    value={formData.ciudad}
                                    onChange={handleInputChange}
                                    className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                    required
                                    disabled={!selectedProvince}
                                >
                                    <option value="">Selecciona una ciudad</option>
                                    {cities.map(city => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </form>

                    {/* Order Summary */}
                    <div className="mt-6 p-4 md:p-5 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                        <h3 className="font-bold mb-3 text-gray-800">Resumen del Pedido:</h3>
                        <div className="space-y-2 max-h-32 overflow-y-auto">
                            {items.map(item => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-gray-600 truncate mr-2">{item.name} x{item.quantity}</span>
                                    <span className="font-bold text-pink-600 flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-pink-200 mt-3 pt-3 font-bold flex justify-between text-lg">
                            <span>Total:</span>
                            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-xl md:text-2xl">
                ${getTotalPrice()}
              </span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={sendWhatsAppMessage}
                        className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 md:py-4 rounded-xl transition-all duration-300 font-bold flex items-center justify-center space-x-2 text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <Phone size={20} />
                        <span>Enviar Pedido por WhatsApp</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;