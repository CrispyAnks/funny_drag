import React,{useRef} from 'react';
import Draggable from 'react-draggable';
import { MessageCircle } from 'lucide-react';

interface FloatingButtonProps {
  onClick: () => void;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {

  const isDraggingRef = useRef(false);
  const nodeRef = React.useRef<HTMLButtonElement>(null);

  const handleDrag = () => {
    isDraggingRef.current = true;
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      console.log("Dragging... click prevented.");
      e.stopPropagation(); 
      isDraggingRef.current = false;
    } else {
      onClick();
    }
  };


  return (
    <Draggable bounds="body" onDrag={handleDrag} nodeRef={nodeRef}>
      <button
        ref={nodeRef}
        onClick={handleClick}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-move"
      >
        <MessageCircle size={24} />
      </button>
    </Draggable>
  );
};