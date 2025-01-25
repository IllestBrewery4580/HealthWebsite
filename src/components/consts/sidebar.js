import React from 'react';
import { mainNavbarItems } from './NavbarItems';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                width: '250px',
                backgroundColor: '#f8f9fa',
                height: '100vh',
                padding: '20px',
                boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <h2 style={{ marginBottom: '20px', color: '#007BFF' }}>Health App</h2>
            <ul
                style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                }}
            >
                {mainNavbarItems.map((item) => (
                    <li
                        key={item.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 15px',
                            marginBottom: '10px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            backgroundColor: '#ffffff',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            transition: 'background-color 0.3s',
                        }}
                        onClick={() => console.log(`Navigating to ${item.route}`)} // Fixed the syntax
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#e9ecef';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#ffffff';
                        }}
                    >
                        {item.icon}
                        <span
                            style={{
                                marginLeft: '15px',
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#333',
                            }}
                        >
                            {item.label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;