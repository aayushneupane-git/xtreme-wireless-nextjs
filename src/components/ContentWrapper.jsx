import React from 'react';

const ContentWrapper = ({ children }) => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export default ContentWrapper;
