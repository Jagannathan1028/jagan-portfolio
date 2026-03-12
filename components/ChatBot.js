"use client";
import { useState } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 I'm Jagannathan's AI assistant. Ask me anything!" }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    const userMsg = { role: "user", text: input };

    let botReply = "Sorry, I don't understand.";

    if (input.toLowerCase().includes("skills")) {
      botReply = "Jagannathan works with Angular, Java Spring Boot, .NET APIs, SQL, and Azure.";
    }

    if (input.toLowerCase().includes("contact")) {
      botReply = "You can contact Jagannathan using the Hire Me button or WhatsApp.";
    }

    if (input.toLowerCase().includes("projects")) {
      botReply = "He built Hospital Management, Grocery Shopping, and Portfolio websites.";
    }

    setMessages([...messages, userMsg, { role: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 left-6 w-80 bg-white rounded-xl shadow-lg p-4">
      <div className="h-64 overflow-y-auto text-sm">
        {messages.map((m, i) => (
          <p key={i} className={m.role === "user" ? "text-right" : "text-left"}>
            <span className="block my-2">{m.text}</span>
          </p>
        ))}
      </div>

      <div className="flex mt-2">
        <input
          className="flex-1 border p-2 text-black rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}