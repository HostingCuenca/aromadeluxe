// import React, { useState, useEffect } from 'react';
// import { useSearchParams, Link } from 'react-router-dom';
// import { Search, Filter, Grid, List, Star } from 'lucide-react';
// import ProductCard from '../components/ProductCard';
// import { useCart } from '../context/CartContext';
// import productosData from '../data/productos.json';
//
// const Products = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const [products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('all');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [sortBy, setSortBy] = useState('name');
//     const [viewMode, setViewMode] = useState('grid');
//     const [showFilters, setShowFilters] = useState(false);
//
//     // Initialize from URL params
//     useEffect(() => {
//         const categoryParam = searchParams.get('category') || 'all';
//         const searchParam = searchParams.get('search') || '';
//
//         setSelectedCategory(categoryParam);
//         setSearchTerm(searchParam);
//         setProducts(productosData.perfumes);
//     }, [searchParams]);
//
//     // Filter and search products
//     useEffect(() => {
//         let filtered = [...products];
//
//         // Filter by category
//         if (selectedCategory !== 'all') {
//             filtered = filtered.filter(product => product.category === selectedCategory);
//         }
//
//         // Filter by search term
//         if (searchTerm.trim()) {
//             const searchLower = searchTerm.toLowerCase();
//             filtered = filtered.filter(product =>
//                 product.name.toLowerCase().includes(searchLower) ||
//                 product.description.toLowerCase().includes(searchLower) ||
//                 (product.longDescription && product.longDescription.toLowerCase().includes(searchLower)) ||
//                 (product.notes && product.notes.some(note => note.toLowerCase().includes(searchLower)))
//             );
//         }
//
//         // Sort products
//         filtered.sort((a, b) => {
//             switch (sortBy) {
//                 case 'price-low':
//                     return a.price - b.price;
//                 case 'price-high':
//                     return b.price - a.price;
//                 case 'rating':
//                     return b.rating - a.rating;
//                 case 'featured':
//                     return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
//                 case 'name':
//                 default:
//                     return a.name.localeCompare(b.name);
//             }
//         });
//
//         setFilteredProducts(filtered);
//     }, [products, selectedCategory, searchTerm, sortBy]);
//
//     const handleCategoryChange = (category) => {
//         setSelectedCategory(category);
//         const newParams = new URLSearchParams(searchParams);
//         if (category === 'all') {
//             newParams.delete('category');
//         } else {
//             newParams.set('category', category);
//         }
//         setSearchParams(newParams);
//     };
//
//     const handleSearchChange = (term) => {
//         setSearchTerm(term);
//         const newParams = new URLSearchParams(searchParams);
//         if (term.trim()) {
//             newParams.set('search', term);
//         } else {
//             newParams.delete('search');
//         }
//         setSearchParams(newParams);
//     };
//
//     return (
//         <div className="min-h-screen py-8">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Header */}
//                 <div className="text-center mb-8">
//                     <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
//                         Nuestros Productos
//                     </h1>
//                 </div>
//
//                 {/* Search and Filters */}
//                 <div className="mb-8 space-y-4">
//                     {/* Search Bar */}
//                     <div className="relative max-w-md mx-auto">
//                         <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                         <input
//                             type="text"
//                             placeholder="Buscar fragancias..."
//                             value={searchTerm}
//                             onChange={(e) => handleSearchChange(e.target.value)}
//                             className="w-full pl-12 pr-4 py-4 border-2 border-pink-200 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white/90 backdrop-blur-sm"
//                         />
//                     </div>
//
//                     {/* Controls */}
//                     <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//                         {/* Category Filters */}
//                         <div className="flex flex-wrap justify-center gap-2">
//                             <button
//                                 onClick={() => handleCategoryChange('all')}
//                                 className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
//                                     selectedCategory === 'all'
//                                         ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
//                                         : 'bg-white text-gray-700 hover:bg-pink-50 border-2 border-pink-200'
//                                 }`}
//                             >
//                                 Todos ({products.length})
//                             </button>
//                             {productosData.categories.map(category => {
//                                 const count = products.filter(p => p.category === category.id).length;
//                                 return (
//                                     <button
//                                         key={category.id}
//                                         onClick={() => handleCategoryChange(category.id)}
//                                         className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
//                                             selectedCategory === category.id
//                                                 ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
//                                                 : 'bg-white text-gray-700 hover:bg-pink-50 border-2 border-pink-200'
//                                         }`}
//                                     >
//                                         {category.name} ({count})
//                                     </button>
//                                 );
//                             })}
//                         </div>
//
//                         {/* Sort and View Controls */}
//                         <div className="flex items-center gap-4">
//                             {/* Sort Dropdown */}
//                             <select
//                                 value={sortBy}
//                                 onChange={(e) => setSortBy(e.target.value)}
//                                 className="px-4 py-2 border-2 border-pink-200 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
//                             >
//                                 <option value="name">Ordenar por Nombre</option>
//                                 <option value="price-low">Precio: Menor a Mayor</option>
//                                 <option value="price-high">Precio: Mayor a Menor</option>
//                                 <option value="rating">Mejor Valorados</option>
//                                 <option value="featured">Destacados</option>
//                             </select>
//
//                             {/* View Mode Toggle */}
//                             <div className="flex bg-white border-2 border-pink-200 rounded-full p-1">
//                                 <button
//                                     onClick={() => setViewMode('grid')}
//                                     className={`p-2 rounded-full transition-colors ${
//                                         viewMode === 'grid' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:text-pink-500'
//                                     }`}
//                                 >
//                                     <Grid size={20} />
//                                 </button>
//                                 <button
//                                     onClick={() => setViewMode('list')}
//                                     className={`p-2 rounded-full transition-colors ${
//                                         viewMode === 'list' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:text-pink-500'
//                                     }`}
//                                 >
//                                     <List size={20} />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 {/* Results Count */}
//                 <div className="mb-6">
//                     <p className="text-gray-600">
//                         Mostrando {filteredProducts.length} de {products.length} productos
//                         {searchTerm && ` para "${searchTerm}"`}
//                         {selectedCategory !== 'all' && ` en ${productosData.categories.find(c => c.id === selectedCategory)?.name}`}
//                     </p>
//                 </div>
//
//                 {/* Products Grid/List */}
//                 {filteredProducts.length === 0 ? (
//                     <div className="text-center py-16">
//                         <Search size={64} className="mx-auto text-gray-300 mb-4" />
//                         <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron productos</h3>
//                         <p className="text-gray-500 mb-6">
//                             {searchTerm
//                                 ? `No hay productos que coincidan con "${searchTerm}"`
//                                 : 'No hay productos en esta categoría'
//                             }
//                         </p>
//                         <button
//                             onClick={() => {
//                                 setSearchTerm('');
//                                 setSelectedCategory('all');
//                                 setSearchParams(new URLSearchParams());
//                             }}
//                             className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium"
//                         >
//                             Ver Todos los Productos
//                         </button>
//                     </div>
//                 ) : (
//                     <div className={viewMode === 'grid'
//                         ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
//                         : "space-y-6"
//                     }>
//                         {filteredProducts.map(product => (
//                             viewMode === 'grid' ? (
//                                 <ProductCard key={product.id} product={product} />
//                             ) : (
//                                 <ProductCardList key={product.id} product={product} />
//                             )
//                         ))}
//                     </div>
//                 )}
//
//                 {/* Load More Button (if needed for pagination) */}
//                 {filteredProducts.length > 0 && (
//                     <div className="text-center mt-12">
//                         <p className="text-gray-600 mb-4">
//                             ¿No encuentras lo que buscas? Contáctanos para pedidos especiales
//                         </p>
//                         <a
//                             href="https://wa.me/593999999999"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
//                         >
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
//                             </svg>
//                             <span>Contactar por WhatsApp</span>
//                         </a>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// // List view component for products
// const ProductCardList = ({ product }) => {
//     const { addToCart, isInCart } = useCart();
//
//     const renderStars = (rating) => {
//         return [...Array(5)].map((_, i) => (
//             <Star
//                 key={i}
//                 size={16}
//                 className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
//             />
//         ));
//     };
//
//     const handleAddToCart = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         addToCart(product);
//     };
//
//     return (
//         <Link to={`/producto/${product.id}`} className="block">
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
//                 <div className="flex flex-col sm:flex-row">
//                     {/* Image */}
//                     <div className="relative sm:w-48 sm:flex-shrink-0">
//                         <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-full h-48 sm:h-full object-cover"
//                         />
//                         {product.isOffer && (
//                             <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 text-xs font-bold rounded-full animate-pulse">
//                                 OFERTA
//                             </div>
//                         )}
//                         {product.stock <= 5 && (
//                             <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 text-xs font-medium rounded-full">
//                                 ¡Solo {product.stock}!
//                             </div>
//                         )}
//                     </div>
//
//                     {/* Content */}
//                     <div className="flex-1 p-6">
//                         <div className="flex justify-between items-start mb-2">
//                             <div className="flex-1">
//                                 <div className="flex items-center mb-2">
//                                     {renderStars(product.rating)}
//                                     <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
//                                 </div>
//
//                                 <h3 className="font-bold text-xl text-gray-800 mb-2">
//                                     {product.name}
//                                 </h3>
//
//                                 <p className="text-gray-600 mb-4 line-clamp-2">
//                                     {product.longDescription || product.description}
//                                 </p>
//
//                                 {/* Notes */}
//                                 {product.notes && (
//                                     <div className="mb-4">
//                                         <div className="flex flex-wrap gap-1">
//                                             {product.notes.slice(0, 3).map((note, index) => (
//                                                 <span
//                                                     key={index}
//                                                     className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800"
//                                                 >
//                           {note}
//                         </span>
//                                             ))}
//                                             {product.notes.length > 3 && (
//                                                 <span className="text-xs text-gray-500">+{product.notes.length - 3} más</span>
//                                             )}
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//
//                         <div className="flex justify-between items-center">
//                             <div className="flex items-center space-x-2">
//                 <span className="text-3xl font-bold text-gray-900">
//                   ${product.price.toFixed(2)}
//                 </span>
//                                 {product.originalPrice && (
//                                     <span className="text-lg text-gray-500 line-through">
//                     ${product.originalPrice.toFixed(2)}
//                   </span>
//                                 )}
//                             </div>
//
//                             <button
//                                 onClick={handleAddToCart}
//                                 className={`px-6 py-3 rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 ${
//                                     isInCart(product.id)
//                                         ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
//                                         : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'
//                                 }`}
//                             >
//                                 {isInCart(product.id) ? 'En Carrito' : 'Agregar al Carrito'}
//                             </button>
//                         </div>
//
//                         {/* Product Type Badge */}
//                         {product.type && (
//                             <div className="mt-3">
//                 <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
//                   {product.type === 'crema' ? '🧴 Crema' : product.type === 'set' ? '🎁 Set Completo' : '💐 Perfume'}
//                 </span>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };
//
// export default Products;

import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, Grid, List, Star, ChevronDown, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import productosData from '../data/productos.json';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [viewMode, setViewMode] = useState('grid');
    const [showFilters, setShowFilters] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    // Initialize from URL params
    useEffect(() => {
        const categoryParam = searchParams.get('category') || 'all';
        const searchParam = searchParams.get('search') || '';

        setSelectedCategory(categoryParam);
        setSearchTerm(searchParam);
        setProducts(productosData.perfumes);
    }, [searchParams]);

    // Filter and search products
    useEffect(() => {
        let filtered = [...products];

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        // Filter by search term
        if (searchTerm.trim()) {
            const searchLower = searchTerm.toLowerCase();
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchLower) ||
                product.description.toLowerCase().includes(searchLower) ||
                (product.longDescription && product.longDescription.toLowerCase().includes(searchLower)) ||
                (product.notes && product.notes.some(note => note.toLowerCase().includes(searchLower)))
            );
        }

        // Sort products
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'featured':
                    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
                case 'name':
                default:
                    return a.name.localeCompare(b.name);
            }
        });

        setFilteredProducts(filtered);
    }, [products, selectedCategory, searchTerm, sortBy]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        const newParams = new URLSearchParams(searchParams);
        if (category === 'all') {
            newParams.delete('category');
        } else {
            newParams.set('category', category);
        }
        setSearchParams(newParams);
    };

    const handleSearchChange = (term) => {
        setSearchTerm(term);
        const newParams = new URLSearchParams(searchParams);
        if (term.trim()) {
            newParams.set('search', term);
        } else {
            newParams.delete('search');
        }
        setSearchParams(newParams);
    };

    const clearSearch = () => {
        setSearchTerm('');
        setSelectedCategory('all');
        setSearchParams(new URLSearchParams());
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            {/* Hero Section */}
            <section className="relative py-12 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-4 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-4 right-10 w-40 h-40 bg-pink-300/20 rounded-full blur-2xl animate-pulse"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                        ✨ Nuestros Productos
                    </h1>
                    <p className="text-lg sm:text-xl text-pink-100 max-w-2xl mx-auto">
                        Descubre tu fragancia perfecta en nuestra exclusiva colección
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search Section */}
                <section className="mb-8">
                    <div className="max-w-2xl mx-auto">
                        <div className={`relative transition-all duration-300 ${isSearchFocused ? 'transform scale-105' : ''}`}>
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Buscar fragancias por nombre, notas o descripción..."
                                value={searchTerm}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                                className="w-full pl-12 pr-12 py-4 text-lg border-2 border-pink-200 rounded-2xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
                            />
                            {searchTerm && (
                                <button
                                    onClick={clearSearch}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            )}
                        </div>

                        {/* Search suggestions/hints */}
                        {searchTerm && (
                            <div className="mt-2 text-center">
                                <p className="text-sm text-gray-500">
                                    💡 Puedes buscar por: "jazmín", "masculino", "vainilla", "Gucci"...
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Filters Section */}
                <section className="mb-8">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100">
                        {/* Mobile Filter Toggle */}
                        <div className="lg:hidden mb-4">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="w-full flex items-center justify-between bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3 rounded-xl font-medium"
                            >
                                <span className="flex items-center space-x-2">
                                    <Filter size={20} />
                                    <span>Filtros y Ordenamiento</span>
                                </span>
                                <ChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} size={20} />
                            </button>
                        </div>

                        {/* Desktop Filters or Mobile Expanded */}
                        <div className={`space-y-6 ${showFilters || 'hidden lg:block'}`}>
                            {/* Category Filters */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                    🏷️ Categorías
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => handleCategoryChange('all')}
                                        className={`px-3 py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                                            selectedCategory === 'all'
                                                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105'
                                                : 'bg-white text-gray-700 hover:bg-pink-50 border-2 border-pink-200 hover:border-pink-300'
                                        }`}
                                    >
                                        ✨ Todos ({products.length})
                                    </button>
                                    {productosData.categories.map(category => {
                                        const count = products.filter(p => p.category === category.id).length;
                                        return (
                                            <button
                                                key={category.id}
                                                onClick={() => handleCategoryChange(category.id)}
                                                className={`px-3 py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                                                    selectedCategory === category.id
                                                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105'
                                                        : 'bg-white text-gray-700 hover:bg-pink-50 border-2 border-pink-200 hover:border-pink-300'
                                                }`}
                                            >
                                                {category.icon} {category.name} ({count})
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Sort and View Controls */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-pink-100">
                                <div className="flex items-center space-x-3">
                                    <label className="text-sm font-medium text-gray-700 flex items-center">
                                        📊 Ordenar por:
                                    </label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="px-3 py-2 text-sm border-2 border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white hover:border-pink-300 transition-colors"
                                    >
                                        <option value="name">Nombre A-Z</option>
                                        <option value="price-low">Precio: Menor a Mayor</option>
                                        <option value="price-high">Precio: Mayor a Menor</option>
                                        <option value="rating">⭐ Mejor Valorados</option>
                                        <option value="featured">🌟 Destacados</option>
                                    </select>
                                </div>

                                {/* View Mode Toggle */}
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium text-gray-700">👁️ Vista:</span>
                                    <div className="flex bg-white border-2 border-pink-200 rounded-lg p-1">
                                        <button
                                            onClick={() => setViewMode('grid')}
                                            className={`p-2 rounded-md transition-all duration-200 ${
                                                viewMode === 'grid'
                                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                                                    : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                                            }`}
                                            title="Vista de cuadrícula"
                                        >
                                            <Grid size={18} />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('list')}
                                            className={`p-2 rounded-md transition-all duration-200 ${
                                                viewMode === 'list'
                                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                                                    : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                                            }`}
                                            title="Vista de lista"
                                        >
                                            <List size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section className="mb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="text-gray-600 font-medium">
                                📦 Mostrando <span className="font-bold text-pink-600">{filteredProducts.length}</span> de {products.length} productos
                            </p>
                            {searchTerm && (
                                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                                    🔍 "{searchTerm}"
                                </span>
                            )}
                            {selectedCategory !== 'all' && (
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {productosData.categories.find(c => c.id === selectedCategory)?.icon} {productosData.categories.find(c => c.id === selectedCategory)?.name}
                                </span>
                            )}
                        </div>

                        {(searchTerm || selectedCategory !== 'all') && (
                            <button
                                onClick={clearSearch}
                                className="text-sm text-gray-500 hover:text-pink-600 underline transition-colors"
                            >
                                🗑️ Limpiar filtros
                            </button>
                        )}
                    </div>
                </section>

                {/* Products Section */}
                <section>
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
                            <div className="mb-6">
                                <Search size={80} className="mx-auto text-gray-300 mb-4" />
                                <h3 className="text-2xl font-semibold text-gray-600 mb-2">😔 No se encontraron productos</h3>
                                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                                    {searchTerm
                                        ? `No hay productos que coincidan con "${searchTerm}". Intenta con otros términos.`
                                        : 'No hay productos en esta categoría actualmente.'
                                    }
                                </p>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={clearSearch}
                                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 mx-auto block"
                                >
                                    ✨ Ver Todos los Productos
                                </button>

                                <p className="text-sm text-gray-500">
                                    💡 Sugerencias: "perfume masculino", "vainilla", "floral", "gucci"
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className={`transition-all duration-500 ${
                            viewMode === 'grid'
                                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                                : "space-y-6"
                        }`}>
                            {filteredProducts.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {viewMode === 'grid' ? (
                                        <ProductCard product={product} />
                                    ) : (
                                        <ProductCardList product={product} />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Contact Section */}
                {filteredProducts.length > 0 && (
                    <section className="mt-16">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                🤔 ¿No encuentras lo que buscas?
                            </h3>
                            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                                Nuestro equipo está listo para ayudarte con pedidos especiales, consultas sobre productos o recomendaciones personalizadas
                            </p>
                        <a
                            href="https://wa.me/593999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-full transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-green-50"
                            >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
                            </svg>
                            <span>💬 Contactar por WhatsApp</span>
                        </a>
                    </div>
                    </section>
                    )}
            </div>
        </div>
    );
};

// Enhanced List view component for products
const ProductCardList = ({ product }) => {
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

    const handleProductClick = () => {
        // Scroll to top with smooth animation before navigating
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Link
            to={`/producto/${product.id}`}
            className="block group"
            onClick={handleProductClick}
        >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-pink-100 group-hover:border-pink-300">
                <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="relative sm:w-56 sm:flex-shrink-0 overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-56 sm:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col space-y-2">
                            {product.isOffer && (
                                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 text-xs font-bold rounded-full animate-pulse shadow-lg">
                                    🔥 OFERTA
                                </div>
                            )}
                            {product.featured && (
                                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg">
                                    ⭐ DESTACADO
                                </div>
                            )}
                        </div>

                        {product.stock <= 5 && (
                            <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg animate-bounce">
                                ⚡ ¡Solo {product.stock}!
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                {/* Rating */}
                                <div className="flex items-center mb-3">
                                    <div className="flex">{renderStars(product.rating)}</div>
                                    <span className="ml-2 text-sm text-gray-500 font-medium">({product.rating})</span>
                                    <span className="ml-4 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                        {product.stock > 10 ? '✅ Disponible' : '⏰ Pocos disponibles'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                                    {product.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {product.longDescription || product.description}
                                </p>

                                {/* Notes */}
                                {product.notes && (
                                    <div className="mb-4">
                                        <p className="text-sm font-semibold text-gray-700 mb-2">🌸 Notas principales:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {product.notes.slice(0, 4).map((note, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 border border-pink-200"
                                                >
                                                    {note}
                                                </span>
                                            ))}
                                            {product.notes.length > 4 && (
                                                <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
                                                    +{product.notes.length - 4} más
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Price and Actions */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-pink-100">
                            <div className="flex items-center space-x-3">
                                <span className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                    ${product.price.toFixed(2)}
                                </span>
                                {product.originalPrice && (
                                    <div className="flex flex-col">
                                        <span className="text-lg text-gray-500 line-through">
                                            ${product.originalPrice.toFixed(2)}
                                        </span>
                                        <span className="text-xs text-green-600 font-bold">
                                            Ahorra ${(product.originalPrice - product.price).toFixed(2)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className={`px-6 py-3 rounded-full transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 ${
                                    isInCart(product.id)
                                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                                        : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'
                                }`}
                            >
                                {isInCart(product.id) ? '✅ En Carrito' : '🛒 Agregar al Carrito'}
                            </button>
                        </div>

                        {/* Product Type Badge */}
                        {product.type && (
                            <div className="mt-4 pt-3 border-t border-pink-100">
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200">
                                    {product.type === 'crema' ? '🧴 Crema Corporal' :
                                        product.type === 'set' ? '🎁 Set Completo' : '💐 Perfume Premium'}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Products;