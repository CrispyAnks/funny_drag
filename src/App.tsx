import { useState } from 'react';
import { FloatingButton } from './components/FloatingButton';
import { ChatWindow } from './components/ChatWindow';
import { FloatingButtonDnD } from './components/FloatingButtonDnD';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <DndProvider backend={HTML5Backend}>
        {!isChatOpen && <FloatingButtonDnD onClick={() => setIsChatOpen(!isChatOpen)} />}
      </DndProvider>
      {!isChatOpen && <FloatingButton onClick={() => setIsChatOpen(!isChatOpen)} />}
      {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}

export default App;