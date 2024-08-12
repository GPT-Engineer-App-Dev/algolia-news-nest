import React, { useState } from 'react';
import HackerNewsList from '../components/HackerNewsList';
import SearchBar from '../components/SearchBar';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Hacker News Top Stories</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <HackerNewsList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Index;