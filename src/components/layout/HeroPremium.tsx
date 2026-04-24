"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

const slides = [
  {
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1776996900/60800d9d03dd0-780x470_fptj9l.jpg",
    title: "Bumi Tidak Membutuhkan Kita.",
    highlight: "Kita yang Membutuhkan Bumi.",
    subtitle:
      "Bersama Nusa Bumi Lestari, kita jaga kehidupan hari ini untuk masa depan yang lebih layak.",
  },
  {
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1776996692/Mulai_dari_Langkah_Kecil_w4whag.jpg",
    title: "Mulai dari Langkah Kecil.",
    highlight: "Ciptakan Dampak Besar.",
    subtitle:
      "Dari edukasi, aksi sosial, hingga penghijauan — setiap kontribusi berarti untuk bumi kita.",
  },
]

export default function HeroSection() {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 7000)

    return () => clearInterval(t)
  }, [])

  const slide = slides[index]

  return (
    <section
      className="
        relative
        min-h-[88vh] md:h-[100vh]
        -mt-[72px] pt-[72px]
        overflow-hidden
        bg-[rgb(var(--color-dark))]
      "
    >
      {/* ================= BACKGROUND ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={cloudinaryImage(slide.image, "banner")}
              alt={slide.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-dark))]/80 via-[rgb(var(--color-dark))]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-dark))]/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(34,197,94,0.18),transparent_60%)]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex items-center min-h-[88vh] md:h-full">
        <div className="container-main w-full">
          <div className="max-w-[720px]">

            {/* LABEL */}
            <motion.p
              key={`label-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-[11px]
                tracking-[0.35em]
                uppercase
                font-semibold
                text-[rgb(var(--color-white))]/70
                mb-5
              "
            >
              NUSA BUMI LESTARI
            </motion.p>

            {/* HEADLINE */}
            <motion.h1
              key={slide.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-[30px] sm:text-[36px] md:text-[54px] lg:text-[64px]
                leading-[1.08]
                tracking-[-0.02em]
                font-semibold
                mb-5
              "
              style={{
                textShadow: "0 10px 40px rgba(0,0,0,0.45)",
              }}
            >
              <span className="block text-[rgb(var(--color-white))]">
                {slide.title}
              </span>

              <span className="block text-[rgb(var(--color-accent))]">
                {slide.highlight}
              </span>
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              key={slide.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-[15.5px] md:text-[18px]
                leading-[1.8]
                text-[rgb(var(--color-white))]/85
                mb-8
                max-w-[560px]
              "
            >
              {slide.subtitle}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href="/relawan"
                className="
                  btn
                  bg-[rgb(var(--color-primary))]
                  text-[rgb(var(--color-white))]
                  px-6 py-3
                  text-[14px] md:text-[15px]
                  font-semibold
                  shadow-[var(--shadow-medium)]
                  hover:bg-[rgb(var(--color-primary-dark))]
                "
              >
                🌱 Ikut Bergerak
              </Link>

              <Link
                href="/donasi"
                className="
                  btn
                  bg-[rgb(var(--color-white))]
                  text-[rgb(var(--color-dark))]
                  px-6 py-3
                  text-[14px] md:text-[15px]
                  font-semibold
                  shadow-[var(--shadow-medium)]
                  hover:opacity-90
                "
              >
                💚 Donasi Sekarang
              </Link>
            </motion.div>

            {/* TRUST */}
            <p className="mt-5 text-[12.5px] text-[rgb(var(--color-white))]/70">
              ✔ Aksi Nyata • ✔ Transparan • ✔ Berdampak
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}