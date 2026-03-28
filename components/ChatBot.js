"use client";
import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 I'm Jagannathan's AI assistant. Ask me anything!" }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };

    let botReply = "Sorry, I don't understand.";

    const text = input.toLowerCase();

    if (text.includes("skills")) {
      botReply =
        "Jagannathan works with Angular, Java Spring Boot, .NET APIs, SQL, and Azure.";
    } else if (text.includes("contact")) {
      botReply =
        "You can contact Jagannathan using the Hire Me button or WhatsApp.";
    } else if (text.includes("projects")) {
      botReply =
        "He built Hospital Management, Grocery Shopping, and Portfolio websites.";
    }

    setMessages((prev) => [...prev, userMsg, { role: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg cursor-pointer"
      >
        💬
      </div>

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 bg-white rounded-xl shadow-xl p-4 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold">Chat Assistant</h2>
            <button onClick={() => setIsOpen(false)}>❌</button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto text-sm border p-2 rounded">
            {messages.map((m, i) => (
              <p
                key={i}
                className={`my-2 ${
                  m.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    m.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {m.text}
                </span>
              </p>
            ))}
          </div>

          {/* Input */}
          <div className="flex mt-2">
            <input
              className="flex-1 border p-2 text-black rounded-l"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 rounded-r"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}