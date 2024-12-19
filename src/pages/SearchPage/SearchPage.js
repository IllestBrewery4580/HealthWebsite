import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './SearchPage';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State setup
    const [loading, setLoading] = useState(false); // Loading state for search request
    const [results, setResults] = useState([]); // To store search results

    const handleSearch = async (term) => {
        setLoading(true);
        setSearchTerm(term);
        console.log('Searching for:', term); // Log the passed term instead of state directly

        // Simulate a search request (you can replace this with actual API call)
        setTimeout(() => {
            setLoading(false);
            setResults([
                `Result 1 for "${term}"`,
                `Result 2 for "${term}"`,
                `Result 3 for "${term}"`,
            ]);
        }, 1000); // Simulating a 1-second delay for loading
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setResults([]);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Search Page</h1>
            <SearchBar onSearch={handleSearch} />

            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update state
            />
            
            <Button
                variant="contained"
                onClick={() => handleSearch(searchTerm)}
                style={{ marginTop: '10px', marginRight: '10px' }}
                disabled={loading}
            >
                {loading ? <CircularProgress size={24} /> : 'Search'}
            </Button>

            <Button
                variant="outlined"
                onClick={handleClearSearch}
                style={{ marginTop: '10px' }}
            >
                Clear
            </Button>

            {/* Display Search Results */}
            {results.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Search Results:</h3>
                    <ul>
                        {results.map((result, index) => (
                            <li key={index}>{result}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchPage;