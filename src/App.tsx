import { useState } from 'react';
import { FloatingButton } from './components/FloatingButton';
import { ChatWindow } from './components/ChatWindow';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <h1>ボタン⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩<br/><br/><br/><br/><br/><br/><br/><br/>
      ボタン→→→→→→→→→→→</h1>
      {!isChatOpen && <FloatingButton onClick={() => setIsChatOpen(!isChatOpen)} />}
      {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}

export default App;