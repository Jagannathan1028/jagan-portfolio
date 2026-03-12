"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";

export default function ContactModal({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const sendMessage = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Check your email for confirmation.",
          confirmButtonColor: "#f97316",
          timer: 4000,
          showConfirmButton: false
        });

        setForm({ name: "", email: "", message: "" });
        setOpen(false);
      } else {
        throw new Error();
      }
    } catch {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Failed to Send",
        text: "Please try again later.",
        confirmButtonColor: "#ef4444"
      });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-[#0b1220] p-8 rounded-xl w-[400px] space-y-4"
          >
            <h2 className="text-xl font-semibold">Send Message</h2>

            <input
              placeholder="Your Name"
              className="w-full p-2 rounded bg-black/40"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Your Email"
              className="w-full p-2 rounded bg-black/40"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-2 rounded bg-black/40"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            />

            <div className="flex justify-end gap-4">
              <button onClick={() => setOpen(false)}>Cancel</button>

              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-accent2 px-4 py-2 rounded flex items-center gap-2"
              >
                {loading && (
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                )}
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}