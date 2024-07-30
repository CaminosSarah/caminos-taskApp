import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <input
            type="text"
            placeholder="Search tasks here..."
            value={searchQuery}
            onChange={handleSearch}
        />
    );
};

export default SearchFilter;
