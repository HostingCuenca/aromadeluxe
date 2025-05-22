// // import React, { useState, useEffect } from 'react';
// // import { ShoppingCart, Menu, X, Plus, Minus, Trash2, Phone, MapPin, User, Mail, Star, Heart, Search, ArrowLeft } from 'lucide-react';
// //
// // const App = () => {
// //   const [cartItems, setCartItems] = useState([]);
// //   const [isCartOpen, setIsCartOpen] = useState(false);
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
// //   const [selectedCategory, setSelectedCategory] = useState('all');
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [provinces, setProvinces] = useState([]);
// //   const [cities, setCities] = useState([]);
// //   const [selectedProvince, setSelectedProvince] = useState('');
// //   const [formData, setFormData] = useState({
// //     nombreCompleto: '',
// //     ubicacion: '',
// //     referencia: '',
// //     provincia: '',
// //     ciudad: '',
// //     telefono: '',
// //     email: ''
// //   });
// //
// //   // Hero images mejoradas de Unsplash con alta calidad
// //   const heroImages = [
// //     {
// //       url: "https://victoriassecretbeautyecu.vtexassets.com/assets/vtex.file-manager-graphql/images/4a2d7092-f44e-4d53-8a72-4fde0ebcb5ad___1c0a23aa7225fcc327b50521d05a5efd.jpg",
// //       title: "Elegancia Absoluta",
// //       subtitle: "Descubre tu esencia perfecta"
// //     },
// //     {
// //       url: "https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A4110dddc-8ef6-45b0-812d-4463699578f2?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1",
// //       title: "Sensualidad Pura",
// //       subtitle: "Fragancias que despiertan pasiones"
// //     },
// //     {
// //       url: "https://hips.hearstapps.com/hmg-prod/images/home-dior-1643269404.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
// //       title: "Lo mejor en perfumes",
// //       subtitle: "La sofisticación a tu alcance"
// //     }
// //   ];
// //
// //   const perfumes = [
// //     {
// //       id: 1,
// //       name: "Inspirado Sauvage Dior",
// //       price: 18.00,
// //       image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       category: "masculino",
// //       description: "Fragancia fresca y amaderada con notas de bergamota y pimienta",
// //       stock: 15,
// //       featured: true,
// //       rating: 4.8
// //     },
// //     {
// //       id: 2,
// //       name: "Inspirado Eros Versace",
// //       price: 18.00,
// //       image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       category: "masculino",
// //       description: "Seductor y apasionado con notas de menta y vainilla",
// //       stock: 12,
// //       featured: true,
// //       rating: 4.7
// //     },
// //     {
// //       id: 3,
// //       name: "Inspirado Le Beau Le Parfum Jean Paul Gaultier",
// //       price: 18.00,
// //       image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       category: "masculino",
// //       description: "Elegante y sofisticado con notas de coco y sándalo",
// //       stock: 8,
// //       featured: true,
// //       rating: 4.6
// //     },
// //     {
// //       id: 4,
// //       name: "Mini Perfumero Decant 5ML",
// //       price: 2.94,
// //       image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       category: "unisex",
// //       description: "Perfecto para probar nuevas fragancias",
// //       stock: 25,
// //       featured: false,
// //       rating: 4.5
// //     },
// //     {
// //       id: 5,
// //       name: "Feromona Black",
// //       price: 18.00,
// //       originalPrice: 39.00,
// //       image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       category: "masculino",
// //       description: "Despierta el deseo con notas intensas y sensuales",
// //       stock: 6,
// //       isOffer: true,
// //       featured: true,
// //       rating: 4.9
// //     },
// //     {
// //       id: 6,
// //       name: "Inspirado Black Opium YSL",
// //       price: 18.00,
// //       image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       category: "femenino",
// //       description: "Delicada y floral con notas de café y vainilla",
// //       stock: 10,
// //       featured: true,
// //       rating: 4.8
// //     },
// //     {
// //       id: 7,
// //       name: "Inspirado Good Girl Carolina Herrera",
// //       price: 18.00,
// //       image: "https://images.unsplash.com/photo-1594736797933-d0589ba40a68?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       category: "femenino",
// //       description: "Intensa y duradera con notas de jazmín y cacao",
// //       stock: 7,
// //       featured: true,
// //       rating: 4.7
// //     },
// //     {
// //       id: 8,
// //       name: "Splash Refrescante Citrus",
// //       price: 12.00,
// //       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       category: "unisex",
// //       description: "Fresco y revitalizante con notas cítricas",
// //       stock: 20,
// //       featured: false,
// //       rating: 4.4
// //     },
// //     {
// //       id: 9,
// //       name: "Inspirado La Vie Est Belle Lancôme",
// //       price: 18.00,
// //       image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       category: "femenino",
// //       description: "Dulce y envolvente con notas de iris y pralinés",
// //       stock: 9,
// //       featured: true,
// //       rating: 4.8
// //     },
// //     {
// //       id: 10,
// //       name: "Inspirado Acqua di Gio Armani",
// //       price: 18.00,
// //       image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       category: "masculino",
// //       description: "Fresco marino con notas acuáticas y cítricas",
// //       stock: 11,
// //       featured: true,
// //       rating: 4.6
// //     }
// //   ];
// //
// //   const categories = [
// //     {
// //       id: "masculino",
// //       name: "Perfumes de Hombre",
// //       image: "https://okperfumes.com/cdn/shop/articles/hermosa-botella-perfume-sobre-fondo-marmol-negro_1.jpg?v=1680858638",
// //       icon: "👨"
// //     },
// //     {
// //       id: "femenino",
// //       name: "Perfumes de Mujer",
// //       image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       icon: "👩"
// //     },
// //     {
// //       id: "unisex",
// //       name: "Perfumes Unisex",
// //       image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       icon: "🌟"
// //     },
// //     {
// //       id: "nicho",
// //       name: "Perfumes de Nicho",
// //       image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
// //       icon: "💎"
// //     }
// //   ];
// //
// //   // Datos de Ecuador para provincias y ciudades
// //   const ecuadorData = {
// //     "Azuay": ["Cuenca", "Gualaceo", "Paute", "Santa Isabel", "Girón", "Sigsig", "Chordeleg"],
// //     "Bolívar": ["Guaranda", "Chillanes", "Chimbo", "Echeandía", "San Miguel", "Caluma", "Las Naves"],
// //     "Cañar": ["Azogues", "Biblián", "Cañar", "La Troncal", "El Tambo", "Déleg", "Suscal"],
// //     "Carchi": ["Tulcán", "Bolívar", "Espejo", "Mira", "Montúfar", "San Pedro de Huaca"],
// //     "Chimborazo": ["Riobamba", "Alausí", "Colta", "Chambo", "Chunchi", "Guamote", "Guano", "Pallatanga", "Penipe", "Cumandá"],
// //     "Cotopaxi": ["Latacunga", "La Maná", "Pangua", "Pujilí", "Salcedo", "Saquisilí", "Sigchos"],
// //     "El Oro": ["Machala", "Arenillas", "Atahualpa", "Balsas", "Chilla", "El Guabo", "Huaquillas", "Las Lajas", "Marcabelí", "Pasaje", "Piñas", "Portovelo", "Santa Rosa", "Zaruma"],
// //     "Esmeraldas": ["Esmeraldas", "Eloy Alfaro", "Muisne", "Quinindé", "San Lorenzo", "Atacames", "Rioverde"],
// //     "Galápagos": ["Puerto Baquerizo Moreno", "Puerto Ayora", "Puerto Villamil"],
// //     "Guayas": ["Guayaquil", "Alfredo Baquerizo Moreno", "Balao", "Balzar", "Colimes", "Daule", "Durán", "El Empalme", "El Triunfo", "Milagro", "Naranjal", "Naranjito", "Palestina", "Pedro Carbo", "Samborondón", "Santa Lucía", "Salitre", "San Jacinto de Yaguachi", "Playas", "Simón Bolívar", "Coronel Marcelino Maridueña", "Lomas de Sargentillo", "Nobol", "General Antonio Elizalde", "Isidro Ayora"],
// //     "Imbabura": ["Ibarra", "Antonio Ante", "Cotacachi", "Otavalo", "Pimampiro", "San Miguel de Urcuquí"],
// //     "Loja": ["Loja", "Calvas", "Catamayo", "Celica", "Chaguarpamba", "Espíndola", "Gonzanamá", "Macará", "Paltas", "Pindal", "Puyango", "Quilanga", "Saraguro", "Sozoranga", "Zapotillo", "Olmedo"],
// //     "Los Ríos": ["Babahoyo", "Baba", "Montalvo", "Puebloviejo", "Quevedo", "Urdaneta", "Ventanas", "Vínces", "Palenque", "Buena Fé", "Valencia", "Mocache", "Quinsaloma"],
// //     "Manabí": ["Portoviejo", "Bolívar", "Chone", "El Carmen", "Flavio Alfaro", "Jipijapa", "Junín", "Manta", "Montecristi", "Paján", "Pichincha", "Rocafuerte", "Santa Ana", "Sucre", "Tosagua", "24 de Mayo", "Pedernales", "Olmedo", "Puerto López", "Jama", "Jaramijó", "San Vicente"],
// //     "Morona Santiago": ["Macas", "Gualaquiza", "Limón Indanza", "Palora", "Santiago", "Sucúa", "Huamboya", "San Juan Bosco", "Taisha", "Logroño", "Pablo Sexto", "Tiwintza"],
// //     "Napo": ["Tena", "Archidona", "El Chaco", "Quijos", "Carlos Julio Arosemena Tola"],
// //     "Orellana": ["Francisco de Orellana", "Aguarico", "La Joya de los Sachas", "Loreto"],
// //     "Pastaza": ["Puyo", "Arajuno", "Mera", "Santa Clara"],
// //     "Pichincha": ["Quito", "Cayambe", "Mejía", "Pedro Moncayo", "Rumiñahui", "San Miguel de los Bancos", "Pedro Vicente Maldonado", "Puerto Quito"],
// //     "Santa Elena": ["Santa Elena", "La Libertad", "Salinas"],
// //     "Santo Domingo de los Tsáchilas": ["Santo Domingo"],
// //     "Sucumbíos": ["Nueva Loja", "Gonzalo Pizarro", "Putumayo", "Shushufindi", "Sucumbíos", "Cascales", "Cuyabeno"],
// //     "Tungurahua": ["Ambato", "Baños de Agua Santa", "Cevallos", "Mocha", "Patate", "Quero", "San Pedro de Pelileo", "Santiago de Píllaro", "Tisaleo"],
// //     "Zamora Chinchipe": ["Zamora", "Chinchipe", "El Pangui", "Palanda", "Paquisha", "Yacuambi", "Yantzaza", "Centinela del Cóndor", "Nangaritza"]
// //   };
// //
// //   // Auto-slide para el hero
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, [heroImages.length]);
// //
// //   // Cargar provincias al montar el componente
// //   useEffect(() => {
// //     const provinceList = Object.keys(ecuadorData).sort();
// //     setProvinces(provinceList);
// //   }, []);
// //
// //   // Actualizar ciudades cuando cambia la provincia
// //   useEffect(() => {
// //     if (selectedProvince && ecuadorData[selectedProvince]) {
// //       setCities(ecuadorData[selectedProvince]);
// //     }
// //   }, [selectedProvince]);
// //
// //   const addToCart = (perfume) => {
// //     const existingItem = cartItems.find(item => item.id === perfume.id);
// //     if (existingItem) {
// //       setCartItems(cartItems.map(item =>
// //           item.id === perfume.id
// //               ? { ...item, quantity: item.quantity + 1 }
// //               : item
// //       ));
// //     } else {
// //       setCartItems([...cartItems, { ...perfume, quantity: 1 }]);
// //     }
// //   };
// //
// //   const updateQuantity = (id, newQuantity) => {
// //     if (newQuantity === 0) {
// //       setCartItems(cartItems.filter(item => item.id !== id));
// //     } else {
// //       setCartItems(cartItems.map(item =>
// //           item.id === id ? { ...item, quantity: newQuantity } : item
// //       ));
// //     }
// //   };
// //
// //   const removeFromCart = (id) => {
// //     setCartItems(cartItems.filter(item => item.id !== id));
// //   };
// //
// //   const getTotalPrice = () => {
// //     return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
// //   };
// //
// //   const getTotalItems = () => {
// //     return cartItems.reduce((total, item) => total + item.quantity, 0);
// //   };
// //
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //
// //     if (name === 'provincia') {
// //       setSelectedProvince(value);
// //       setFormData(prev => ({
// //         ...prev,
// //         ciudad: '' // Reset ciudad cuando cambia provincia
// //       }));
// //     }
// //   };
// //
// //   const sendWhatsAppMessage = () => {
// //     const orderDetails = cartItems.map(item =>
// //         `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
// //     ).join('\n');
// //
// //     const message = `¡Hola! Me gustaría realizar el siguiente pedido:
// //
// // 📦 *PRODUCTOS:*
// // ${orderDetails}
// //
// // 💰 *Total: $${getTotalPrice()}*
// //
// // 👤 *DATOS DEL CLIENTE:*
// // Nombre: ${formData.nombreCompleto}
// // Teléfono: ${formData.telefono}
// // Email: ${formData.email}
// // Ubicación: ${formData.ubicacion}
// // Referencia: ${formData.referencia}
// // Provincia: ${formData.provincia}
// // Ciudad: ${formData.ciudad}
// //
// // ¡Gracias!`;
// //
// //     const whatsappUrl = `https://wa.me/593999999999?text=${encodeURIComponent(message)}`;
// //     window.open(whatsappUrl, '_blank');
// //   };
// //
// //   const filteredPerfumes = perfumes.filter(perfume => {
// //     const matchesCategory = selectedCategory === 'all' || perfume.category === selectedCategory;
// //     const matchesSearch = perfume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         perfume.description.toLowerCase().includes(searchTerm.toLowerCase());
// //     return matchesCategory && matchesSearch;
// //   });
// //
// //   const renderStars = (rating) => {
// //     return [...Array(5)].map((_, i) => (
// //         <Star
// //             key={i}
// //             size={16}
// //             className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
// //         />
// //     ));
// //   };
// //
// //   const ProductCard = ({ perfume }) => (
// //       <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
// //         <div className="relative overflow-hidden">
// //           <img
// //               src={perfume.image}
// //               alt={perfume.name}
// //               className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
// //           />
// //           {perfume.isOffer && (
// //               <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 text-xs font-bold rounded-full animate-pulse">
// //                 OFERTA
// //               </div>
// //           )}
// //           {perfume.stock <= 5 && (
// //               <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 text-xs font-medium rounded-full">
// //                 ¡Solo {perfume.stock}!
// //               </div>
// //           )}
// //           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //           <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 p-2 rounded-full hover:bg-white">
// //             <Heart size={16} className="text-gray-600 hover:text-red-500 transition-colors" />
// //           </button>
// //         </div>
// //
// //         <div className="p-6">
// //           <div className="flex items-center mb-2">
// //             {renderStars(perfume.rating)}
// //             <span className="ml-2 text-sm text-gray-500">({perfume.rating})</span>
// //           </div>
// //
// //           <h3 className="font-bold text-gray-800 mb-2 text-sm leading-tight h-10 line-clamp-2">
// //             {perfume.name}
// //           </h3>
// //
// //           <p className="text-gray-600 text-xs mb-4 h-8 leading-4 line-clamp-2">
// //             {perfume.description}
// //           </p>
// //
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center space-x-2">
// //             <span className="text-2xl font-bold text-gray-900">
// //               ${perfume.price.toFixed(2)}
// //             </span>
// //               {perfume.originalPrice && (
// //                   <span className="text-sm text-gray-500 line-through">
// //                 ${perfume.originalPrice.toFixed(2)}
// //               </span>
// //               )}
// //             </div>
// //
// //             <button
// //                 onClick={() => addToCart(perfume)}
// //                 className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
// //             >
// //               Agregar
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //   );
// //
// //   const CartModal = () => (
// //       <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50">
// //         <div className="h-full w-full md:flex md:justify-end">
// //           <div className="bg-white w-full md:max-w-lg h-full overflow-y-auto">
// //             <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-pink-50 to-purple-50">
// //               <div className="flex items-center space-x-3">
// //                 <button
// //                     onClick={() => setIsCartOpen(false)}
// //                     className="md:hidden p-2 hover:bg-gray-200 rounded-full transition-colors"
// //                 >
// //                   <ArrowLeft size={20} />
// //                 </button>
// //                 <h2 className="text-lg md:text-xl font-bold text-gray-800">Mi Carrito</h2>
// //               </div>
// //               <button
// //                   onClick={() => setIsCartOpen(false)}
// //                   className="hidden md:block p-2 hover:bg-gray-200 rounded-full transition-colors"
// //               >
// //                 <X size={20} />
// //               </button>
// //             </div>
// //
// //             <div className="p-4 md:p-6">
// //               {cartItems.length === 0 ? (
// //                   <div className="text-center py-12">
// //                     <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
// //                     <p className="text-gray-500 text-lg font-medium">Tu carrito está vacío</p>
// //                     <p className="text-gray-400 text-sm mt-2">¡Descubre nuestras fragancias exclusivas!</p>
// //                   </div>
// //               ) : (
// //                   <>
// //                     <div className="space-y-4">
// //                       {cartItems.map(item => (
// //                           <div key={item.id} className="flex items-center space-x-4 p-3 md:p-4 bg-gradient-to-r from-gray-50 to-pink-50 rounded-xl">
// //                             <img
// //                                 src={item.image}
// //                                 alt={item.name}
// //                                 className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-lg shadow-md"
// //                             />
// //                             <div className="flex-1 min-w-0">
// //                               <h4 className="font-semibold text-xs md:text-sm text-gray-800 truncate">{item.name}</h4>
// //                               <p className="text-pink-600 font-bold text-sm">${item.price.toFixed(2)}</p>
// //                               <div className="flex items-center space-x-2 md:space-x-3 mt-2">
// //                                 <button
// //                                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
// //                                     className="p-1 hover:bg-pink-100 rounded-full transition-colors"
// //                                 >
// //                                   <Minus size={14} className="text-pink-600" />
// //                                 </button>
// //                                 <span className="px-2 md:px-3 py-1 bg-white rounded-lg text-xs md:text-sm font-bold min-w-8 md:min-w-12 text-center shadow-sm">
// //                             {item.quantity}
// //                           </span>
// //                                 <button
// //                                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
// //                                     className="p-1 hover:bg-pink-100 rounded-full transition-colors"
// //                                 >
// //                                   <Plus size={14} className="text-pink-600" />
// //                                 </button>
// //                                 <button
// //                                     onClick={() => removeFromCart(item.id)}
// //                                     className="p-1 hover:bg-red-100 rounded-full text-red-600 transition-colors ml-1 md:ml-2"
// //                                 >
// //                                   <Trash2 size={14} />
// //                                 </button>
// //                               </div>
// //                             </div>
// //                           </div>
// //                       ))}
// //                     </div>
// //
// //                     <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
// //                       <div className="flex justify-between items-center mb-4 md:mb-6">
// //                         <span className="text-base md:text-lg font-bold text-gray-800">Total:</span>
// //                         <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
// //                       ${getTotalPrice()}
// //                     </span>
// //                       </div>
// //                       <button
// //                           onClick={() => setIsCheckoutOpen(true)}
// //                           className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 md:py-4 rounded-xl transition-all duration-300 font-bold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
// //                       >
// //                         Finalizar Compra
// //                       </button>
// //                     </div>
// //                   </>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //   );
// //
// //   const CheckoutModal = () => (
// //       <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// //         <div className="bg-white rounded-2xl w-full max-w-2xl max-h-screen overflow-y-auto shadow-2xl">
// //           <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-pink-50 to-purple-50">
// //             <h2 className="text-lg md:text-xl font-bold text-gray-800">Datos de Envío</h2>
// //             <button
// //                 onClick={() => setIsCheckoutOpen(false)}
// //                 className="p-2 hover:bg-gray-200 rounded-full transition-colors"
// //             >
// //               <X size={20} />
// //             </button>
// //           </div>
// //
// //           <div className="p-4 md:p-6">
// //             <form className="space-y-4 md:space-y-5">
// //               <div>
// //                 <label className="block text-sm font-bold text-gray-700 mb-2">
// //                   <User size={16} className="inline mr-2 text-pink-600" />
// //                   Nombre Completo *
// //                 </label>
// //                 <input
// //                     type="text"
// //                     name="nombreCompleto"
// //                     value={formData.nombreCompleto}
// //                     onChange={handleInputChange}
// //                     className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
// //                     placeholder="Ingresa tu nombre completo"
// //                     required
// //                 />
// //               </div>
// //
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <div>
// //                   <label className="block text-sm font-bold text-gray-700 mb-2">
// //                     <Phone size={16} className="inline mr-2 text-pink-600" />
// //                     Teléfono *
// //                   </label>
// //                   <input
// //                       type="tel"
// //                       name="telefono"
// //                       value={formData.telefono}
// //                       onChange={handleInputChange}
// //                       className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
// //                       placeholder="0999999999"
// //                       required
// //                   />
// //                 </div>
// //
// //                 <div>
// //                   <label className="block text-sm font-bold text-gray-700 mb-2">
// //                     <Mail size={16} className="inline mr-2 text-pink-600" />
// //                     Email
// //                   </label>
// //                   <input
// //                       type="email"
// //                       name="email"
// //                       value={formData.email}
// //                       onChange={handleInputChange}
// //                       className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
// //                       placeholder="tu@email.com"
// //                   />
// //                 </div>
// //               </div>
// //
// //               <div>
// //                 <label className="block text-sm font-bold text-gray-700 mb-2">
// //                   <MapPin size={16} className="inline mr-2 text-pink-600" />
// //                   Ubicación *
// //                 </label>
// //                 <input
// //                     type="text"
// //                     name="ubicacion"
// //                     value={formData.ubicacion}
// //                     onChange={handleInputChange}
// //                     className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
// //                     placeholder="Dirección completa"
// //                     required
// //                 />
// //               </div>
// //
// //               <div>
// //                 <label className="block text-sm font-bold text-gray-700 mb-2">
// //                   Referencia
// //                 </label>
// //                 <input
// //                     type="text"
// //                     name="referencia"
// //                     value={formData.referencia}
// //                     onChange={handleInputChange}
// //                     className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
// //                     placeholder="Punto de referencia cercano"
// //                 />
// //               </div>
// //
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <div>
// //                   <label className="block text-sm font-bold text-gray-700 mb-2">
// //                     Provincia *
// //                   </label>
// //                   <select
// //                       name="provincia"
// //                       value={formData.provincia}
// //                       onChange={handleInputChange}
// //                       className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
// //                       required
// //                   >
// //                     <option value="">Selecciona una provincia</option>
// //                     {provinces.map(province => (
// //                         <option key={province} value={province}>
// //                           {province}
// //                         </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //
// //                 <div>
// //                   <label className="block text-sm font-bold text-gray-700 mb-2">
// //                     Ciudad *
// //                   </label>
// //                   <select
// //                       name="ciudad"
// //                       value={formData.ciudad}
// //                       onChange={handleInputChange}
// //                       className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
// //                       required
// //                       disabled={!selectedProvince}
// //                   >
// //                     <option value="">Selecciona una ciudad</option>
// //                     {cities.map(city => (
// //                         <option key={city} value={city}>
// //                           {city}
// //                         </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>
// //             </form>
// //
// //             <div className="mt-6 p-4 md:p-5 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
// //               <h3 className="font-bold mb-3 text-gray-800">Resumen del Pedido:</h3>
// //               <div className="space-y-2 max-h-32 overflow-y-auto">
// //                 {cartItems.map(item => (
// //                     <div key={item.id} className="flex justify-between text-sm">
// //                       <span className="text-gray-600 truncate mr-2">{item.name} x{item.quantity}</span>
// //                       <span className="font-bold text-pink-600 flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
// //                     </div>
// //                 ))}
// //               </div>
// //               <div className="border-t border-pink-200 mt-3 pt-3 font-bold flex justify-between text-lg">
// //                 <span>Total:</span>
// //                 <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-xl md:text-2xl">
// //                 ${getTotalPrice()}
// //               </span>
// //               </div>
// //             </div>
// //
// //             <button
// //                 onClick={sendWhatsAppMessage}
// //                 className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 md:py-4 rounded-xl transition-all duration-300 font-bold flex items-center justify-center space-x-2 text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
// //             >
// //               <Phone size={20} />
// //               <span>Enviar Pedido por WhatsApp</span>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //   );
// //
// //   return (
// //       <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50" style={{ fontFamily: "'Poppins', serif" }}>
// //         {/* Navigation */}
// //         <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-40 border-b border-pink-100">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="flex justify-between items-center h-16">
// //               <div className="flex items-center">
// //                 <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
// //                   Aromas<span className="text-red-500">Deluxe</span>
// //                 </h1>
// //               </div>
// //
// //               <div className="hidden md:flex items-center space-x-8">
// //                 <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-700 hover:text-pink-600 transition-colors font-medium bg-transparent border-none cursor-pointer">Inicio</button>
// //                 <button onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-pink-600 transition-colors font-medium bg-transparent border-none cursor-pointer">Productos</button>
// //                 <button onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-pink-600 transition-colors font-medium bg-transparent border-none cursor-pointer">Ofertas</button>
// //                 <button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-pink-600 transition-colors font-medium bg-transparent border-none cursor-pointer">Contacto</button>
// //               </div>
// //
// //               <div className="flex items-center space-x-4">
// //                 <button
// //                     onClick={() => setIsCartOpen(true)}
// //                     className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors"
// //                 >
// //                   <ShoppingCart size={24} />
// //                   {getTotalItems() > 0 && (
// //                       <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
// //                     {getTotalItems()}
// //                   </span>
// //                   )}
// //                 </button>
// //
// //                 <button
// //                     onClick={() => setIsMenuOpen(!isMenuOpen)}
// //                     className="md:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors"
// //                 >
// //                   <Menu size={24} />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </nav>
// //
// //         {/* Hero Section - Victoria's Secret Style */}
// //         {/*<section className="relative h-screen overflow-hidden">*/}
// //         {/*  <div className="absolute inset-0">*/}
// //         {/*    {heroImages.map((image, index) => (*/}
// //         {/*        <div*/}
// //         {/*            key={index}*/}
// //         {/*            className={`absolute inset-0 transition-opacity duration-1000 ${*/}
// //         {/*                index === currentSlide ? 'opacity-100' : 'opacity-0'*/}
// //         {/*            }`}*/}
// //         {/*        >*/}
// //         {/*          <img*/}
// //         {/*              src={image.url}*/}
// //         {/*              alt={image.title}*/}
// //         {/*              className="w-full h-full object-cover"*/}
// //         {/*          />*/}
// //         {/*          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />*/}
// //         {/*        </div>*/}
// //         {/*    ))}*/}
// //         {/*  </div>*/}
// //
// //         {/*  <div className="relative z-10 h-full flex items-center">*/}
// //         {/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">*/}
// //         {/*      <div className="max-w-2xl">*/}
// //         {/*        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">*/}
// //         {/*          {heroImages[currentSlide].title}*/}
// //         {/*        </h1>*/}
// //         {/*        <p className="text-lg sm:text-xl md:text-2xl text-pink-200 mb-8 font-light">*/}
// //         {/*          {heroImages[currentSlide].subtitle}*/}
// //         {/*        </p>*/}
// //         {/*        <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">*/}
// //         {/*          <span className="text-white">3X </span>*/}
// //         {/*          <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">PERFUMES</span>*/}
// //         {/*        </div>*/}
// //         {/*        <div className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6">*/}
// //         {/*          $45*/}
// //         {/*        </div>*/}
// //         {/*        <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-xl leading-relaxed">*/}
// //         {/*          Experimenta la elegancia y sofisticación de las mejores fragancias del mundo.*/}
// //         {/*          Calidad premium a precios accesibles.*/}
// //         {/*        </p>*/}
// //         {/*        <button*/}
// //         {/*            onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}*/}
// //         {/*            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105"*/}
// //         {/*        >*/}
// //         {/*          DESCUBRIR AHORA*/}
// //         {/*        </button>*/}
// //         {/*      </div>*/}
// //         {/*    </div>*/}
// //         {/*  </div>*/}
// //
// //         {/*  /!* Slide indicators *!/*/}
// //         {/*  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">*/}
// //         {/*    {heroImages.map((_, index) => (*/}
// //         {/*        <button*/}
// //         {/*            key={index}*/}
// //         {/*            onClick={() => setCurrentSlide(index)}*/}
// //         {/*            className={`w-3 h-3 rounded-full transition-all duration-300 ${*/}
// //         {/*                index === currentSlide*/}
// //         {/*                    ? 'bg-white shadow-lg'*/}
// //         {/*                    : 'bg-white/50 hover:bg-white/75'*/}
// //         {/*            }`}*/}
// //         {/*        />*/}
// //         {/*    ))}*/}
// //         {/*  </div>*/}
// //         {/*</section>*/}
// //         {/* Hero Section - Victoria's Secret Style */}
// //         <section className="relative h-screen max-h-screen overflow-hidden flex items-center">
// //           <div className="absolute inset-0">
// //             {heroImages.map((image, index) => (
// //                 <div
// //                     key={index}
// //                     className={`absolute inset-0 transition-opacity duration-1000 ${
// //                         index === currentSlide ? 'opacity-100' : 'opacity-0'
// //                     }`}
// //                 >
// //                   <img
// //                       src={image.url}
// //                       alt={image.title}
// //                       className="w-full h-full object-cover"
// //                   />
// //                   {/* Gradiente sutil horizontal para mayor contraste */}
// //                   <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60" />
// //                   {/* Gradiente desde abajo para mejor legibilidad */}
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
// //                   {/* Overlay sutil para unificar */}
// //                   <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-transparent to-pink-900/15" />
// //                 </div>
// //             ))}
// //           </div>
// //
// //           <div className="relative z-10 w-full">
// //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //               <div className="max-w-4xl">
// //                 {/* Título principal con animación */}
// //                 <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight animate-fade-in-up">
// //           <span className="block text-shadow-lg">
// //             {heroImages[currentSlide].title}
// //           </span>
// //                 </h1>
// //
// //                 {/* Subtítulo con animación retrasada */}
// //                 <p className="font-poppins text-lg sm:text-xl md:text-2xl text-pink-100 mb-6 sm:mb-8 font-light tracking-wide leading-relaxed animate-fade-in-up-delay-1">
// //                   {heroImages[currentSlide].subtitle}
// //                 </p>
// //
// //                 {/* Oferta principal con animaciones escalonadas */}
// //                 <div className="mb-6 sm:mb-8 animate-fade-in-up-delay-2">
// //                   <div className="flex items-baseline space-x-3 sm:space-x-4 mb-3 sm:mb-4">
// //             <span className="font-bodoni text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
// //               3X
// //             </span>
// //                     <span className="font-bodoni text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-pink-400 to-red-400 bg-clip-text text-transparent">
// //               PERFUMES
// //             </span>
// //                   </div>
// //
// //                   {/* Precio destacado */}
// //                   <div className="font-bodoni text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 sm:mb-6 leading-none animate-scale-in-delay">
// //                     $45
// //                   </div>
// //                 </div>
// //
// //                 {/* Descripción con animación */}
// //                 <p className="font-poppins text-sm sm:text-base md:text-lg text-gray-100 mb-8 sm:mb-10 max-w-2xl leading-relaxed font-normal animate-fade-in-up-delay-3">
// //                   Experimenta la <span className="font-semibold text-pink-200">elegancia y sofisticación</span> de las mejores fragancias del mundo.
// //                   <span className="block mt-1 sm:mt-2 text-pink-100">Calidad premium a precios accesibles.</span>
// //                 </p>
// //
// //                 {/* Botones con animación */}
// //                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up-delay-4">
// //                   <button
// //                       onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
// //                       className="font-poppins bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 hover:from-pink-600 hover:via-pink-700 hover:to-purple-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-sm sm:text-base transition-all duration-300 shadow-2xl hover:shadow-pink-500/30 transform hover:scale-105 hover:-translate-y-1"
// //                   >
// //                     DESCUBRIR AHORA
// //                   </button>
// //
// //                   <button
// //                       onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
// //                       className="font-poppins border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-sm sm:text-base transition-all duration-300 hover:border-white/50 transform hover:scale-105"
// //                   >
// //                     VER OFERTAS
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //
// //           {/* Slide indicators en la parte inferior */}
// //           <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
// //             {heroImages.map((_, index) => (
// //                 <button
// //                     key={index}
// //                     onClick={() => setCurrentSlide(index)}
// //                     className={`transition-all duration-300 ${
// //                         index === currentSlide
// //                             ? 'w-8 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-lg'
// //                             : 'w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full'
// //                     }`}
// //                 />
// //             ))}
// //           </div>
// //         </section>
// //
// //         {/* Search Section */}
// //         <section className="py-6 sm:py-8 bg-white/80 backdrop-blur-sm">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="max-w-md mx-auto relative">
// //               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
// //               <input
// //                   type="text"
// //                   placeholder="Buscar fragancias..."
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                   className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-pink-200 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white/90 backdrop-blur-sm text-sm sm:text-base"
// //               />
// //             </div>
// //           </div>
// //         </section>
// //
// //         {/* Categories */}
// //         <section className="py-12 sm:py-16">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
// //               Nuestras Categorías
// //             </h2>
// //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
// //               {categories.map(category => (
// //                   <div
// //                       key={category.id}
// //                       onClick={() => setSelectedCategory(category.id)}
// //                       className="group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-pink-100"
// //                   >
// //                     <div className="relative">
// //                       <img
// //                           src={category.image}
// //                           alt={category.name}
// //                           className="w-full h-24 sm:h-32 object-cover transition-transform duration-300 group-hover:scale-110"
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //                       <div className="absolute top-2 sm:top-3 right-2 sm:right-3 text-lg sm:text-2xl bg-white/90 rounded-full p-1 sm:p-2">
// //                         {category.icon}
// //                       </div>
// //                     </div>
// //                     <div className="p-3 sm:p-4 text-center">
// //                       <h3 className="font-bold text-gray-800 text-xs sm:text-sm group-hover:text-pink-600 transition-colors">
// //                         {category.name}
// //                       </h3>
// //                     </div>
// //                   </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //
// //         {/* Products Section */}
// //         <section id="productos" className="py-12 sm:py-16 bg-white/50 backdrop-blur-sm">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="text-center mb-8 sm:mb-12">
// //               <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
// //                 Fragancias Exclusivas
// //               </h2>
// //               <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">Descubre tu esencia perfecta</p>
// //
// //               <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
// //                 <button
// //                     onClick={() => setSelectedCategory('all')}
// //                     className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
// //                         selectedCategory === 'all'
// //                             ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
// //                             : 'bg-white text-gray-700 hover:bg-pink-50 border-2 border-pink-200'
// //                     }`}
// //                 >
// //                   Todos
// //                 </button>
// //                 {categories.map(category => (
// //                     <button
// //                         key={category.id}
// //                         onClick={() => setSelectedCategory(category.id)}
// //                         className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
// //                             selectedCategory === category.id
// //                                 ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
// //                                 : 'bg-white text-gray-700 hover:bg-pink-50 border-2 border-pink-200'
// //                         }`}
// //                     >
// //                       {category.name}
// //                     </button>
// //                 ))}
// //               </div>
// //             </div>
// //
// //             {filteredPerfumes.length === 0 ? (
// //                 <div className="text-center py-12">
// //                   <Search size={64} className="mx-auto text-gray-300 mb-4" />
// //                   <p className="text-gray-500 text-lg">No se encontraron productos</p>
// //                   <p className="text-gray-400 text-sm mt-2">Intenta con otros términos de búsqueda</p>
// //                 </div>
// //             ) : (
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
// //                   {filteredPerfumes.map(perfume => (
// //                       <ProductCard key={perfume.id} perfume={perfume} />
// //                   ))}
// //                 </div>
// //             )}
// //           </div>
// //         </section>
// //
// //         {/* Special Offers */}
// //         <section id="ofertas" className="py-12 sm:py-16 bg-gradient-to-r from-pink-100 to-purple-100">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
// //               Ofertas Irresistibles
// //             </h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
// //               <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl text-center transition-all duration-300 hover:shadow-pink-500/25 hover:-translate-y-2 border border-pink-200">
// //                 <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">DESCUENTO</h3>
// //                 <div className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-4">
// //                   50%
// //                 </div>
// //                 <p className="text-xl sm:text-2xl font-bold mb-4 text-gray-700">OFF</p>
// //                 <p className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">FEROMONAS</p>
// //                 <div className="flex justify-center space-x-4 mt-4 sm:mt-6">
// //                   <img
// //                       src="https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3"
// //                       alt="Feromona"
// //                       className="w-16 sm:w-24 h-16 sm:h-24 object-cover rounded-xl shadow-lg"
// //                   />
// //                   <img
// //                       src="https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3"
// //                       alt="Feromona"
// //                       className="w-16 sm:w-24 h-16 sm:h-24 object-cover rounded-xl shadow-lg"
// //                   />
// //                 </div>
// //               </div>
// //
// //               <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl text-center transition-all duration-300 hover:shadow-purple-500/25 hover:-translate-y-2 border border-purple-200">
// //                 <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">DESCUENTO</h3>
// //                 <div className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-4">
// //                   50%
// //                 </div>
// //                 <p className="text-xl sm:text-2xl font-bold mb-4 text-gray-700">OFF</p>
// //                 <p className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">SPLASH</p>
// //                 <div className="flex justify-center space-x-4 mt-4 sm:mt-6">
// //                   <img
// //                       src="https://i0.wp.com/www.baratazo.com/baratazo/wp-content/uploads/2022/11/vs-rush-splash.webp?fit=1754%2C1754&ssl=1"
// //                       alt="Splash"
// //                       className="w-16 sm:w-24 h-16 sm:h-24 object-cover rounded-xl shadow-lg"
// //                   />
// //                   <img
// //                       src="https://victoriassecretbeautyecu.vtexassets.com/arquivos/ids/173851/112047176582_SW.jpg?v=638790432814230000"
// //                       alt="Splash"
// //                       className="w-16 sm:w-24 h-16 sm:h-24 object-cover rounded-xl shadow-lg"
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //
// //         {/* Newsletter Section */}
// //         <section className="py-12 sm:py-16 bg-gradient-to-r from-pink-500 to-purple-600">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
// //               ¡No te pierdas nuestras ofertas exclusivas!
// //             </h2>
// //             <p className="text-pink-100 text-base sm:text-lg mb-6 sm:mb-8">
// //               Suscríbete y recibe descuentos especiales en tu email
// //             </p>
// //             <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
// //               <input
// //                   type="email"
// //                   placeholder="tu@email.com"
// //                   className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full border-0 focus:ring-4 focus:ring-white/30 text-sm sm:text-base"
// //               />
// //               <button className="bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
// //                 Suscribirse
// //               </button>
// //             </div>
// //           </div>
// //         </section>
// //
// //         {/* Footer */}
// //         <footer id="contacto" className="bg-gray-900 text-white py-12 sm:py-16">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
// //               <div>
// //                 <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
// //                   Aromas<span className="text-red-400">Deluxe</span>
// //                 </h3>
// //                 <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
// //                   Perfumes premium de alta calidad a precios accesibles en Ecuador.
// //                   Experimenta la elegancia sin comprometer tu presupuesto.
// //                 </p>
// //                 <div className="flex space-x-4">
// //                   <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
// //                     <span className="text-white font-bold text-sm sm:text-base">F</span>
// //                   </div>
// //                   <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
// //                     <span className="text-white font-bold text-sm sm:text-base">I</span>
// //                   </div>
// //                   <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
// //                     <span className="text-white font-bold text-sm sm:text-base">T</span>
// //                   </div>
// //                 </div>
// //               </div>
// //
// //               <div>
// //                 <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg text-pink-400">Enlaces Rápidos</h4>
// //                 <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
// //                   <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-pink-400 transition-colors bg-transparent border-none cursor-pointer text-left">Inicio</button></li>
// //                   <li><button onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-pink-400 transition-colors bg-transparent border-none cursor-pointer text-left">Productos</button></li>
// //                   <li><button onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-pink-400 transition-colors bg-transparent border-none cursor-pointer text-left">Ofertas</button></li>
// //                   <li><button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-pink-400 transition-colors bg-transparent border-none cursor-pointer text-left">Contacto</button></li>
// //                 </ul>
// //               </div>
// //
// //               <div>
// //                 <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg text-purple-400">Categorías</h4>
// //                 <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
// //                   <li><button onClick={() => { setSelectedCategory('masculino'); document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-purple-400 transition-colors bg-transparent border-none cursor-pointer text-left">Masculinos</button></li>
// //                   <li><button onClick={() => { setSelectedCategory('femenino'); document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-purple-400 transition-colors bg-transparent border-none cursor-pointer text-left">Femeninos</button></li>
// //                   <li><button onClick={() => { setSelectedCategory('unisex'); document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-purple-400 transition-colors bg-transparent border-none cursor-pointer text-left">Unisex</button></li>
// //                   <li><button onClick={() => { setSelectedCategory('nicho'); document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-purple-400 transition-colors bg-transparent border-none cursor-pointer text-left">De Nicho</button></li>
// //                 </ul>
// //               </div>
// //
// //               <div>
// //                 <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg text-pink-400">Contacto</h4>
// //                 <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
// //                   <p className="flex items-center">
// //                     <Phone size={16} className="mr-3 text-pink-400 flex-shrink-0" />
// //                     +593 99 999 9999
// //                   </p>
// //                   <p className="flex items-center">
// //                     <Mail size={16} className="mr-3 text-pink-400 flex-shrink-0" />
// //                     info@aromasdeluxe.com
// //                   </p>
// //                   <p className="flex items-center">
// //                     <MapPin size={16} className="mr-3 text-pink-400 flex-shrink-0" />
// //                     Cuenca, Ecuador
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //
// //             <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
// //               <p className="text-sm sm:text-base">&copy; 2025 Aromas Deluxe. Todos los derechos reservados.</p>
// //               <p className="mt-2 text-xs sm:text-sm">
// //                 Diseñado y desarrollado por{' '}
// //                 <a
// //                     href="https://torisoftt.com"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-300 hover:to-purple-300 transition-all"
// //                 >
// //                   torisoftt.com
// //                 </a>
// //               </p>
// //             </div>
// //
// //           </div>
// //         </footer>
// //
// //         {/* Modals */}
// //         {isCartOpen && <CartModal />}
// //         {isCheckoutOpen && <CheckoutModal />}
// //
// //         {/* Mobile Menu */}
// //         {isMenuOpen && (
// //             <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden">
// //               <div className="bg-white w-64 h-full shadow-2xl">
// //                 <div className="p-4 sm:p-6 border-b border-pink-100 bg-gradient-to-r from-pink-50 to-purple-50">
// //                   <div className="flex justify-between items-center">
// //                     <h2 className="text-lg font-bold text-gray-800" style={{ fontFamily: "'Poppins', serif" }}>Menú</h2>
// //                     <button
// //                         onClick={() => setIsMenuOpen(false)}
// //                         className="p-2 hover:bg-pink-100 rounded-full transition-colors"
// //                     >
// //                       <X size={20} />
// //                     </button>
// //                   </div>
// //                 </div>
// //                 <nav className="p-4 sm:p-6">
// //                   <ul className="space-y-4 sm:space-y-6">
// //                     <li>
// //                       <button
// //                           onClick={() => {
// //                             window.scrollTo({ top: 0, behavior: 'smooth' });
// //                             setIsMenuOpen(false);
// //                           }}
// //                           className="block py-3 text-gray-700 hover:text-pink-600 transition-colors font-medium text-base sm:text-lg bg-transparent border-none cursor-pointer text-left w-full"
// //                           style={{ fontFamily: "'Poppins', serif" }}
// //                       >
// //                         🏠 Inicio
// //                       </button>
// //                     </li>
// //                     <li>
// //                       <button
// //                           onClick={() => {
// //                             document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
// //                             setIsMenuOpen(false);
// //                           }}
// //                           className="block py-3 text-gray-700 hover:text-pink-600 transition-colors font-medium text-base sm:text-lg bg-transparent border-none cursor-pointer text-left w-full"
// //                           style={{ fontFamily: "'Poppins', serif" }}
// //                       >
// //                         🛍️ Productos
// //                       </button>
// //                     </li>
// //                     <li>
// //                       <button
// //                           onClick={() => {
// //                             document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
// //                             setIsMenuOpen(false);
// //                           }}
// //                           className="block py-3 text-gray-700 hover:text-pink-600 transition-colors font-medium text-base sm:text-lg bg-transparent border-none cursor-pointer text-left w-full"
// //                           style={{ fontFamily: "'Poppins', serif" }}
// //                       >
// //                         🔥 Ofertas
// //                       </button>
// //                     </li>
// //                     <li>
// //                       <button
// //                           onClick={() => {
// //                             document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
// //                             setIsMenuOpen(false);
// //                           }}
// //                           className="block py-3 text-gray-700 hover:text-pink-600 transition-colors font-medium text-base sm:text-lg bg-transparent border-none cursor-pointer text-left w-full"
// //                           style={{ fontFamily: "'Poppins', serif" }}
// //                       >
// //                         📞 Contacto
// //                       </button>
// //                     </li>
// //                   </ul>
// //                 </nav>
// //               </div>
// //             </div>
// //         )}
// //
// //         {/* WhatsApp Float Button */}
// //         <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
// //           <a
// //               href="https://wa.me/593999999999"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 animate-pulse"
// //           >
// //             <Phone size={20} className="sm:w-6 sm:h-6" />
// //           </a>
// //         </div>
// //
// //         {/* Scroll to Top Button */}
// //         <button
// //             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
// //             className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-2 sm:p-3 rounded-full shadow-2xl transition-all duration-300 z-40 transform hover:scale-110"
// //         >
// //           <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// //           </svg>
// //         </button>
// //       </div>
// //   );
// // };
// //
// // export default App;
//
// //
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { CartProvider } from './context/CartContext';
// // import Navbar from './components/Navbar';
// // import Footer from './components/Footer';
// // import Home from './pages/Home';
// // import Products from './pages/Products';
// // import ProductDetail from './pages/ProductDetails';
// // import './index.css';
// //
// // const App = () => {
// //   return (
// //       <CartProvider>
// //         <Router>
// //           <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50" style={{ fontFamily: "'Poppins', serif" }}>
// //             <Navbar />
// //
// //             <main>
// //               <Routes>
// //                 <Route path="/" element={<Home />} />
// //                 <Route path="/productos" element={<Products />} />
// //                 <Route path="/producto/:id" element={<ProductDetail />} />
// //               </Routes>
// //             </main>
// //
// //             <Footer />
// //
// //             {/* WhatsApp Float Button */}
// //             <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
// //               <a
// //                   href="https://wa.me/593999999999"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 animate-pulse"
// //               >
// //                 <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
// //                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
// //                 </svg>
// //               </a>
// //             </div>
// //
// //             {/* Scroll to Top Button */}
// //             <button
// //                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
// //                 className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-2 sm:p-3 rounded-full shadow-2xl transition-all duration-300 z-40 transform hover:scale-110"
// //             >
// //               <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// //               </svg>
// //             </button>
// //           </div>
// //         </Router>
// //       </CartProvider>
// //   );
// // };
// //
// // export default App;
//
// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { CartProvider } from './context/CartContext';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import ProductDetail from './pages/ProductDetails';
// import './index.css';
//
// // Component to scroll to top on route change
// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//
//   useEffect(() => {
//     // Scroll to top when pathname changes
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'smooth'
//     });
//   }, [pathname]);
//
//   return null;
// };
//
// const App = () => {
//   return (
//       <CartProvider>
//         <Router>
//           <ScrollToTop />
//           <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50" style={{ fontFamily: "'Poppins', serif" }}>
//             <Navbar />
//
//             <main>
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/productos" element={<Products />} />
//                 <Route path="/producto/:id" element={<ProductDetail />} />
//               </Routes>
//             </main>
//
//             <Footer />
//
//             {/* WhatsApp Float Button */}
//             <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
//               <a
//                   href="https://wa.me/593999999999"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 animate-pulse"
//               >
//                 <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
//                 </svg>
//               </a>
//             </div>
//
//             {/* Scroll to Top Button */}
//             <button
//                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                 className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-2 sm:p-3 rounded-full shadow-2xl transition-all duration-300 z-40 transform hover:scale-110"
//             >
//               <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
//               </svg>
//             </button>
//           </div>
//         </Router>
//       </CartProvider>
//   );
// };
//
// export default App;


import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetails';
import Contact from './pages/Contact';
import './index.css';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50" style={{ fontFamily: "'Poppins', serif" }}>
            <Navbar />

            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Products />} />
                <Route path="/producto/:id" element={<ProductDetail />} />
                <Route path="/contacto" element={<Contact />} />
              </Routes>
            </main>

            <Footer />

            {/* WhatsApp Float Button */}
            <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
              <a
                  href="https://wa.me/593999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 animate-pulse"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
                </svg>
              </a>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-2 sm:p-3 rounded-full shadow-2xl transition-all duration-300 z-40 transform hover:scale-110"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </Router>
      </CartProvider>
  );
};

export default App;