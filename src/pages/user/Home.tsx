import BookListItem from '@/components/BookListItem'
import { BookContext } from '@/context/BookContext'
import { Group, Text, Title } from '@mantine/core'
import { FC, useContext, useEffect } from 'react'

const Home: FC = () => {
  const {
    state: { books, bookKeyword },
    getBooks,
  } = useContext(BookContext)

  useEffect(() => {
    void getBooks()
  }, [])

  return (
    <div>
      <Title>PERPUSTAKAAN POLITEKNIK ELEKTRONIKA NEGERI SURABAYA (PENS)</Title>
      <Text mt={8}>
        Dalam dunia pendidikan, perpustakaan adalah salah satu fasilitas
        pendukung yang paling penting. Perpustakaan adalah sumber ilmu, tempat
        mencari informasi, tempat belajar ataupun penelitian. Perpustakaan
        adalah bagian dari sarana pendukung dalam kelancaran proses belajar
        mengajar. Perpustakaan PENS sendiri bertempat di dalam area PENS.
      </Text>

      {bookKeyword !== '' && (
        <Title mt={5} order={4}>
          Hasil Pencarian dari {`'${bookKeyword}':`}
        </Title>
      )}
      {books.length === 0 && (
        <Title mt={2} order={3}>
          ---Tidak ada data---
        </Title>
      )}

      <Group spacing={40} mt={50}>
        {books.map((item, i) => {
          return <BookListItem key={i} item={item} />
        })}
      </Group>
    </div>
  )
}

export default Home
