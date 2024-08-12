import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search stories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 bg-grey-800 text-grey-100 border border-grey-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-grey-600"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grey-500" />
    </div>
  );
};

export default SearchBar;