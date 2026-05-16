const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '20px 0',
            textAlign: 'center',
            marginTop: '40px',
            color: '#0D1164',
            fontSize: '14px'
        }}>
            <p>&copy; {currentYear} G.V.K. Sindhu. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
