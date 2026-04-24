"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { FiChevronRight, FiX } from "react-icons/fi"

import { menuItems } from "@/data/menuItems"
import NavbarSearch from "@/components/search/NavbarSearch"

import type { BlogPost } from "@/types/blog"

interface Props {
  isOpen: boolean
  onClose: () => void
  posts: BlogPost[]
}

export default function MobileMenu({ isOpen, onClose, posts }: Props) {
  const pathname = usePathname()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  /* auto close on route change */
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  return (
    <>
      {/* ================= OVERLAY ================= */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40
          bg-[rgb(var(--color-dark))]/40 backdrop-blur-sm
          transition-all duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* ================= DRAWER ================= */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-[300px]
          bg-[rgb(var(--color-white))]
          border-l border-[rgb(var(--color-border))]
          flex flex-col
          transition-transform duration-400 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between h-[64px] px-5 border-b border-[rgb(var(--color-border))]">

          <div className="flex flex-col">
            <span className="text-[11px] tracking-[0.2em] uppercase text-[rgb(var(--color-muted))]">
              Nusa Bumi Lestari
            </span>
            <span className="text-[13px] font-medium text-[rgb(var(--color-text))]">
              Menu Navigasi
            </span>
          </div>

          <button
            onClick={onClose}
            className="
              p-2 rounded-[var(--radius-sm)]
              hover:bg-[rgb(var(--color-soft))]
              transition
            "
          >
            <FiX size={18} />
          </button>

        </div>

        {/* ================= SEARCH ================= */}
        <div className="px-5 py-4 border-b border-[rgb(var(--color-border))]">
          <NavbarSearch posts={posts} />
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="flex-1 overflow-y-auto py-3">

          <div className="px-5 pb-2 text-[10px] tracking-[0.18em] uppercase text-[rgb(var(--color-muted))]">
            Navigasi
          </div>

          {menuItems.map((item, index) => {
            const isActive = pathname === item.href

            return (
              <div key={item.label} className="border-b border-[rgb(var(--color-border))]/60">

                <div className="flex items-center justify-between px-5">

                  <Link
                    href={item.href}
                    className={`
                      flex-1 py-3 text-[14px] font-medium
                      transition
                      ${
                        isActive
                          ? "text-[rgb(var(--color-primary))]"
                          : "text-[rgb(var(--color-text))]"
                      }
                    `}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="py-3"
                    >
                      <FiChevronRight
                        size={16}
                        className={`
                          transition-transform duration-300
                          ${
                            openIndex === index
                              ? "rotate-90 text-[rgb(var(--color-primary))]"
                              : "text-[rgb(var(--color-muted))]"
                          }
                        `}
                      />
                    </button>
                  )}

                </div>

                {/* ================= SUBMENU ================= */}
                {item.children && (
                  <div
                    className={`
                      overflow-hidden transition-all duration-300
                      ${
                        openIndex === index
                          ? "max-h-64 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div className="pl-7 pr-5 pb-3 space-y-1">

                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`
                              block py-2 text-[13px]
                              transition
                              ${
                                isChildActive
                                  ? "text-[rgb(var(--color-primary))]"
                                  : "text-[rgb(var(--color-muted))]"
                              }
                            `}
                          >
                            {child.label}
                          </Link>
                        )
                      })}

                    </div>
                  </div>
                )}

              </div>
            )
          })}

        </nav>

        {/* ================= CTA ================= */}
        <div className="px-5 py-4 border-t border-[rgb(var(--color-border))]">

          <div className="flex flex-col gap-3">

            <Link
              href="/donasi"
              className="
                btn-primary
                w-full text-center
              "
            >
              💚 Donasi Sekarang
            </Link>

            <Link
              href="/relawan"
              className="
                btn
                w-full text-center
                border border-[rgb(var(--color-border-strong))]
                text-[rgb(var(--color-text))]
                hover:bg-[rgb(var(--color-primary))]
                hover:text-[rgb(var(--color-white))]
              "
            >
              Jadi Relawan
            </Link>

          </div>

        </div>

        {/* ================= FOOTER ================= */}
        <div className="px-5 py-4 text-[11px] text-[rgb(var(--color-muted))] border-t border-[rgb(var(--color-border))]">

          <p className="text-[rgb(var(--color-text))] font-medium mb-1">
            Yayasan Nusa Bumi Lestari
          </p>

          Pelestarian Lingkungan • Edukasi • Aksi Sosial
          <br />
          Indonesia

        </div>

      </aside>
    </>
  )
}