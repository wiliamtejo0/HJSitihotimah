import { NextRequest, NextResponse } from 'next/server'

const products = [
  {
    id: 1,
    name: 'Pupuk Urea',
    category: 'anorganik',
    type: 'pupuk',
    description: 'Pupuk nitrogen berkualitas tinggi untuk pertumbuhan vegetatif tanaman',
    price: 150000,
    unit: '/sak 50kg',
    stock: 'Tersedia',
    rating: 4.8,
    benefits: ['Meningkatkan pertumbuhan daun', 'Menghijaukan tanaman', 'Cocok untuk padi, jagung, sayuran'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 2,
    name: 'Pupuk SP-36',
    category: 'anorganik',
    type: 'pupuk',
    description: 'Pupuk fosfat untuk pembentukan akar dan buah yang optimal',
    price: 180000,
    unit: '/sak 50kg',
    stock: 'Tersedia',
    rating: 4.7,
    benefits: ['Memperkuat akar', 'Meningkatkan hasil panen', 'Tahan lama'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 3,
    name: 'Pupuk KCL',
    category: 'anorganik',
    type: 'pupuk',
    description: 'Pupuk kalium untuk kualitas buah dan ketahanan tanaman',
    price: 200000,
    unit: '/sak 50kg',
    stock: 'Tersedia',
    rating: 4.6,
    benefits: ['Meningkatkan kualitas buah', 'Tahan terhadap penyakit', 'Cocok untuk buah-buahan'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 4,
    name: 'Pupuk Organik Cair',
    category: 'organik',
    type: 'pupuk',
    description: 'Pupuk cair organik untuk nutrisi lengkap tanaman',
    price: 25000,
    unit: '/liter',
    stock: 'Tersedia',
    rating: 4.9,
    benefits: ['Ramah lingkungan', 'Nutrisi lengkap', 'Meningkatkan kesuburan tanah'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 5,
    name: 'Pupuk Kandang',
    category: 'organik',
    type: 'pupuk',
    description: 'Pupuk organik padat untuk memperbaiki struktur tanah',
    price: 15000,
    unit: '/karung 25kg',
    stock: 'Tersedia',
    rating: 4.5,
    benefits: ['Memperbaiki tanah', 'Menyimpan air', 'Tahan lama'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 6,
    name: 'Pupuk Daun',
    category: 'cair',
    type: 'pupuk',
    description: 'Pupuk semprot untuk pertumbuhan cepat dan sehat',
    price: 30000,
    unit: '/liter',
    stock: 'Tersedia',
    rating: 4.7,
    benefits: ['Cepat diserap', 'Hasil terlihat cepat', 'Mudah aplikasi'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 7,
    name: 'Insektisida Abamectin',
    category: 'insektisida',
    type: 'pestisida',
    description: 'Mengendalikan hama penghisap dan penggerek pada tanaman',
    price: 45000,
    unit: '/liter',
    stock: 'Tersedia',
    rating: 4.8,
    benefits: ['Efektif untuk wereng', 'Aman untuk tanaman', 'Daya kerja lama'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 8,
    name: 'Fungisida Mancozeb',
    category: 'fungisida',
    type: 'pestisida',
    description: 'Mencegah dan mengendalikan penyakit jamur pada tanaman',
    price: 35000,
    unit: '/kg',
    stock: 'Tersedia',
    rating: 4.6,
    benefits: ['Mencegah jamur', 'Broad spectrum', 'Tahan hujan'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 9,
    name: 'Herbisida Glyphosate',
    category: 'herbisida',
    type: 'pestisida',
    description: 'Mengendalikan gulma dan rumput liar di area pertanian',
    price: 40000,
    unit: '/liter',
    stock: 'Tersedia',
    rating: 4.5,
    benefits: ['Efektif untuk gulma', 'Sistemik', 'Cepat bekerja'],
    image: '/api/placeholder/300/200'
  },
  {
    id: 10,
    name: 'Rodentisida',
    category: 'rodentisida',
    type: 'pestisida',
    description: 'Mengendalikan hama tikus di sawah dan perkebunan',
    price: 20000,
    unit: '/pack 100g',
    stock: 'Tersedia',
    rating: 4.4,
    benefits: ['Efektif untuk tikus', 'Aman untuk ternak', 'Mudah aplikasi'],
    image: '/api/placeholder/300/200'
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const type = searchParams.get('type')
    const id = searchParams.get('id')

    let filteredProducts = products

    if (id) {
      const product = products.find(p => p.id === parseInt(id))
      if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 })
      }
      return NextResponse.json(product)
    }

    if (category) {
      filteredProducts = filteredProducts.filter(product => product.category === category)
    }

    if (type) {
      filteredProducts = filteredProducts.filter(product => product.type === type)
    }

    return NextResponse.json({
      success: true,
      data: filteredProducts,
      total: filteredProducts.length
    })

  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Here you would typically save the product to a database
    // For now, we'll just return a success response
    
    return NextResponse.json({
      success: true,
      message: 'Product created successfully',
      data: body
    })

  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}