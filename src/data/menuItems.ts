export const menuItems = [
  { label: "Beranda", href: "/" },

  { 
    label: "Tentang Kami", 
    href: "/tentang",
    children: [
      { label: "Tentang NBL", href: "/tentang#tentang" },
      { label: "Visi & Misi", href: "/tentang#visi-misi" },
      { label: "Legalitas", href: "/tentang#legalitas" },
      { label: "Tim & Relawan", href: "/tentang#tim" },
    ]
  },

  {
    label: "Program",
    href: "/program",
    children: [
      { label: "Indonesia Hijau Lestari", href: "/program#lingkungan" },
      { label: "Green Social Impact", href: "/program#sosial" },
      { label: "Edukasi Lingkungan", href: "/program#edukasi" },
    ],
  },

  {
    label: "Kegiatan",
    href: "/kegiatan",
    children: [
      { label: "Semua Kegiatan", href: "/kegiatan" },
      { label: "Penghijauan", href: "/kegiatan?kategori=penghijauan" },
      { label: "Edukasi", href: "/kegiatan?kategori=edukasi" },
      { label: "Aksi Sosial", href: "/kegiatan?kategori=sosial" },
    ],
  },

  {
    label: "Donasi",
    href: "/donasi",
    children: [
      { label: "Campaign Aktif", href: "/donasi" },
      { label: "Cara Berdonasi", href: "/donasi#cara" },
      { label: "Transparansi", href: "/transparansi" },
    ],
  },

  {
    label: "Relawan",
    href: "/relawan",
    children: [
      { label: "Gabung Relawan", href: "/relawan" },
      { label: "Kegiatan Relawan", href: "/relawan#kegiatan" },
    ],
  },

  { label: "Edukasi", href: "/edukasi" },

  { label: "Kontak", href: "/kontak" },
];