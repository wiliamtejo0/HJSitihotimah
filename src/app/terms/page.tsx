import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-lg text-gray-600">
              <span className="font-semibold text-green-700">HJ. SITI HOTIMAH</span> - Perdagangan Pupuk & Pemberantas Hama
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">1. Penerimaan Syarat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di <span className="font-semibold">HJ. SITI HOTIMAH</span>. Dengan mengakses dan menggunakan website kami, Anda menyetujui untuk terikat oleh Syarat & Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak boleh menggunakan website atau layanan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Syarat & Ketentuan ini berlaku untuk semua pengguna website, termasuk tanpa batasan pengguna yang merupakan browser, vendor, pelanggan, toko, dan/atau kontributor konten.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">2. Informasi Perusahaan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Nama Perusahaan:</span> HJ. SITI HOTIMAH
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Bidang Usaha:</span> Perdagangan Eceran Pupuk Dan Pemberantas Hama
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Alamat:</span> DSN. BRINGKONING, Desa Tlagah, Kec. Banyuates, Kab. Sampang, Provinsi Jawa Timur
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Kode Pos:</span> 69263
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Telepon:</span> 082382466239
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> info@hjsitihotimah.com
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">3. Produk dan Layanan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-gray-800">3.1 Produk yang Tersedia</h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">HJ. SITI HOTIMAH</span> menyediakan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Berbagai jenis pupuk (organik dan anorganik)</li>
                <li>Pemberantas hama dan pestisida</li>
                <li>Pupuk daun dan pupuk akar</li>
                <li>Fungisida dan insektisida</li>
                <li>Produk pertanian lainnya</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mt-6">3.2 Ketersediaan Produk</h3>
              <p className="text-gray-700 leading-relaxed">
                Kami berusaha untuk menyediakan informasi yang akurat tentang ketersediaan produk. Namun, kami tidak menjamin ketersediaan semua produk yang ditampilkan di website. Harga dan stok dapat berubah tanpa pemberitahuan sebelumnya.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">4. Pembelian dan Pembayaran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-gray-800">4.1 Proses Pembelian</h3>
              <p className="text-gray-700 leading-relaxed">
                Pembelian dapat dilakukan melalui:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Pemesanan langsung di lokasi kami</li>
                <li>Pemesanan melalui telepon</li>
                <li>Pemesanan melalui WhatsApp</li>
                <li>Pemesanan melalui email</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mt-6">4.2 Metode Pembayaran</h3>
              <p className="text-gray-700 leading-relaxed">
                Kami menerima metode pembayaran berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Pembayaran tunai (Cash on Delivery)</li>
                <li>Transfer bank</li>
                <li>E-wallet (sesuai kesepakatan)</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mt-6">4.3 Konfirmasi Pembayaran</h3>
              <p className="text-gray-700 leading-relaxed">
                Untuk pembayaran transfer, pelanggan wajib melakukan konfirmasi pembayaran dengan mengirimkan bukti transfer melalui WhatsApp atau email.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">5. Pengiriman</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-gray-800">5.1 Area Pengiriman</h3>
              <p className="text-gray-700 leading-relaxed">
                Kami melayani pengiriman untuk area:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Kecamatan Banyuates dan sekitarnya</li>
                <li>Kabupaten Sampang</li>
                <li>Area lain di Jawa Timur (sesuai kesepakatan)</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mt-6">5.2 Biaya Pengiriman</h3>
              <p className="text-gray-700 leading-relaxed">
                Biaya pengiriman ditentukan berdasarkan jarak dan jumlah produk. Biaya akan diinformasikan sebelum konfirmasi pesanan.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6">5.3 Waktu Pengiriman</h3>
              <p className="text-gray-700 leading-relaxed">
                Pengiriman akan dilakukan setelah pembayaran dikonfirmasi. Waktu pengiriman estimasi 1-3 hari kerja tergantung lokasi.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">6. Kebijakan Pengembalian</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-gray-800">6.1 Syarat Pengembalian</h3>
              <p className="text-gray-700 leading-relaxed">
                Produk dapat dikembalikan jika:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Produk rusak saat diterima</li>
                <li>Produk tidak sesuai dengan pesanan</li>
                <li>Produk kedaluwarsa</li>
                <li>Kemasan produk bocor atau rusak</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mt-6">6.2 Proses Pengembalian</h3>
              <p className="text-gray-700 leading-relaxed">
                Pengembalian harus dilakukan maksimal 24 jam setelah produk diterima. Pelanggan harus melampirkan bukti foto kerusakan dan memberitahu kami melalui telepon atau WhatsApp.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6">6.3 Penggantian</h3>
              <p className="text-gray-700 leading-relaxed">
                Produk yang memenuhi syarat akan diganti dengan produk yang sama atau produk serupa sesuai kesepakatan.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">7. Hak Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Semua konten di website ini, termasuk tanpa batasan teks, grafik, logo, ikon, gambar, klip audio, unduhan digital, dan kompilasi data, adalah milik <span className="font-semibold">HJ. SITI HOTIMAH</span> atau mitra konten kami dan dilindungi oleh hukum hak kekayaan intelektual Indonesia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Anda tidak diperbolehkan menggunakan merek dagang, logo, atau materi proprietary kami tanpa izin tertulis sebelumnya dari kami.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">8. Pembatasan Tanggung Jawab</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">HJ. SITI HOTIMAH</span> tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Kerusakan yang disebabkan oleh penggunaan produk yang tidak sesuai petunjuk</li>
                <li>Kehilangan atau kerusakan selama pengiriman oleh pihak ketiga</li>
                <li>Keterlambatan pengiriman yang disebabkan oleh faktor di luar kendali kami</li>
                <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">9. Privasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Privasi Anda sangat penting bagi kami. Kebijakan privasi kami menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda. Dengan menggunakan website kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan Kebijakan Privasi kami.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">10. Perubahan Syarat & Ketentuan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami berhak untuk mengubah Syarat & Ketentuan ini kapan saja. Perubahan akan efektif segera setelah diposting di website. Penggunaan berkelanjutan dari website setelah perubahan menunjukkan penerimaan Anda terhadap syarat yang telah diperbarui.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">11. Hukum yang Berlaku</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Syarat & Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul dari atau berhubungan dengan syarat ini akan diselesaikan melalui negosiasi yang baik atau melalui pengadilan yang berwenang di Indonesia.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">12. Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Nama:</span> HJ. SITI HOTIMAH
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Telepon:</span> 082382466239
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> info@hjsitihotimah.com
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Alamat:</span> DSN. BRINGKONING, Desa Tlagah, Kec. Banyuates, Kab. Sampang, Provinsi Jawa Timur, Kode Pos 69263
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} HJ. SITI HOTIMAH. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}