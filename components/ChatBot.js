"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);

  const steps = [
    {
      question: "What type of project do you need?",
      options: ["E-commerce", "Portfolio", "Blog", "Custom Web App"],
    },
    {
      question: "What is your budget?",
      options: ["$500-$1k", "$1k-$3k", "$3k-$5k", "$5k+"],
    },
    {
      question: "What is your timeline?",
      options: ["1 week", "2-4 weeks", "1-2 months", "Flexible"],
    },
    {
      question: "Do you need backend?",
      options: ["Yes", "No", "Not sure"],
    },
  ];

  const handleOptionClick = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStepIndex(0);
    setAnswers([]);
    setDone(false);
  };

  return (
    <>
      {/* Floating Button */}
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
            className="fixed bottom-24 left-6 z-[9999] w-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-accent2 p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-black text-sm">
                    Project Inquiry
                  </h3>
                  <p className="text-black/60 text-xs">
                    Step {Math.min(stepIndex + 1, steps.length)} of{" "}
                    {steps.length}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-black hover:bg-black/20 transition-colors cursor-pointer"
                >
                  &times;
                </button>
              </div>
              {/* Progress bar */}
              <div className="mt-3 w-full h-1 bg-black/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-black/30 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((stepIndex + (done ? 1 : 0)) / steps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Body */}
            <div className="bg-[#0b1220] p-4">
              {!done ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <p className="text-white text-sm font-medium mb-3">
                      {steps[stepIndex].question}
                    </p>
                    <div className="flex flex-col gap-2">
                      {steps[stepIndex].options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(opt)}
                          className="text-left px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-accent/50 hover:bg-accent/10 hover:text-accent transition-all duration-200 cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-white font-medium mb-1">Thank you!</p>
                  <p className="text-gray-400 text-sm mb-4">
                    We will contact you soon.
                  </p>
                  <button
                    onClick={reset}
                    className="text-accent text-sm hover:underline cursor-pointer"
                  >
                    Start Over
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
