import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '##141010', padding: '20px', textAlign: 'center' }}>
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} ChicHaven
      </p>
    </footer>
  );
};

export default Footer;
