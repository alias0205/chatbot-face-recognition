import React, { useState } from "react";

const initialMessages = [
  {
    author: "assistant",
    text: "Hi! Ask me about onboarding, support, or face recognition setup.",
  },
];

const Chatbot = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (!input.trim()) {
      return;
    }

    const nextMessages = [...messages, { author: "user", text: input }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chatbot/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, sessionId: "demo-session" }),
      });
      const data = await response.json();
      setMessages([...nextMessages, { author: "assistant", text: data.reply }]);
    } catch (error) {
      setMessages([
        ...nextMessages,
        {
          author: "assistant",
          text: "Unable to reach the chatbot service right now.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="card">
      <div className="card__header">
        <h2>Chatbot</h2>
        <p>Conversational support built into the MERN dashboard.</p>
      </div>
      <div className="chatbot">
        <div className="chatbot__messages">
          {messages.map((message, index) => (
            <div
              key={`${message.author}-${index}`}
              className={`chatbot__message chatbot__message--${message.author}`}
            >
              <span>{message.text}</span>
            </div>
          ))}
          {isLoading && (
            <div className="chatbot__message chatbot__message--assistant">
              <span>Typing...</span>
            </div>
          )}
        </div>
        <form className="chatbot__form" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Chatbot;
