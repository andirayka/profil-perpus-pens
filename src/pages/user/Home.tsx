import BookListItem from '@/components/BookListItem'
import api from '@/utils/api'
import { Group, Text, Title } from '@mantine/core'
import { FC, useEffect, useState } from 'react'

const data = Array(12).fill({
  uuid: 'bismillah_UUID',
  slug: 'ini-slug-buku',
  name: 'Never Split the Difference: Negotiating As If Your Life Depended On It',
  author: 'Chirss Voss',
  category: 'Computer Science',
  image: 'https://picsum.photos/120/180',
})
const Home: FC = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    api
      .get('books')
      .then((res) => {
        console.log(res.data.data)
        setBooks(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Group spacing={40}>
      <Title>PERPUSTAKAAN POLITEKNIK ELEKTRONIKA NEGERI SURABAYA (PENS)</Title>
      <Text>
        Dalam dunia pendidikan, perpustakaan adalah salah satu fasilitas
        pendukung yang paling penting. Perpustakaan adalah sumber ilmu, tempat
        mencari informasi, tempat belajar ataupun penelitian. Perpustakaan
        adalah bagian dari sarana pendukung dalam kelancaran proses belajar
        mengajar. Perpustakaan PENS sendiri bertempat di dalam area PENS.
      </Text>

      {books.map((item, i) => {
        return <BookListItem key={i} item={item} />
      })}
    </Group>
  )
}

export default Home
