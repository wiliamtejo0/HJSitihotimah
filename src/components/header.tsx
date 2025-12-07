'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-green-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>082382466239</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@hjsitihotimah.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>DSN. BRINGKONING, Tlagah, Banyuates, Sampang</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="HJ. SITI HOTIMAH Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-green-800">
                HJ. SITI HOTIMAH
              </h1>
              <p className="text-xs md:text-sm text-gray-600">
                Perdagangan Pupuk & Pemberantas Hama
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors">
                    Beranda
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/tentang" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors">
                    Tentang Kami
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Produk</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-4">
                    <div className="grid grid-cols-1 gap-3">
                      <Link href="/produk/pupuk" legacyBehavior passHref>
                        <NavigationMenuLink className="block p-3 rounded-md hover:bg-green-50 transition-colors">
                          <h4 className="font-semibold text-green-800">Pupuk</h4>
                          <p className="text-sm text-gray-600">Berbagai jenis pupuk untuk pertanian</p>
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/produk/pestisida" legacyBehavior passHref>
                        <NavigationMenuLink className="block p-3 rounded-md hover:bg-green-50 transition-colors">
                          <h4 className="font-semibold text-green-800">Pemberantas Hama</h4>
                          <p className="text-sm text-gray-600">Produk pestisida berkualitas</p>
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/kontak" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors">
                    Kontak
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-green-700 hover:bg-green-800 text-white">
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/tentang"
                className="px-4 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <div className="px-4 py-2">
                <p className="font-semibold text-gray-700 mb-2">Produk</p>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/produk/pupuk"
                    className="block text-sm text-gray-600 hover:text-green-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pupuk
                  </Link>
                  <Link
                    href="/produk/pestisida"
                    className="block text-sm text-gray-600 hover:text-green-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pemberantas Hama
                  </Link>
                </div>
              </div>
              <Link
                href="/kontak"
                className="px-4 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
              <Button className="bg-green-700 hover:bg-green-800 text-white w-full">
                Hubungi Kami
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}