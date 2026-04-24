// components/sections/ProblemSection.tsx

import Image from "next/image"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

export default function ProblemSection() {
  return (
    <section
      className="
        section
        bg-[rgb(var(--color-surface))]
      "
      aria-labelledby="problem-heading"
    >
      <div className="container-main">

        {/* ================= GRID ================= */}
        <div className="grid-arch items-center">

          {/* ================= IMAGE ================= */}
          <div className="col-span-12 md:col-span-6">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)]">

              <Image
                src={cloudinaryImage(
                  "https://res.cloudinary.com/de7fqcvpf/image/upload/v1777013022/image_oxpjnc.jpg",
                  "detail"
                )}
                alt="Dampak kerusakan lingkungan seperti banjir dan longsor di Indonesia"
                width={900}
                height={600}
                className="w-full h-full object-cover"
                priority={false}
              />

              {/* overlay subtle */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            </div>
          </div>

          {/* ================= TEXT ================= */}
          <div className="col-span-12 md:col-span-6">

            <p className="caption-label text-[rgb(var(--color-primary))] mb-4">
              Tantangan Lingkungan
            </p>

            <h2
              id="problem-heading"
              className="
                h2
                mb-5
                text-[rgb(var(--color-text))]
              "
            >
              Indonesia sedang tidak baik-baik saja.
            </h2>

            <p
              className="
                body-lg
                text-[rgb(var(--color-muted))]
                mb-6
                max-w-[520px]
              "
            >
              Banjir, longsor, dan kerusakan lingkungan bukan lagi ancaman—
              tapi kenyataan yang kita hadapi setiap hari. Dampaknya tidak hanya
              merusak alam, tetapi juga mengancam kehidupan masyarakat,
              terutama mereka yang paling rentan.
            </p>

            {/* ================= HIGHLIGHT ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="card">
                <p className="h3 text-[rgb(var(--color-primary))] mb-1">
                  66%
                </p>
                <p className="text-[13.5px] text-[rgb(var(--color-muted))]">
                  Bencana didominasi banjir di Indonesia
                </p>
              </div>

              <div className="card">
                <p className="h3 text-[rgb(var(--color-primary))] mb-1">
                  Ribuan
                </p>
                <p className="text-[13.5px] text-[rgb(var(--color-muted))]">
                  Lahan kritis membutuhkan penghijauan
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}