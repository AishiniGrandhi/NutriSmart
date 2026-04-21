import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I am your NutriSmart Assistant. Ask me anything about nutrition!' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate Bot Response
    setTimeout(() => {
      let botResponse = "That's an interesting question! Generally, focusing on whole foods and portion control is key. Would you like to check our diet plans?";
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('pizza')) {
        botResponse = "Pizza is delicious but can be high in sodium and saturated fats. Try a thin-crust version with lots of vegetable toppings!";
      } else if (lowerInput.includes('weight loss')) {
        botResponse = "For weight loss, I recommend a high-protein, high-fiber diet to keep you full longer. Check out our 'Weight Loss' plan in the Diets section!";
      } else if (lowerInput.includes('burger')) {
        botResponse = "A burger can be made healthier! Swap the soda for water and add a side salad instead of fries. I can also suggest healthier alternatives in the Analyzer!";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botResponse = "Hello! How can I help you reach your health goals today?";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      <button className="chatbot-toggle glass" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chatbot-window glass fade-in">
          <div className="chatbot-header">
            <h4>NutriSmart AI</h4>
            <span>Online</span>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message-bubble ${msg.role}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input 
              type="text" 
              placeholder="Ask a question..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
