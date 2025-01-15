import React, { useState } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { MessageSquareDot } from 'lucide-react';

interface FloatingButtonDnDProps {
  onClick: () => void;
}

export const FloatingButtonDnD: React.FC<FloatingButtonDnDProps> = ({ onClick }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // useDrag hook
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'button',
    item: { type: 'button' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  
  const [, drop] = useDrop(() => ({
    accept: 'button',
    drop: (monitor : DropTargetMonitor) => {
      const offset = monitor.getClientOffset();
      console.log(offset)
      if (offset) {
        setPosition({
          top: offset.y - 50, 
          left: offset.x - 50,
        });
      }
    },
  }));

  return (
    <div
      ref={(node) => drop(drag(node))}
      style={{ position: 'absolute', top: position.top, left: position.left }}
    >
      <button
        onClick={onClick}
        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-move"
      >
        <MessageSquareDot size={24} />
      </button>
    </div>
  );
};
