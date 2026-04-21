'use client'

import { useState } from 'react'

const WHATSAPP_NUMBER = '905522489971'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed right-6 bottom-8 z-50 flex items-center gap-3 group"
      style={{ filter: 'drop-shadow(0 4px 24px rgba(37,211,102,0.45))' }}
    >
      {/* Tooltip label */}
      <span
        className={`hidden sm:flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-[#25D366] transition-all duration-300 origin-right whitespace-nowrap ${
          hovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-2 scale-95 pointer-events-none'
        }`}
      >
        WhatsApp ile Yaz
      </span>

      {/* Icon button */}
      <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.66 4.8 1.8 6.82L2 30l7.38-1.76A13.94 13.94 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.4a11.4 11.4 0 0 1-5.8-1.58l-.42-.25-4.38 1.04 1.06-4.28-.27-.44A11.38 11.38 0 0 1 4.6 16C4.6 9.7 9.7 4.6 16 4.6S27.4 9.7 27.4 16 22.3 27.4 16 27.4zm6.26-8.54c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.9 1.11-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.3-1.62.29-.8.29-1.48.2-1.62-.08-.14-.29-.23-.63-.4z" />
        </svg>
      </div>
    </a>
  )
}
