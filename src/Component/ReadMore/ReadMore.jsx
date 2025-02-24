import React, { useState } from 'react';

const ReadMore = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-md p-4 bg-white rounded shadow">
      <p className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
        {children}
      </p>
      <button
        onClick={toggleExpansion}
        className="mt-2 text-blue-500 focus:outline-none"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ReadMore;
