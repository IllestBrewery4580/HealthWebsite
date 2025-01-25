import React from 'react';
import { Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const FloatingButton = ({ onClick }) => {
    return (
        <Button
          variant="contained"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            backgroundColor: '#3f51b5',
          }}
          onClick={onClick}
        >
          <ChatIcon style={{ color: 'white' }} />
        </Button>
      );
    };    

export default FloatingButton;