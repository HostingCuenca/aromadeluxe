// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ShoppingCart, Menu, X, Search } from 'lucide-react';
// import { useCart } from '../context/CartContext';
// import CartModal from './CartModal';
//
// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const { getTotalItems } = useCart();
//     const location = useLocation();
//
//     const isActive = (path) => {
//         return location.pathname === path;
//     };
//
//     const handleNavigation = (path) => {
//         // Scroll to top immediately when navigating
//         window.scrollTo({ top: 0, behavior: 'auto' });
//     };
//
//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (searchTerm.trim()) {
//             // Navigate to productos with search term
//             window.location.href = `/productos?search=${encodeURIComponent(searchTerm.trim())}`;
//         }
//     };
//
//     return (
//         <>
//             <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-40 border-b border-pink-100">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between items-center h-16">
//                         {/* Logo */}
//                         <div className="flex items-center">
//                             <Link to="/" className="flex items-center space-x-2">
//                                 <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
//                                     Aromas<span className="text-red-500">Deluxe</span>
//                                 </h1>
//                             </Link>
//                         </div>
//
//                         {/* Desktop Navigation */}
//                         <div className="hidden md:flex items-center space-x-8">
//                             <Link
//                                 to="/"
//                                 onClick={() => handleNavigation('/')}
//                                 className={`font-medium transition-colors ${
//                                     isActive('/')
//                                         ? 'text-pink-600 border-b-2 border-pink-600 pb-1'
//                                         : 'text-gray-700 hover:text-pink-600'
//                                 }`}
//                             >
//                                 Inicio
//                             </Link>
//                             <Link
//                                 to="/productos"
//                                 onClick={() => handleNavigation('/productos')}
//                                 className={`font-medium transition-colors ${
//                                     isActive('/productos')
//                                         ? 'text-pink-600 border-b-2 border-pink-600 pb-1'
//                                         : 'text-gray-700 hover:text-pink-600'
//                                 }`}
//                             >
//                                 Productos
//                             </Link>
//                             <button
//                                 onClick={() => document.getElementById('/')?.scrollIntoView({ behavior: 'smooth' })}
//                                 className="text-gray-700 hover:text-pink-600 transition-colors font-medium bg-transparent border-none cursor-pointer"
//                             >
//                                 Ofertas
//                             </button>
//                             <button
//                                 onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
//                                 className="text-gray-700 hover:text-pink-600 transition-colors font-medium bg-transparent border-none cursor-pointer"
//                             >
//                                 Contacto
//                             </button>
//                         </div>
//
//                         {/* Search Bar - Desktop */}
//                         <div className="hidden lg:flex items-center max-w-sm flex-1 mx-8">
//                             <form onSubmit={handleSearch} className="relative w-full">
//                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                                 <input
//                                     type="text"
//                                     placeholder="Buscar fragancias..."
//                                     value={searchTerm}
//                                     onChange={(e) => setSearchTerm(e.target.value)}
//                                     className="w-full pl-10 pr-4 py-2 border-2 border-pink-200 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white/90 backdrop-blur-sm text-sm"
//                                 />
//                             </form>
//                         </div>
//
//                         {/* Cart and Menu */}
//                         <div className="flex items-center space-x-4">
//                             {/* Cart Button */}
//                             <button
//                                 onClick={() => setIsCartOpen(true)}
//                                 className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors"
//                             >
//                                 <ShoppingCart size={24} />
//                                 {getTotalItems() > 0 && (
//                                     <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
//                     {getTotalItems()}
//                   </span>
//                                 )}
//                             </button>
//
//                             {/* Mobile Menu Button */}
//                             <button
//                                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                                 className="md:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors"
//                             >
//                                 <Menu size={24} />
//                             </button>
//                         </div>
//                     </div>
//
//                     {/* Mobile Search Bar */}
//                     <div className="lg:hidden pb-4">
//                         <form onSubmit={handleSearch} className="relative">
//                             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                             <input
//                                 type="text"
//                                 placeholder="Buscar fragancias..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="w-full pl-10 pr-4 py-3 border-2 border-pink-200 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white/90 backdrop-blur-sm text-sm"
//                             />
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//
//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden">
//                     <div className="bg-white w-64 h-full shadow-2xl">
//                         <div className="p-4 sm:p-6 border-b border-pink-100 bg-gradient-to-r from-pink-50 to-purple-50">
//                             <div className="flex justify-between items-center">
//                                 <h2 className="text-lg font-bold text-gray-800">Menú</h2>
//                                 <button
//                                     onClick={() => setIsMenuOpen(false)}
//                                     className="p-2 hover:bg-pink-100 rounded-full transition-colors"
//                                 >
//                                     <X size={20} />
//                                 </button>
//                             </div>
//                         </div>
//                         <nav className="p-4 sm:p-6">
//                             <ul className="space-y-4 sm:space-y-6">
//                                 <li>
//                                     <Link
//                                         to="/"
//                                         onClick={() => {
//                                             handleNavigation('/');
//                                             setIsMenuOpen(false);
//                                         }}
//                                         className={`block py-3 transition-colors font-medium text-base sm:text-lg ${
//                                             isActive('/')
//                                                 ? 'text-pink-600 font-bold'
//                                                 : 'text-gray-700 hover:text-pink-600'
//                                         }`}
//                                     >
//                                         🏠 Inicio
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         to="/productos"
//                                         onClick={() => {
//                                             handleNavigation('/productos');
//                                             setIsMenuOpen(false);
//                                         }}
//                                         className={`block py-3 transition-colors font-medium text-base sm:text-lg ${
//                                             isActive('/productos')
//                                                 ? 'text-pink-600 font-bold'
//                                                 : 'text-gray-700 hover:text-pink-600'
//                                         }`}
//                                     >
//                                         🛍️ Productos
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <button
//                                         onClick={() => {
//                                             document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
//                                             setIsMenuOpen(false);
//                                         }}
//                                         className="block py-3 text-gray-700 hover:text-pink-600 transition-colors font-medium text-base sm:text-lg bg-transparent border-none cursor-pointer text-left w-full"
//                                     >
//                                         🔥 Ofertas
//                                     </button>
//                                 </li>
//                                 <li>
//                                     <button
//                                         onClick={() => {
//                                             document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
//                                             setIsMenuOpen(false);
//                                         }}
//                                         className="block py-3 text-gray-700 hover:text-pink-600 transition-colors font-medium text-base sm:text-lg bg-transparent border-none cursor-pointer text-left w-full"
//                                     >
//                                         📞 Contacto
//                                     </button>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             )}
//
//             {/* Cart Modal */}
//             {isCartOpen && <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
//         </>
//     );
// };
//
// export default Navbar;


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { getTotalItems } = useCart();
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const handleNavigation = (path) => {
        // Scroll to top smoothly when navigating
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleOffersClick = () => {
        if (location.pathname !== '/') {
            // If not on home page, navigate to home first then scroll to offers
            window.location.href = '/#ofertas';
        } else {
            // If on home page, just scroll to offers
            document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            // Navigate to productos with search term
            window.location.href = `/productos?search=${encodeURIComponent(searchTerm.trim())}`;
        }
    };

    return (
        <>
            <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-40 border-b border-pink-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center space-x-2">
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                    Aromas<span className="text-red-500">Deluxe</span>
                                </h1>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                to="/"
                                onClick={() => handleNavigation('/')}
                                className={`font-medium transition-colors ${
                                    isActive('/')
                                        ? 'text-pink-600 border-b-2 border-pink-600 pb-1'
                                        : 'text-gray-700 hover:text-pink-600'
                                }`}
                            >
                                Inicio
                            </Link>
                            <Link
                                to="/productos"
                                onClick={() => handleNavigation('/productos')}
                                className={`font-medium transition-colors ${
                                    isActive('/productos')
                                        ? 'text-pink-600 border-b-2 border-pink-600 pb-1'
                                        : 'text-gray-700 hover:text-pink-600'
                                }`}
                            >
                                Productos
                            </Link>
                            <button
                                onClick={handleOffersClick}
                                className="text-gray-700 hover:text-pink-600 transition-colors font-medium bg-transparent border-none cursor-pointer"
                            >
                                Ofertas
                            </button>
                            <Link
                                to="/contacto"
                                onClick={() => handleNavigation('/contacto')}
                                className={`font-medium transition-colors ${
                                    isActive('/contacto')
                                        ? 'text-pink-600 border-b-2 border-pink-600 pb-1'
                                        : 'text-gray-700 hover:text-pink-600'
                                }`}
                            >
                                Contacto
                            </Link>
                        </div>

                        {/* Search Bar - Desktop */}
                        <div className="hidden lg:flex items-center max-w-sm flex-1 mx-8">
                            <form onSubmit={handleSearch} className="relative w-full">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Buscar fragancias..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border-2 border-pink-200 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white/90 backdrop-blur-sm text-sm"
                                />
                            </form>
                        </div>

                        {/* Cart and Menu */}
                        <div className="flex items-center space-x-4">
                            {/* Cart Button */}
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors"
                            >
                                <ShoppingCart size={24} />
                                {getTotalItems() > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                    {getTotalItems()}
                  </span>
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className="lg:hidden pb-4">
                        <form onSubmit={handleSearch} className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Buscar fragancias..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border-2 border-pink-200 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white/90 backdrop-blur-sm text-sm"
                            />
                        </form>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden">
                    <div className="bg-white w-64 h-full shadow-2xl">
                        <div className="p-4 sm:p-6 border-b border-pink-100 bg-gradient-to-r from-pink-50 to-purple-50">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold text-gray-800">Menú</h2>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 hover:bg-pink-100 rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>
                        <nav className="p-4 sm:p-6">
                            <ul className="space-y-4 sm:space-y-6">
                                <li>
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            handleNavigation('/');
                                            setIsMenuOpen(false);
                                        }}
                                        className={`block py-3 transition-colors font-medium text-base sm:text-lg ${
                                            isActive('/')
                                                ? 'text-pink-600 font-bold'
                                                : 'text-gray-700 hover:text-pink-600'
                                        }`}
                                    >
                                        🏠 Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/productos"
                                        onClick={() => {
                                            handleNavigation('/productos');
                                            setIsMenuOpen(false);
                                        }}
                                        className={`block py-3 transition-colors font-medium text-base sm:text-lg ${
                                            isActive('/productos')
                                                ? 'text-pink-600 font-bold'
                                                : 'text-gray-700 hover:text-pink-600'
                                        }`}
                                    >
                                        🛍️ Productos
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            handleOffersClick();
                                            setIsMenuOpen(false);
                                        }}
                                        className="block py-3 text-gray-700 hover:text-pink-600 transition-colors font-medium text-base sm:text-lg bg-transparent border-none cursor-pointer text-left w-full"
                                    >
                                        🔥 Ofertas
                                    </button>
                                </li>
                                <li>
                                    <Link
                                        to="/contacto"
                                        onClick={() => {
                                            handleNavigation('/contacto');
                                            setIsMenuOpen(false);
                                        }}
                                        className={`block py-3 transition-colors font-medium text-base sm:text-lg ${
                                            isActive('/contacto')
                                                ? 'text-pink-600 font-bold'
                                                : 'text-gray-700 hover:text-pink-600'
                                        }`}
                                    >
                                        📞 Contacto
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}

            {/* Cart Modal */}
            {isCartOpen && <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
        </>
    );
};

export default Navbar;