"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    key: "name",
    question: "What is your name?",
    type: "input",
    placeholder: "Enter your name",
  },
  {
    key: "email",
    question: "What is your email?",
    type: "input",
    placeholder: "Enter your email",
  },
  {
    key: "country",
    question: "Where are you from?",
    type: "options",
    options: [
      "United States",
      "United Kingdom",
      "UAE / Middle East",
      "Australia",
      "Europe",
      "India",
      "Other",
    ],
  },
  {
    key: "projectType",
    question: "What type of project do you need?",
    type: "options",
    options: ["E-commerce", "Portfolio", "Blog", "SaaS / Web App", "Custom Web App"],
  },
  {
    key: "budget",
    question: "What is your budget range?",
    type: "options",
    options: ["$500 - $1,000", "$1,000 - $3,000", "$3,000 - $5,000", "$5,000+"],
  },
  {
    key: "timeline",
    question: "What is your preferred timeline?",
    type: "options",
    options: ["1 week", "2-4 weeks", "1-2 months", "Flexible"],
  },
  {
    key: "needsBackend",
    question: "Do you need backend development?",
    type: "options",
    options: ["Yes", "No", "Not sure"],
  },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [chatting, setChatting] = useState(false);

  const currentStep = STEPS[stepIndex];
  const totalSteps = STEPS.length;
  const progress = ((stepIndex + (done ? 1 : 0)) / totalSteps) * 100;

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentStep.key]: value };
    setAnswers(newAnswers);
    setInputValue("");

    if (stepIndex < totalSteps - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setDone(true);
      submitData(newAnswers, []);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleAnswer(inputValue.trim());
    }
  };

  const submitData = async (data, messages) => {
    setSubmitting(true);
    try {
      await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorName: data.name,
          visitorEmail: data.email,
          visitorCountry: data.country,
          projectType: data.projectType,
          budget: data.budget,
          timeline: data.timeline,
          needsBackend: data.needsBackend,
          messages,
        }),
      });
    } catch (err) {
      console.error("Failed to submit chatbot data:", err);
    }
    setSubmitting(false);
  };

  const sendChatMessage = async () => {
    if (!chatInput.trim()) return;
    const userMessage = { role: "user", content: chatInput.trim() };
    const updatedMessages = [...chatMessages, userMessage];
    setChatMessages(updatedMessages);
    setChatInput("");
    setChatting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      });
      const data = await res.json();
      const aiMessage = { role: "assistant", content: data.reply || "Sorry, I could not respond right now." };
      const allMessages = [...updatedMessages, aiMessage];
      setChatMessages(allMessages);

      submitData(answers, allMessages);
    } catch {
      setChatMessages([
        ...updatedMessages,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    }
    setChatting(false);
  };

  const reset = () => {
    setStepIndex(0);
    setAnswers({});
    setInputValue("");
    setDone(false);
    setChatMessages([]);
    setChatInput("");
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent2 text-black flex items-center justify-center shadow-lg shadow-accent/25 cursor-pointer"
        aria-label="Open chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 left-6 z-[9999] w-[340px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 flex flex-col"
            style={{ maxHeight: "70vh" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-accent2 p-4 shrink-0">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-black text-sm">
                    {done ? "AI Assistant" : "Project Inquiry"}
                  </h3>
                  <p className="text-black/60 text-xs">
                    {done
                      ? "Ask me anything about Jagannathan"
                      : `Step ${stepIndex + 1} of ${totalSteps}`}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-black hover:bg-black/20 transition-colors cursor-pointer"
                >
                  &times;
                </button>
              </div>
              {!done && (
                <div className="mt-3 w-full h-1 bg-black/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-black/30 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
            </div>

            {/* Body */}
            <div className="bg-[#0b1220] flex-1 overflow-y-auto">
              {!done ? (
                <div className="p-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={stepIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <p className="text-white text-sm font-medium mb-3">
                        {currentStep.question}
                      </p>

                      {currentStep.type === "input" ? (
                        <form onSubmit={handleInputSubmit} className="flex gap-2">
                          <input
                            type={currentStep.key === "email" ? "email" : "text"}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={currentStep.placeholder}
                            className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-accent/50 focus:outline-none transition-colors"
                            autoFocus
                          />
                          <button
                            type="submit"
                            className="px-4 py-2.5 rounded-xl bg-accent/20 text-accent text-sm hover:bg-accent/30 transition-colors cursor-pointer"
                          >
                            Next
                          </button>
                        </form>
                      ) : (
                        <div className="flex flex-col gap-2">
                          {currentStep.options.map((opt, i) => (
                            <button
                              key={i}
                              onClick={() => handleAnswer(opt)}
                              className="text-left px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-accent/50 hover:bg-accent/10 hover:text-accent transition-all duration-200 cursor-pointer"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  {/* Chat messages */}
                  <div className="flex-1 p-4 space-y-3 overflow-y-auto" style={{ minHeight: 120, maxHeight: 300 }}>
                    {chatMessages.length === 0 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M20 6L9 17l-5-5" /></svg>
                        </div>
                        <p className="text-white font-medium mb-1">
                          Thank you, {answers.name || "there"}!
                        </p>
                        <p className="text-gray-400 text-sm mb-2">
                          {submitting ? "Sending your details..." : "Your inquiry has been sent to Jagannathan."}
                        </p>
                        <p className="text-gray-500 text-xs">
                          Ask me anything about Jagannathan&apos;s skills, experience, or projects below.
                        </p>
                      </motion.div>
                    )}

                    {chatMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                            msg.role === "user"
                              ? "bg-accent/20 text-accent"
                              : "bg-white/10 text-gray-200"
                          }`}
                        >
                          {msg.content}
                        </div>
                      </div>
                    ))}

                    {chatting && (
                      <div className="flex justify-start">
                        <div className="px-3 py-2 rounded-xl bg-white/10 text-gray-400 text-sm">
                          <span className="animate-pulse">Thinking...</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Chat input */}
                  <div className="p-3 border-t border-white/10">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        sendChatMessage();
                      }}
                      className="flex gap-2"
                    >
                      <input
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Ask about skills, experience..."
                        className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-accent/50 focus:outline-none transition-colors"
                        disabled={chatting}
                      />
                      <button
                        type="submit"
                        disabled={chatting || !chatInput.trim()}
                        className="px-3 py-2 rounded-xl bg-accent/20 text-accent text-sm hover:bg-accent/30 transition-colors cursor-pointer disabled:opacity-50"
                      >
                        Send
                      </button>
                    </form>
                    <button
                      onClick={reset}
                      className="mt-2 text-gray-500 text-xs hover:text-accent transition-colors cursor-pointer w-full text-center"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
