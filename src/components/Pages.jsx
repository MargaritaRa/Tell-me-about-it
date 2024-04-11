import React from 'react';


const Pages = ({ pageNumber, currentLocation }) => {
  const isCurrentPage = pageNumber === currentLocation;
  const flippedClass = isCurrentPage ? 'flipped' : '';

  return (
    <div id={`p${pageNumber}`} className={`paper ${flippedClass}`}>
      <div className="front">
        <div id={`f${pageNumber}`} className="front-content">
          <h1>Front {pageNumber}</h1>
        </div>
      </div>
      <div className="back">
        <div id={`b${pageNumber}`} className="back-content">
          <h1>Back {pageNumber}</h1>
        </div>
      </div>
    </div>
  );
};

export default Pages;
