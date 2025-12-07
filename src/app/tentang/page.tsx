import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Award, 
  Leaf, 
  Shield, 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Target,
  Heart,
  TrendingUp
} from 'lucide-react'
import Image from 'next/image'

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tentang <span className="text-yellow-400">HJ. SITI HOTIMAH</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Mitra terpercaya petani Indonesia yang berkomitmen menyediakan pupuk berkualitas dan pestisida efektif untuk mendukung ketahanan pangan nasional.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Perdagangan Pupuk & Pemberantas Hama Terpercaya
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-green-700">HJ. SITI HOTIMAH</span> telah berdiri sejak tahun 2014 dengan fokus pada perdagangan eceran pupuk dan pemberantas hama. Dengan pengalaman lebih dari 10 tahun, kami menjadi mitra andal bagi ribuan petani di Jawa Timur.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-700 mb-1">10+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-700 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-700 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Jenis Produk</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-700 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Layanan Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/logo.png"
                  alt="HJ. SITI HOTIMAH - Logo Perusahaan"
                  fill
                  className="object-contain bg-white/10 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visi & Misi Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Komitmen kami untuk kemajuan pertanian Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-700" />
                  </div>
                  <CardTitle className="text-green-800">Visi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi penyedia pupuk dan pestisida terdepan di Indonesia yang mendukung ketahanan pangan nasional melalui produk berkualitas, harga terjangkau, dan layanan prima untuk kesejahteraan petani.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-700" />
                  </div>
                  <CardTitle className="text-green-800">Misi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Menyediakan produk pertanian berkualitas tinggi dengan harga kompetitif</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Memberikan edukasi dan konsultasi tentang penggunaan pupuk dan pestisida yang tepat</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Membangun hubungan jangka panjang dengan pelanggan berdasarkan kepercayaan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mendukung pertanian berkelanjutan yang ramah lingkungan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Inti Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Prinsip yang memandu setiap tindakan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Kepercayaan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Membangun kepercayaan melalui produk berkualitas dan layanan yang konsisten
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Kualitas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Hanya menyediakan produk terbaik yang terjamin keamanannya
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Pelayanan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Memberikan pelayanan terbaik dengan hati dan keikhlasan
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Inovasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Terus berinovasi untuk memberikan solusi pertanian terbaik
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-green-700">HJ. SITI HOTIMAH</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Keunggulan yang membuat kami berbeda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Berpengalaman</h3>
                <p className="text-gray-600 text-sm">
                  Lebih dari 10 tahun pengalaman dalam industri pupuk dan pestisida
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pengiriman Cepat</h3>
                <p className="text-gray-600 text-sm">
                  Sistem distribusi efisien untuk pengiriman tepat waktu
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Produk Terjamin</h3>
                <p className="text-gray-600 text-sm">
                  Semua produk terjamin keaslian dan kualitasnya
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tim Ahli</h3>
                <p className="text-gray-600 text-sm">
                  Staf berpengalaman siap memberikan konsultasi gratis
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ramah Lingkungan</h3>
                <p className="text-gray-600 text-sm">
                  Mendukung pertanian berkelanjutan yang ramah lingkungan
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Layanan 24/7</h3>
                <p className="text-gray-600 text-sm">
                  Siap melayani kebutuhan Anda kapan saja
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami siap membantu kebutuhan pertanian Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Telepon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold">082382466239</p>
                <p className="text-gray-600 text-sm">Senin - Sabtu, 08:00 - 17:00</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold">info@hjsitihotimah.com</p>
                <p className="text-gray-600 text-sm">Respon 24 jam</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Alamat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold">DSN. BRINGKONING</p>
                <p className="text-gray-600 text-sm">Tlagah, Banyuates, Sampang</p>
                <p className="text-gray-600 text-sm">Jawa Timur 69263</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Jam Operasional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold">Senin - Jumat</p>
                <p className="text-gray-600 text-sm">08:00 - 17:00 WIB</p>
                <p className="text-gray-600 text-sm">Sabtu: 08:00 - 15:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Bergabunglah dengan Ribuan Petani Puas
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Rasakan perbedaan dengan produk berkualitas dan layanan prima dari HJ. SITI HOTIMAH
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              Lihat Produk Kami
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}