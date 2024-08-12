import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const fetchComments = async (storyId) => {
  const response = await fetch(`https://hn.algolia.com/api/v1/items/${storyId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch comments');
  }
  return response.json();
};

const Comment = ({ comment }) => (
  <div className="mb-4 border-l-2 border-grey-700 pl-4">
    <p className="text-grey-300 mb-2" dangerouslySetInnerHTML={{ __html: comment.text }} />
    <p className="text-grey-500 text-sm">By: {comment.author}</p>
    {comment.children && (
      <div className="ml-4 mt-2">
        {comment.children.map((childComment) => (
          <Comment key={childComment.id} comment={childComment} />
        ))}
      </div>
    )}
  </div>
);

const CommentsModal = ({ isOpen, onClose, storyId }) => {
  const { data: story, isLoading, error } = useQuery({
    queryKey: ['comments', storyId],
    queryFn: () => fetchComments(storyId),
    enabled: isOpen,
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-grey-800 text-grey-100 max-w-3xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Comments</DialogTitle>
          <button onClick={onClose} className="absolute right-4 top-4 text-grey-400 hover:text-grey-100">
            <X size={24} />
          </button>
        </DialogHeader>
        <ScrollArea className="flex-grow">
          {isLoading && <p>Loading comments...</p>}
          {error && <p>Error loading comments</p>}
          {story && (
            <div>
              <h2 className="text-xl font-semibold mb-4">{story.title}</h2>
              {story.children.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CommentsModal;