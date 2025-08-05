import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/UI/ProductCard';

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState<'all' | 'under-330' | '330-350' | 'over-350'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesPrice = true;
    switch (priceFilter) {
      case 'under-330':
        matchesPrice = product.price < 330;
        break;
      case '330-350':
        matchesPrice = product.price >= 330 && product.price <= 350;
        break;
      case 'over-350':
        matchesPrice = product.price > 350;
        break;
    }
    
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-4 leading-tight">
            Premium Ice Cream Products
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Explore our complete range of premium 1000ml ice cream tubs, perfect for international markets.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>

            {/* Price Filter */}
            <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as any)}
                className="w-full lg:w-auto px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8FCFAE] focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="under-330">Under ₹330</option>
                <option value="330-350">₹330 - ₹350</option>
                <option value="over-350">Over ₹350</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-700">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} navigate={navigate} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">No products found</h3>
            <p className="text-gray-700 mb-4">
              Try adjusting your search terms or filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setPriceFilter('all');
              }}
              className="bg-[#8FCFAE] text-[#215C4C] px-6 py-2 rounded-lg font-semibold hover:bg-[#7BC29A] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Export CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#8FCFAE] to-[#F3B7C3] rounded-2xl p-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#215C4C] mb-4">
            Interested in Bulk Export Orders?
          </h2>
          <p className="text-[#215C4C]/80 mb-6 max-w-2xl mx-auto">
            Get special pricing for container loads and customized export solutions for your market.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#215C4C] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1a4a3d] transition-colors"
          >
            Request Export Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;