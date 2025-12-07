'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Truck,
  Users,
  CheckCircle
} from 'lucide-react'

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Hubungi <span className="text-yellow-400">HJ. SITI HOTIMAH</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Kami siap membantu kebutuhan pertanian Anda. Hubungi kami untuk konsultasi gratis dan penawaran terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-700" />
                    </div>
                    <CardTitle className="text-green-800">Telepon</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-semibold text-lg">082382466239</p>
                  <p className="text-gray-600 text-sm">Senin - Sabtu, 08:00 - 17:00</p>
                  <Button variant="outline" className="mt-3 w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Hubungi Sekarang
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-700" />
                    </div>
                    <CardTitle className="text-green-800">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-semibold">info@hjsitihotimah.com</p>
                  <p className="text-gray-600 text-sm">Respon dalam 24 jam</p>
                  <Button variant="outline" className="mt-3 w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Kirim Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-700" />
                    </div>
                    <CardTitle className="text-green-800">Alamat</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-semibold">DSN. BRINGKONING</p>
                  <p className="text-gray-600 text-sm">Desa Tlagah, Kec. Banyuates</p>
                  <p className="text-gray-600 text-sm">Kab. Sampang, Jawa Timur</p>
                  <p className="text-gray-600 text-sm">Kode Pos: 69263</p>
                  <Button variant="outline" className="mt-3 w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Lihat Peta
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800 text-2xl">Kirim Pesan</CardTitle>
                  <p className="text-gray-600">
                    Isi formulir di bawah ini dan kami akan segera menghubungi Anda.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-700" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Pesan Terkirim!</h3>
                      <p className="text-gray-600">
                        Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nama Lengkap *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Masukkan nama lengkap Anda"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Nomor Telepon *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="08xx-xxxx-xxxx"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subjek *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Contoh: Informasi produk pupuk"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Pesan *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-green-700 hover:bg-green-800"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Kirim Pesan
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Jam Operasional
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami siap melayani kebutuhan pertanian Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Senin - Jumat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900">08:00 - 17:00</p>
                <p className="text-gray-600">WIB</p>
                <Badge variant="default" className="mt-2">Buka</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Sabtu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900">08:00 - 15:00</p>
                <p className="text-gray-600">WIB</p>
                <Badge variant="default" className="mt-2">Buka</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-gray-500" />
                </div>
                <CardTitle className="text-gray-800">Minggu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900">Tutup</p>
                <p className="text-gray-600">-</p>
                <Badge variant="secondary" className="mt-2">Tutup</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-yellow-700" />
                </div>
                <CardTitle className="text-yellow-800">Layanan Darurat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900">24/7</p>
                <p className="text-gray-600">WhatsApp</p>
                <Badge variant="outline" className="mt-2 border-yellow-600 text-yellow-600">Available</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan pertanian Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Konsultasi Gratis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tim ahli kami siap memberikan konsultasi tentang pemilihan pupuk dan pestisida yang tepat untuk tanaman Anda.
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
                  <MessageCircle className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-green-800">Support 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Layanan pelanggan siap membantu Anda kapan saja melalui WhatsApp untuk kebutuhan mendesak.
                </p>
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
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}