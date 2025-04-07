import React, { useState, useEffect, useRef } from 'react';
import { useStateContext } from '../context/StateContext';
import { SearchResultItem } from '.';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const { setShowCart } = useStateContext();
  const searchRef = useRef(null);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSearch = async (term) => {
    if (term.length > 2) {
      try {
        const response = await fetch(`/api/search?q=${term}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Search error:', error);
      }
    }
  };

  const debouncedSearch = debounce(handleSearch, 300);

  useEffect(() => {
    debouncedSearch(searchTerm);
    if (searchTerm.length > 2) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className="search-container" ref={searchRef}>
      <input
        type="text"
        placeholder="Cari produk..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {showResults && (
        <div className="search-results">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <SearchResultItem 
                key={product._id} 
                product={product}
                className="search-result-item"
              />
            ))
          ) : (
            <p className="no-results">Tidak ada produk yang ditemukan</p>
          )}
        </div>
      )}
    </div>
  );
};