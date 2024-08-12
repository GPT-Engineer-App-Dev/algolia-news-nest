import React from 'react';

const StoryCardSkeleton = () => {
  return (
    <div className="bg-grey-800 shadow-md rounded-lg p-4 animate-pulse">
      <div className="h-6 bg-grey-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-grey-700 rounded w-1/2"></div>
    </div>
  );
};

export default StoryCardSkeleton;