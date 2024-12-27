import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBarPopup = ({ onSearch }) => {
    const [isOpen, setIsOpen] = useState(false); // Controls the popup state
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null); // Reference to focus the input
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleSearchClick = () => {
        setIsPopupVisible(true);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
        setIsPopupVisible(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
        setTimeout(() => {
            if (inputRef.current) inputRef.current.focus(); // Focus on input after opening
        }, 100);
    };

    const handleClose = () => {
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchTerm);
            handleClose(); // Optionally close the popup after searching 
        }
    };

    const handleOutsideClick = (e) => {
        if (e.target.closest('.search-popup')) return; // Prevent closing if clicking inside
        handleClose();
    };

    return (
        <>
            {/* Search Icon Button */}
            <Button
                onClick={handleSearchClick}
                style={{
                    position: 'fixed',
                    top: '10px',
                    right: '20px',
                    zIndex: 1000,
                    backgroundColor: '#fff',
                }}
            >
                <SearchIcon />
            </Button>

            {/* Search Popup */}
            {isPopupVisible && (
                <div
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 2000,
                        backgroundColor: '#fff',
                        padding: '20px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                        borderRadius: '8px',
                    }}
                >
                    <TextField
                        variant="outlined"
                        placeholder="Search health topics..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        style={{ width: '100%', marginBottom: '10px' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => setIsPopupVisible(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};


export default SearchBarPopup;