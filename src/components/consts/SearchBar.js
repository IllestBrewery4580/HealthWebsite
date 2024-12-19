import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import SearchBar from '../components/SearchBar';
import ClearIcon from '@mui/icons-material/Clear';
import debounce from 'lodash/debounce';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    // Debounced search function to prevent excessive API calls
    const debouncedSearch = debounce((term) => {
        setLoading(true);
        onSearch(term)
            .then(() => setLoading(false))  // Assuming onSearch returns a promise
            .catch(() => setLoading(false));
    }, 500);

    // Handle search term change
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value) {
            // Filter suggestions based on input (can be dynamic if connected to a backend)
            setSuggestions(searchSuggestions.filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase())));
            debouncedSearch(value);
        } else {
            setSuggestions([]);
        }
    };

    const handleSearchIconClick = () => {
        if (isSearching) {
            setIsSearching(false);
            setSearchTerm('');
        } else {
            setIsSearching(true);
        }
    };

    const handleClearInput = () => {
        setSearchTerm('');
        setSuggestions([]);
        if (isSearching) setIsSearching(false);
    };

    useEffect(() => {
        return () => {
            debouncedSearch.cancel(); // Cancel the debounced search on unmount
        };
    }, []);

    return (
        <Box display="flex" alignItems="center">
            {isSearching ? (
                <TextField
                    label="Search"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon style={{ cursor: 'pointer' }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            searchTerm && (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClearInput}>
                                        <ClearIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        ),
                    }}
                    fullWidth
                />
            ) : (
                <IconButton onClick={handleSearchIconClick}>
                    <SearchIcon />
                </IconButton>
            )}

            {/* Loading Indicator */}
            {loading && <CircularProgress size={24} sx={{ marginLeft: '8px' }} />}
            
            {/* Suggestion List */}
            {suggestions.length > 0 && isSearching && (
                <Box
                    sx={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        width: '100%',
                        zIndex: 1,
                    }}
                >
                    {suggestions.map((suggestion, index) => (
                        <Box key={index} p={1} onClick={() => setSearchTerm(suggestion)}>
                            {suggestion}
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = async (term) => {
        setSearchTerm(term);
        // Here, you would call your search API or search logic
        console.log('Search for:', term);
    };

    const searchSuggestions = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango'];

    return (
        <div>
            <SearchBar onSearch={handleSearch} searchSuggestions={searchSuggestions} />
            {/* Other content */}
        </div>
    );
};

export default SearchBar;