"use client";
import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const steps = [
    {
      question: "What type of project do you need?",
      options: ["E-commerce", "Portfolio", "Blog", "Custom Web App"],
    },
    {
      question: "What is your budget?",
      options: ["₹10k–₹25k", "₹25k–₹50k", "₹50k–₹1L", "₹1L+"],
    },
    {
      question: "What is your timeline?",
      options: ["1 week", "2–4 weeks", "1–2 months", "Flexible"],
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
      alert("✅ Thank you! We will contact you soon.");
      console.log("Collected Data:", newAnswers);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[9999] bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full cursor-pointer"
      >
        💬
      </div>

      {isOpen && (
        <div className="fixed bottom-24 left-6 z-[9999] w-80 bg-white p-4 rounded-xl shadow-lg">
          <h3 className="font-semibold mb-2">
            {steps[stepIndex].question}
          </h3>

          <div className="flex flex-col gap-2">
            {steps[stepIndex].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOptionClick(opt)}
                className="bg-blue-100 hover:bg-blue-200 p-2 rounded"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}