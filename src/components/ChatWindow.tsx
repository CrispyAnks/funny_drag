import React from 'react';
import { Resizable } from "re-resizable";
import { X } from 'lucide-react';
import 'react-resizable/css/styles.css';

interface ChatWindowProps {
  onClose: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {


  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Resizable
        defaultSize={{width: '25vw', height: '75vh'}}
        className="bg-white rounded-lg shadow-xl flex flex-col"
        enable={{ left: true, top: true }}
      >
          {/* Header */}
          <div className="handle bg-blue-600 p-4 rounded-t-lg flex justify-between items-center">
            <h2 className="text-white font-semibold">Chat Support</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        
      </Resizable>
    </div>
  );
};
