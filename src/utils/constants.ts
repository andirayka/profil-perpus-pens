import { FooterDataProps } from '@/components/Footer'
import { NavbarLinkProps } from '@/components/Navbar'

export const navbarLink: NavbarLinkProps[] = [
  { link: '/', label: 'Koleksi Buku' },
  { link: '/jadwal-kegiatan', label: 'Kegiatan' },
  { link: '/peminjaman', label: 'Peminjaman' },
]

export const footerLink: FooterDataProps[] = [
  {
    title: 'LINK',
    links: [
      { label: 'PENS', link: 'https://www.pens.ac.id/' },
      { label: 'E-Book', link: 'http://ebook.pens.ac.id/' },
      {
        label: 'Jurnal Online',
        link: 'https://ieeexplore.ieee.org/Xplore/home.jsp',
      },
    ],
  },
  {
    title: 'ALAMAT',
    links: [
      {
        label: 'Kampus PENS, Jl. Raya ITS, Sukolilo, Surabaya 60111',
        link: 'https://goo.gl/maps/BUe4BG3z9XtrPR9T7',
      },
    ],
  },
]
