import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
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
              <CardTitle className="text-green-800">1. Pendahuluan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di <span className="font-semibold">HJ. SITI HOTIMAH</span>. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda saat menggunakan layanan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan website dan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">2. Informasi yang Kami Kumpulkan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-gray-800">2.1 Informasi Pribadi</h3>
              <p className="text-gray-700 leading-relaxed">
                Kami dapat mengumpulkan informasi pribadi seperti:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Nama lengkap</li>
                <li>Nomor telepon</li>
                <li>Alamat email</li>
                <li>Alamat pengiriman</li>
                <li>Informasi pembayaran</li>
                <li>Data transaksi pembelian</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mt-6">2.2 Informasi Non-Pribadi</h3>
              <p className="text-gray-700 leading-relaxed">
                Kami juga mengumpulkan informasi non-pribadi seperti:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Alamat IP</li>
                <li>Jenis browser</li>
                <li>Waktu akses</li>
                <li>Halaman yang dikunjungi</li>
                <li>Informasi perangkat</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">3. Penggunaan Informasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami menggunakan informasi yang Anda berikan untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Memproses dan menyelesaikan transaksi pembelian</li>
                <li>Memberikan layanan pelanggan yang lebih baik</li>
                <li>Mengirim informasi produk dan penawaran khusus</li>
                <li>Meningkatkan kualitas produk dan layanan kami</li>
                <li>Menindaklanjuti pertanyaan dan keluhan pelanggan</li>
                <li>Memenuhi persyaratan hukum dan peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">4. Perlindungan Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">HJ. SITI HOTIMAH</span> berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Enkripsi data yang aman</li>
                <li>Akses terbatas kepada data pribadi</li>
                <li>Sistem keamanan yang terus diperbarui</li>
                <li>Pelatihan reguler staf tentang keamanan data</li>
                <li>Backup data yang aman</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">5. Berbagi Informasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Untuk memproses pembayaran (mitra pembayaran)</li>
                <li>Untuk pengiriman produk (jasa ekspedisi)</li>
                <li>Jika diwajibkan oleh hukum atau peraturan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau pelanggan</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">6. Hak Anda</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Mengakses informasi pribadi yang kami simpan</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi Anda</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">7. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Website kami menggunakan cookies untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Mengingat preferensi Anda</li>
                <li>Meningkatkan pengalaman browsing</li>
                <li>Menganalisis traffic website</li>
                <li>Menyediakan konten yang relevan</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Anda dapat mengatur browser untuk menolak cookies atau memberitahu saat cookies dikirim.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">8. Perubahan Kebijakan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan ditampilkan di halaman ini dan tanggal terakhir diperbarui akan diubah. Kami mendorong Anda untuk secara berkala meninjau kebijakan ini.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">9. Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau bagaimana kami menangani data Anda, silakan hubungi kami:
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