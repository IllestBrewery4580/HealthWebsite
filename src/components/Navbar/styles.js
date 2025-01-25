export const navbarStyles = {
    drawer: {
        width: 320,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            backgroundColor: '#000B2D', // Navy blue for the drawer
            color: 'rgba(255, 255, 255, 1)', // Solid white text
        },
        '& .Mui-selected': {
            backgroundColor: '#003366',
            color: '#fff',
        },
    },
    icons: {
        color: 'rgba(255, 255, 255, 1) !important',
        marginLeft: '20px',
    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 1)'
        }
    }
};