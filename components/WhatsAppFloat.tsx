import Link from "next/link";

const WHATSAPP_LINK: string = 'https://wa.me/233547846425'; // TODO: replace with your real WhatsApp number

export default function WhatsAppFloat() {
  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#F5C518] shadow-lg transition hover:scale-110"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.85 1h.01a7.94 7.94 0 0 0 5.54-13.58ZM12.06 18.4a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1 1 12.24-3.5 6.56 6.56 0 0 1-6.65 6.59Zm3.6-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.19-.5.64-.62.77-.11.13-.23.14-.42.05-.2-.1-.83-.3-1.58-.97a5.9 5.9 0 0 1-1.09-1.35c-.11-.2 0-.3.09-.4.09-.1.2-.23.3-.35.1-.11.13-.19.2-.32.06-.13.03-.24-.02-.34-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.34.05-.52.24-.18.19-.68.66-.68 1.6s.7 1.86.8 1.99c.1.13 1.37 2.1 3.33 2.94.46.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.16-.46.16-.85.11-.94-.05-.09-.18-.14-.38-.24Z"
          fill="#0B0B0C"
        />
      </svg>
    </Link>
  );
}