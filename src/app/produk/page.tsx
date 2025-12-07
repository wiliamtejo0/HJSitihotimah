'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Leaf, Shield, Package, Phone, ShoppingCart, Star, CheckCircle } from 'lucide-react'

export default function ProdukPage() {
  const [selectedCategory, setSelectedCategory] = useState('semua')

  const pupukProducts = [
    {
      id: 1,
      name: 'Pupuk Urea',
      category: 'anorganik',
      description: 'Pupuk nitrogen berkualitas tinggi untuk pertumbuhan vegetatif tanaman',
      price: 'Rp 150.000',
      unit: '/sak 50kg',
      stock: 'Tersedia',
      rating: 4.8,
      benefits: ['Meningkatkan pertumbuhan daun', 'Menghijaukan tanaman', 'Cocok untuk padi, jagung, sayuran']
    },
    {
      id: 2,
      name: 'Pupuk SP-36',
      category: 'anorganik',
      description: 'Pupuk fosfat untuk pembentukan akar dan buah yang optimal',
      price: 'Rp 180.000',
      unit: '/sak 50kg',
      stock: 'Tersedia',
      rating: 4.7,
      benefits: ['Memperkuat akar', 'Meningkatkan hasil panen', 'Tahan lama']
    },
    {
      id: 3,
      name: 'Pupuk KCL',
      category: 'anorganik',
      description: 'Pupuk kalium untuk kualitas buah dan ketahanan tanaman',
      price: 'Rp 200.000',
      unit: '/sak 50kg',
      stock: 'Tersedia',
      rating: 4.6,
      benefits: ['Meningkatkan kualitas buah', 'Tahan terhadap penyakit', 'Cocok untuk buah-buahan']
    },
    {
      id: 4,
      name: 'Pupuk Organik Cair',
      category: 'organik',
      description: 'Pupuk cair organik untuk nutrisi lengkap tanaman',
      price: 'Rp 25.000',
      unit: '/liter',
      stock: 'Tersedia',
      rating: 4.9,
      benefits: ['Ramah lingkungan', 'Nutrisi lengkap', 'Meningkatkan kesuburan tanah']
    },
    {
      id: 5,
      name: 'Pupuk Kandang',
      category: 'organik',
      description: 'Pupuk organik padat untuk memperbaiki struktur tanah',
      price: 'Rp 15.000',
      unit: '/karung 25kg',
      stock: 'Tersedia',
      rating: 4.5,
      benefits: ['Memperbaiki tanah', 'Menyimpan air', 'Tahan lama']
    },
    {
      id: 6,
      name: 'Pupuk Daun',
      category: 'cair',
      description: 'Pupuk semprot untuk pertumbuhan cepat dan sehat',
      price: 'Rp 30.000',
      unit: '/liter',
      stock: 'Tersedia',
      rating: 4.7,
      benefits: ['Cepat diserap', 'Hasil terlihat cepat', 'Mudah aplikasi']
    }
  ]

  const pestisidaProducts = [
    {
      id: 7,
      name: 'Insektisida Abamectin',
      category: 'insektisida',
      description: 'Mengendalikan hama penghisap dan penggerek pada tanaman',
      price: 'Rp 45.000',
      unit: '/liter',
      stock: 'Tersedia',
      rating: 4.8,
      benefits: ['Efektif untuk wereng', 'Aman untuk tanaman', 'Daya kerja lama']
    },
    {
      id: 8,
      name: 'Fungisida Mancozeb',
      category: 'fungisida',
      description: 'Mencegah dan mengendalikan penyakit jamur pada tanaman',
      price: 'Rp 35.000',
      unit: '/kg',
      stock: 'Tersedia',
      rating: 4.6,
      benefits: ['Mencegah jamur', 'Broad spectrum', 'Tahan hujan']
    },
    {
      id: 9,
      name: 'Herbisida Glyphosate',
      category: 'herbisida',
      description: 'Mengendalikan gulma dan rumput liar di area pertanian',
      price: 'Rp 40.000',
      unit: '/liter',
      stock: 'Tersedia',
      rating: 4.5,
      benefits: ['Efektif untuk gulma', 'Sistemik', 'Cepat bekerja']
    },
    {
      id: 10,
      name: 'Rodentisida',
      category: 'rodentisida',
      description: 'Mengendalikan hama tikus di sawah dan perkebunan',
      price: 'Rp 20.000',
      unit: '/pack 100g',
      stock: 'Tersedia',
      rating: 4.4,
      benefits: ['Efektif untuk tikus', 'Aman untuk ternak', 'Mudah aplikasi']
    }
  ]

  const allProducts = [...pupukProducts, ...pestisidaProducts]

  const filteredProducts = selectedCategory === 'semua' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory)

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-green-800">{product.name}</CardTitle>
            <CardDescription className="mt-2">{product.description}</CardDescription>
          </div>
          <Badge variant={product.stock === 'Tersedia' ? 'default' : 'secondary'}>
            {product.stock}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-green-700">{product.price}</span>
              <span className="text-gray-600 ml-1">{product.unit}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{product.rating}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800">Manfaat:</h4>
            <ul className="space-y-1">
              {product.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-2">
            <Button className="flex-1 bg-green-700 hover:bg-green-800">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Beli Sekarang
            </Button>
            <Button variant="outline">
              <Phone className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Produk Kami
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <span className="font-semibold text-green-700">HJ. SITI HOTIMAH</span> menyediakan berbagai produk pertanian berkualitas tinggi untuk mendukung kesuksesan pertanian Anda.
          </p>
        </div>

        <Tabs defaultValue="semua" className="mb-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="semua">Semua Produk</TabsTrigger>
            <TabsTrigger value="anorganik">Pupuk Anorganik</TabsTrigger>
            <TabsTrigger value="organik">Pupuk Organik</TabsTrigger>
            <TabsTrigger value="insektisida">Insektisida</TabsTrigger>
            <TabsTrigger value="fungisida">Fungisida</TabsTrigger>
            <TabsTrigger value="herbisida">Herbisida</TabsTrigger>
          </TabsList>

          <TabsContent value="semua" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="anorganik" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pupukProducts.filter(p => p.category === 'anorganik').map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="organik" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pupukProducts.filter(p => p.category === 'organik').map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insektisida" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pestisidaProducts.filter(p => p.category === 'insektisida').map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fungisida" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pestisidaProducts.filter(p => p.category === 'fungisida').map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="herbisida" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pestisidaProducts.filter(p => p.category === 'herbisida').map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="bg-green-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Butuh Bantuan Memilih Produk?
          </h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Tim ahli kami siap membantu Anda memilih produk yang tepat untuk kebutuhan pertanian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              082382466239
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}