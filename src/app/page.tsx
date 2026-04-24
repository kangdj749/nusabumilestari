import type { Metadata } from "next"
import HomeClient from "@/components/HomeClient"

/* ================================
   SEO METADATA — NUSA BUMI LESTARI
================================ */

export const metadata: Metadata = {
  metadataBase: new URL("https://nusabumilestari.org"),

  title: {
    default:
      "Nusa Bumi Lestari | Gerakan Pelestarian Lingkungan & Aksi Nyata",
    template: "%s | Nusa Bumi Lestari",
  },

  description:
    "Yayasan Nusa Bumi Lestari adalah gerakan pelestarian lingkungan melalui penghijauan, edukasi, dan aksi sosial. Mari bersama menjaga bumi untuk masa depan yang lebih baik.",

  keywords: [
    "yayasan lingkungan",
    "pelestarian lingkungan indonesia",
    "donasi lingkungan",
    "penghijauan indonesia",
    "tanam pohon",
    "restorasi mangrove",
    "relawan lingkungan",
    "edukasi lingkungan",
    "yayasan sosial lingkungan",
    "nusa bumi lestari",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Nusa Bumi Lestari | Bersama Menjaga Bumi Tetap Lestari 🌱",
    description:
      "Ikut berkontribusi dalam penghijauan, edukasi, dan aksi sosial nyata bersama Nusa Bumi Lestari.",
    url: "/",
    siteName: "Nusa Bumi Lestari",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-nbl.jpg", // 🔥 pastikan ada di public/
        width: 1200,
        height: 630,
        alt: "Nusa Bumi Lestari - Gerakan Pelestarian Lingkungan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nusa Bumi Lestari 🌱",
    description:
      "Gerakan pelestarian lingkungan melalui aksi nyata. Donasi, relawan, dan kolaborasi bersama.",
    images: ["/og-nbl.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "environment",
}

/* ================================
   STRUCTURED DATA (JSON-LD)
================================ */

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Yayasan Nusa Bumi Lestari",
    url: "https://nusabumilestari.org",
    logo: "https://nusabumilestari.org/logo.png",
    description:
      "Yayasan yang berfokus pada pelestarian lingkungan melalui penghijauan, edukasi, dan aksi sosial.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
      },
    },
    areaServed: "Indonesia",
    sameAs: [
      // 🔥 isi nanti kalau ada
      // "https://instagram.com/xxx",
      // "https://youtube.com/xxx"
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

/* ================================
   PAGE
================================ */

export default function Page() {
  return (
    <>
      <HomeClient />

      {/* SEO STRUCTURED DATA */}
      <JsonLd />
    </>
  )
}