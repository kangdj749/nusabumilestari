// components/sections/ImpactSection.tsx

import Image from "next/image"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

type ImpactItem = {
  value: string
  label: string
  description: string
}

const impacts: ImpactItem[] = [
  {
    value: "10.000+",
    label: "Pohon Ditanam",
    description:
      "Kontribusi nyata dalam mengurangi dampak perubahan iklim dan memperbaiki ekosistem.",
  },
  {
    value: "5.000+",
    label: "Penerima Manfaat",
    description:
      "Masyarakat yang merasakan langsung dampak program sosial dan lingkungan.",
  },
  {
    value: "100+",
    label: "Kegiatan Edukasi",
    description:
      "Edukasi lingkungan untuk membangun generasi yang lebih peduli dan sadar.",
  },
]

export default function ImpactSection() {
  return (
    <section
      className="
        relative
        section-lg
        overflow-hidden
        bg-[rgb(var(--color-dark))]
      "
      aria-labelledby="impact-heading"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(
            "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777013904/Aksi_penghijauan_dan_kegiatan_sosial_Nusa_Bumi_Lestari_gu7xcw.jpg",
            "banner"
          )}
          alt="Aksi penghijauan dan kegiatan sosial Nusa Bumi Lestari"
          fill
          priority={false}
          className="object-cover opacity-40"
        />
      </div>

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--color-dark))]/80 via-[rgb(var(--color-dark))]/70 to-[rgb(var(--color-dark))]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container-main">

        {/* HEADER */}
        <div className="max-w-[720px] mb-14 text-center mx-auto">

          <p className="caption-label text-[rgb(var(--color-accent))] mb-4">
            Dampak Nyata
          </p>

          <h2
            id="impact-heading"
            className="
              h2
              text-[rgb(var(--color-white))]
              mb-5
            "
          >
            Setiap langkah kecil, menciptakan perubahan besar.
          </h2>

          <p className="body-lg text-[rgb(var(--color-white))]/80">
            Bersama relawan, donatur, dan mitra, kami terus menghadirkan
            dampak nyata bagi lingkungan dan masyarakat Indonesia.
          </p>

        </div>

        {/* ================= IMPACT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {impacts.map((item) => (
            <div
              key={item.label}
              className="
                text-center
                border border-[rgb(var(--color-white))]/10
                rounded-[var(--radius-lg)]
                p-8
                backdrop-blur-md
                bg-[rgb(var(--color-white))]/5
                shadow-[var(--shadow-soft)]
                transition-all duration-300
                hover:-translate-y-[4px]
                hover:shadow-[var(--shadow-medium)]
              "
            >
              {/* VALUE */}
              <p
                className="
                  text-[36px] md:text-[44px]
                  font-semibold
                  text-[rgb(var(--color-accent))]
                  mb-3
                  tracking-[-0.02em]
                "
              >
                {item.value}
              </p>

              {/* LABEL */}
              <h3 className="h3 text-[rgb(var(--color-white))] mb-2">
                {item.label}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[13.5px] text-[rgb(var(--color-white))]/70 leading-[1.7]">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}