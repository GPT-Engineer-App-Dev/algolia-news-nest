import React from 'react';
import { ExternalLink } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <div className="bg-grey-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2 text-grey-100">{story.title}</h2>
      <div className="flex justify-between items-center text-sm text-grey-400">
        <span>👍 {story.points} points</span>
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-grey-300 hover:text-grey-100"
        >
          Read more <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default StoryCard;