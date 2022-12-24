import BookListItem from '@/components/BookListItem'
import { Group, Text, Title } from '@mantine/core'
import { FC } from 'react'

const data = Array(12).fill({
  uuid: 'bismillah_UUID',
  slug: 'ini-slug-buku',
  name: 'Never Split the Difference: Negotiating As If Your Life Depended On It',
  author: 'Chirss Voss',
  category: 'Computer Science',
  image: 'https://picsum.photos/120/180',
})
const Home: FC = () => {
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

      {data.map((item, i) => {
        return <BookListItem key={i} item={item} />
      })}
    </Group>
  )
}

export default Home
