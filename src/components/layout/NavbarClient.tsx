"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { FiMenu } from "react-icons/fi"

import MobileMenu from "@/components/layout/MobileMenu"
import { menuItems } from "@/data/menuItems"
import type { BlogPost } from "@/types/blog"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

interface Props {
  posts: BlogPost[]
}

export default function NavbarClient({ posts }: Props) {
  const logo =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1776396374/logo-nbl.png"

  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  const handleOpen = useCallback((): void => setMobileOpen(true), [])
  const handleClose = useCallback((): void => setMobileOpen(false), [])

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`
          fixed top-0 w-full z-50
          transition-all duration-500 ease-out

          ${
            scrolled
              ? `
                bg-[rgb(var(--color-white))]/90
                backdrop-blur-xl
                shadow-[var(--shadow-soft)]
                border-b border-[rgb(var(--color-border))]
              `
              : `bg-transparent`
          }
        `}
      >
        {/* Gradient hero */}
        {!scrolled && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
        )}

        <div className="container-main relative">
          <div className="grid grid-cols-12 items-center h-[72px]">

            {/* LOGO */}
            <div className="col-span-6 md:col-span-3 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src={cloudinaryImage(logo, "logo")}
                  alt="Nusa Bumi Lestari"
                  width={140}
                  height={36}
                  className="h-[30px] w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* MENU DESKTOP */}
            <div className="hidden md:flex col-span-6 justify-center">
              <ul className="flex items-center gap-10">

                {menuItems.map((item) => (
                  <li key={item.label} className="relative group">

                    <Link
                      href={item.href}
                      className={`
                        whitespace-nowrap
                        text-[13px]
                        font-medium
                        tracking-[0.06em]

                        ${
                          scrolled
                            ? "text-[rgb(var(--color-text))]"
                            : "text-[rgb(var(--color-white))]/90"
                        }

                        hover:text-[rgb(var(--color-primary))]
                        transition
                      `}
                    >
                      {item.label}
                    </Link>

                    {/* underline */}
                    <span
                      className="
                        absolute left-0 -bottom-2
                        w-0 h-[2px]
                        bg-[rgb(var(--color-primary))]
                        transition-all duration-300
                        group-hover:w-full
                      "
                    />

                    {/* SUBMENU */}
                    {item.children && (
                      <div
                        className="
                          absolute left-1/2 -translate-x-1/2 top-full mt-6
                          w-[260px]

                          bg-[rgb(var(--color-white))]
                          border border-[rgb(var(--color-border))]
                          rounded-[var(--radius-lg)]
                          shadow-[var(--shadow-elevated)]

                          opacity-0 invisible
                          translate-y-2
                          group-hover:opacity-100
                          group-hover:visible
                          group-hover:translate-y-0

                          transition-all duration-300
                        "
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="
                              block px-5 py-3
                              text-[13px]

                              text-[rgb(var(--color-text))]
                              hover:text-[rgb(var(--color-primary))]

                              hover:bg-[rgb(var(--color-soft))]
                              transition
                            "
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}

                  </li>
                ))}

              </ul>
            </div>

            {/* CTA DONASI */}
            <div className="hidden md:flex col-span-3 justify-end">
              <Link
                href="/donasi"
                className="
                  btn
                  btn-primary
                  shadow-[var(--shadow-soft)]
                "
              >
                💚 Donasi
              </Link>
            </div>

            {/* MOBILE */}
            <div className="col-span-6 md:hidden flex justify-end">
              <button
                onClick={handleOpen}
                className={`
                  p-2
                  rounded-[var(--radius-sm)]
                  border

                  ${
                    scrolled
                      ? "border-[rgb(var(--color-border))] text-[rgb(var(--color-text))]"
                      : "border-[rgb(var(--color-white))]/30 text-[rgb(var(--color-white))]"
                  }

                  hover:bg-[rgb(var(--color-white))]/10
                  transition
                `}
              >
                <FiMenu size={20} />
              </button>
            </div>

          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={handleClose}
        posts={posts}
      />
    </>
  )
}