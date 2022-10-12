import React, { useState } from 'react';
import About from './Aboutme';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    switch(currentPage) {
      case 'Contact': {
        return <Contact />
      }
      case 'Portfolio': {
        return <Portfolio />
      }
      case 'Resume': {
        return <Resume />
      }
      default: {
        return <About />
      }
    }
  };
  // function to set the current page in the state to the one given
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
