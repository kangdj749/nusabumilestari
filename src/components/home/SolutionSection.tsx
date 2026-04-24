// components/sections/SolutionSection.tsx

import Image from "next/image"
import Link from "next/link"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

type Program = {
  title: string
  description: string
  image: string
}

const programs: Program[] = [
  {
    title: "Penghijauan & Reboisasi",
    description:
      "Menghidupkan kembali lahan kritis melalui penanaman pohon, mangrove, dan ruang hijau kota.",
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777014086/Penghijauan_Reboisasi_fwh3kx.jpg",
  },
  {
    title: "Edukasi Lingkungan",
    description:
      "Mengedukasi generasi muda melalui sekolah, kampus, dan komunitas agar lebih peduli lingkungan.",
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777014235/Edukasi_Lingkungan_ghwooy.jpg",
  },
  {
    title: "Aksi Sosial Berkelanjutan",
    description:
      "Menggabungkan kepedulian sosial dengan lingkungan untuk membantu masyarakat yang membutuhkan.",
    image:
      "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777014377/Aksi_Sosial_Berkelanjutan_o2sjkr.jpg",
  },
]

export default function SolutionSection() {
  return (
    <section
      className="section bg-[rgb(var(--color-white))]"
      aria-labelledby="solution-heading"
    >
      <div className="container-main">

        {/* ================= HEADER ================= */}
        <div className="max-w-[720px] mb-12">

          <p className="caption-label text-[rgb(var(--color-primary))] mb-4">
            Solusi Nyata
          </p>

          <h2
            id="solution-heading"
            className="h2 mb-5 text-[rgb(var(--color-text))]"
          >
            Bukan hanya berbicara, tapi bertindak nyata.
          </h2>

          <p className="body-lg text-[rgb(var(--color-muted))]">
            Nusa Bumi Lestari hadir untuk menghadirkan perubahan nyata—
            dari penghijauan lingkungan, edukasi generasi muda,
            hingga aksi sosial yang berdampak langsung bagi masyarakat.
          </p>

        </div>

        {/* ================= PROGRAM GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {programs.map((item) => (
            <div
              key={item.title}
              className="
                group
                border border-[rgb(var(--color-border))]
                rounded-[var(--radius-lg)]
                overflow-hidden
                bg-[rgb(var(--color-surface))]
                shadow-[var(--shadow-soft)]
                transition-all duration-300
                hover:shadow-[var(--shadow-medium)]
                hover:-translate-y-[4px]
              "
            >
              {/* IMAGE */}
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={cloudinaryImage(item.image, "card")}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="h3 text-[rgb(var(--color-text))] mb-3">
                  {item.title}
                </h3>

                <p className="text-[14px] text-[rgb(var(--color-muted))] leading-[1.7]">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">

          <Link
            href="/program"
            className="
              btn btn-primary
              shadow-[var(--shadow-soft)]
            "
          >
            Lihat Program Kami
          </Link>

          <Link
            href="/relawan"
            className="
              btn
              border border-[rgb(var(--color-border-strong))]
              text-[rgb(var(--color-text))]
              hover:bg-[rgb(var(--color-soft))]
            "
          >
            🌱 Jadi Relawan
          </Link>

        </div>

      </div>
    </section>
  )
}