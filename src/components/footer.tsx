import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="HJ. SITI HOTIMAH Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-400">
                  HJ. SITI HOTIMAH
                </h3>
                <p className="text-xs text-gray-400">
                  Perdagangan Pupuk & Pemberantas Hama
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mitra terpercaya untuk kebutuhan pertanian Anda. Menyediakan pupuk berkualitas dan pestisida efektif untuk hasil panen yang maksimal.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/produk/pupuk" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Produk Pupuk
                </Link>
              </li>
              <li>
                <Link href="/produk/pestisida" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Pemberantas Hama
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Informasi Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">082382466239</p>
                  <p className="text-gray-400 text-xs">Senin - Sabtu, 08:00 - 17:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@hjsitihotimah.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">DSN. BRINGKONING</p>
                  <p className="text-gray-300 text-sm">Desa Tlagah, Kec. Banyuates</p>
                  <p className="text-gray-300 text-sm">Kab. Sampang, Jawa Timur</p>
                  <p className="text-gray-300 text-sm">Kode Pos: 69263</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Jam Operasional</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Senin - Jumat</p>
                  <p className="text-gray-400 text-xs">08:00 - 17:00 WIB</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Sabtu</p>
                  <p className="text-gray-400 text-xs">08:00 - 15:00 WIB</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-medium">Minggu</p>
                  <p className="text-gray-500 text-xs">Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} HJ. SITI HOTIMAH. Hak Cipta Dilindungi.
              </p>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}