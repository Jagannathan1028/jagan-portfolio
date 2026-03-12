import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Jagannathan, I’m interested in your development services and would like to discuss my project requirements."
  );

  return (
    <a
      href={`https://wa.me/918681922357?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      <FaWhatsapp size={28} color="white" />
    </a>
  );
}