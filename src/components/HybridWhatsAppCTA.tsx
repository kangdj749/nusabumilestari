"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppCTA() {
  const whatsappNumber: string = "6287765505935"
  const [waLink, setWaLink] = useState<string>("")

  useEffect(() => {
    const message: string = `
Assalamu'alaikum,

Saya tertarik dengan program Yayasan Nusa Bumi Lestari 🌱

Saya ingin:
• Berdonasi
• Menjadi relawan
• Atau berkolaborasi

Mohon informasi lebih lanjut.

Terima kasih 🙏
    `.trim()

    setWaLink(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    )
  }, [])

  if (!waLink) return null

  return (
    <>
      {/* ================= MOBILE STICKY ================= */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div
          className="
            bg-[rgb(var(--color-white))]/95
            backdrop-blur-xl
            border-t border-[rgb(var(--color-border))]
            px-4 py-3
            flex items-center justify-between
          "
        >
          <div className="flex flex-col">
            <span className="text-[11px] font-medium text-[rgb(var(--color-text))]">
              Mari jaga bumi bersama 🌱
            </span>
            <span className="text-[10px] text-[rgb(var(--color-muted))]">
              Donasi • Relawan • Kolaborasi
            </span>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-[12px]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Hubungi
          </a>
        </div>
      </motion.div>

      {/* ================= DESKTOP FLOAT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed bottom-6 right-6 z-50"
      >
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            inline-flex items-center gap-3
            px-5 py-3
            rounded-[var(--radius-md)]
            bg-[rgb(var(--color-primary))]
            text-[rgb(var(--color-white))]
            shadow-[var(--shadow-medium)]
            transition-all duration-300
            hover:-translate-y-[2px]
            hover:bg-[rgb(var(--color-primary-dark))]
          "
        >
          <MessageCircle className="w-4 h-4" />

          <div className="flex flex-col leading-tight">
            <span className="text-[12px] font-medium">
              Hubungi Kami
            </span>
            <span className="text-[10px] text-[rgb(var(--color-white))]/80">
              Donasi • Relawan • Kolaborasi
            </span>
          </div>
        </a>
      </motion.div>
    </>
  )
}