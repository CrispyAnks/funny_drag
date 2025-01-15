import { useState } from 'react';
import { FloatingButton } from './components/FloatingButton';
import { ChatWindow } from './components/ChatWindow';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {!isChatOpen && <FloatingButton onClick={() => setIsChatOpen(!isChatOpen)} />}
      {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}

export default App;