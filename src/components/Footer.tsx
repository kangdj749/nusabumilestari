"use client"

import Link from "next/link"
import Image from "next/image"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

export default function Footer() {
  const year: number = new Date().getFullYear()

  return (
    <footer className="bg-[rgb(var(--color-dark))] text-[rgb(var(--color-white))]">
      <div className="container-main section-tight">

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-12 gap-10">

          {/* ================= BRAND ================= */}
          <div className="col-span-12 md:col-span-5">

            <div className="flex items-center gap-3 mb-4">
              <Image
                src={cloudinaryImage(
                  "https://res.cloudinary.com/de7fqcvpf/image/upload/v1776396374/logo-nbl.png",
                  "logo"
                )}
                alt="Nusa Bumi Lestari"
                width={120}
                height={40}
                className="h-[32px] w-auto object-contain"
              />
            </div>

            <p className="text-[13.5px] leading-[1.75] text-[rgb(var(--color-white))]/75 max-w-[360px]">
              Yayasan Nusa Bumi Lestari adalah gerakan yang berfokus pada
              pelestarian lingkungan melalui penghijauan, edukasi, dan aksi sosial
              untuk masa depan bumi yang lebih berkelanjutan.
            </p>

          </div>

          {/* ================= TENTANG ================= */}
          <div className="col-span-6 md:col-span-2">

            <h4 className="caption-label text-[rgb(var(--color-white))]/50 mb-3">
              Tentang
            </h4>

            <ul className="space-y-2 text-[13px]">
              {[
                { label: "Tentang Kami", href: "/tentang" },
                { label: "Visi & Misi", href: "/tentang#visi" },
                { label: "Legalitas", href: "/tentang#legalitas" },
                { label: "Program", href: "/program" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[rgb(var(--color-white))]/75 hover:text-[rgb(var(--color-accent))] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* ================= PROGRAM ================= */}
          <div className="col-span-6 md:col-span-2">

            <h4 className="caption-label text-[rgb(var(--color-white))]/50 mb-3">
              Program
            </h4>

            <ul className="space-y-2 text-[13px]">
              {[
                { label: "Penghijauan", href: "/program#penghijauan" },
                { label: "Edukasi Lingkungan", href: "/program#edukasi" },
                { label: "Aksi Sosial", href: "/program#sosial" },
                { label: "Relawan", href: "/relawan" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[rgb(var(--color-white))]/75 hover:text-[rgb(var(--color-accent))] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* ================= KONTAK ================= */}
          <div className="col-span-12 md:col-span-3">

            <h4 className="caption-label text-[rgb(var(--color-white))]/50 mb-3">
              Kontak
            </h4>

            <div className="text-[13.5px] leading-[1.75] text-[rgb(var(--color-white))]/75 space-y-1">
              <p>Bandung, Jawa Barat</p>
              <p>+62 812 3456 7890</p>
              <p>nusabumilestari@gmail.com</p>
            </div>

          </div>

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-12 p-6 rounded-[var(--radius-lg)] bg-[rgb(var(--color-white))]/5 border border-[rgb(var(--color-white))]/10">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <div>
              <p className="text-[14px] font-medium text-[rgb(var(--color-white))]">
                Bersama kita jaga bumi tetap lestari 🌱
              </p>
              <p className="text-[12.5px] text-[rgb(var(--color-white))]/70">
                Ambil bagian dalam gerakan nyata hari ini
              </p>
            </div>

            <div className="flex gap-3">

              <Link
                href="/relawan"
                className="
                  btn
                  border border-[rgb(var(--color-white))]/30
                  text-[rgb(var(--color-white))]
                  hover:bg-[rgb(var(--color-white))]
                  hover:text-[rgb(var(--color-dark))]
                "
              >
                Jadi Relawan
              </Link>

              <Link
                href="/donasi"
                className="
                  btn btn-primary
                  shadow-[var(--shadow-soft)]
                "
              >
                💚 Donasi
              </Link>

            </div>

          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-10 h-px bg-[rgb(var(--color-white))]/10" />

        {/* ================= BOTTOM ================= */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-[rgb(var(--color-white))]/60">

          <p>
            © {year} Yayasan Nusa Bumi Lestari
          </p>

          <div className="flex gap-6">

            <Link
              href="/kebijakan-privasi"
              className="hover:text-[rgb(var(--color-white))] transition"
            >
              Kebijakan Privasi
            </Link>

            <Link
              href="/syarat-ketentuan"
              className="hover:text-[rgb(var(--color-white))] transition"
            >
              Syarat & Ketentuan
            </Link>

          </div>

        </div>

      </div>
    </footer>
  )
}