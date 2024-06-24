// Import the necessary modules
import React from 'react';
import './header.css'; // Import the CSS file for styling the header

// Define the Header component
function Header() {
  return (
    // Define the header element with an ID and classes for styling
    <header id='header' className='header fixed-top d-flex align-items-center'>
      {/* Container div to align items within the header */}
      <div className='d-flex w-100 align-items-center justify-content-between'>
        {/* Logo link, navigates to the home page */}
        <a href="/" className='logo d-flex align-items-center'>
          {/* Heading element for the logo text */}
          <h2>TMS</h2>
        </a>
      </div>
    </header>
  );
}

// Export the Header component as the default export of this module
export default Header;
