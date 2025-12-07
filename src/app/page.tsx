import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Leaf, Shield, Truck, Users, Star, Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-yellow-400">HJ. SITI HOTIMAH</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-green-100">
                  Perdagangan Pupuk & Pemberantas Hama Terpercaya
                </h2>
                <p className="text-lg text-green-50 leading-relaxed">
                  Mitra andal petani Indonesia. Menyediakan pupuk berkualitas tinggi dan pestisida efektif untuk hasil panen yang maksimal dan berkelanjutan.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                  Lihat Produk
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">10+</div>
                  <div className="text-sm text-green-100">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">1000+</div>
                  <div className="text-sm text-green-100">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">50+</div>
                  <div className="text-sm text-green-100">Produk Variasi</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="HJ. SITI HOTIMAH - Perdagangan Pupuk dan Pemberantas Hama"
                  fill
                  className="object-contain bg-white/10 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-green-700">HJ. SITI HOTIMAH</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen untuk menyediakan produk pertanian berkualitas tinggi dengan harga terjangkau dan layanan terbaik untuk kesuksesan pertanian Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Produk Berkualitas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pupuk dan pestisida berkualitas tinggi yang terjamin keamanannya untuk tanaman dan lingkungan.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Terpercaya</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reputasi terpercaya dengan pengalaman lebih dari 10 tahun melayani petani di seluruh Indonesia.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Pengiriman Cepat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sistem distribusi yang efisien memastikan produk sampai tepat waktu dengan kondisi terbaik.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Layanan Prima</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tim profesional siap memberikan konsultasi dan solusi terbaik untuk kebutuhan pertanian Anda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Berbagai jenis pupuk dan pestisida berkualitas untuk mendukung kesuksesan pertanian Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-green-700" />
                  </div>
                  <CardTitle className="text-green-800">Pupuk Organik & Anorganik</CardTitle>
                </div>
                <CardDescription>
                  Pupuk berkualitas untuk semua jenis tanaman
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Pupuk Urea, SP-36, KCL</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Pupuk Organik Cair & Padat</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Pupuk Daun & Akar</span>
                  </li>
                </ul>
                <Link href="/produk/pupuk">
                  <Button variant="outline" className="mt-4 w-full">
                    Lihat Semua Pupuk
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-red-700" />
                  </div>
                  <CardTitle className="text-green-800">Pemberantas Hama</CardTitle>
                </div>
                <CardDescription>
                  Pestisida efektif dan aman untuk tanaman
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Insektisida & Fungisida</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Herbisida & Rodentisida</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Pembasmi Wereng & Ulat</span>
                  </li>
                </ul>
                <Link href="/produk/pestisida">
                  <Button variant="outline" className="mt-4 w-full">
                    Lihat Semua Pestisida
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Produk berkualitas, harga terjangkau, dan pelayanan sangat memuaskan. Panen saya meningkat drastis!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-800 font-semibold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Bapak Ahmad</p>
                    <p className="text-sm text-gray-600">Petani Padi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Pupuk dari HJ. SITI HOTIMAH sangat bagus untuk tanaman jagung saya. Hasil panen melimpah!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-800 font-semibold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ibu Siti</p>
                    <p className="text-sm text-gray-600">Petani Jagung</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Pestisida yang dijual sangat efektif mengatasi hama. Pengiriman cepat dan pelayanan ramah."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-800 font-semibold">R</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Bapak Rahmat</p>
                    <p className="text-sm text-gray-600">Petani Sayuran</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Siap Meningkatkan Hasil Panen Anda?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan pertanian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              082382466239
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              <Mail className="w-5 h-5 mr-2" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}