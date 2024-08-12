import React, { useState } from 'react';
import { ExternalLink, MessageSquare } from 'lucide-react';
import CommentsModal from './CommentsModal';

const StoryCard = ({ story }) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  return (
    <div className="bg-grey-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2 text-grey-100">{story.title}</h2>
      <div className="flex justify-between items-center text-sm text-grey-400">
        <span>👍 {story.points} points</span>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsCommentsOpen(true)}
            className="flex items-center text-grey-300 hover:text-grey-100"
          >
            <MessageSquare className="mr-1 h-4 w-4" />
            {story.num_comments} comments
          </button>
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
      <CommentsModal
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        storyId={story.objectID}
      />
    </div>
  );
};

export default StoryCard;