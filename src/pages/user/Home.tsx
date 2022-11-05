import BookListItem from '@/components/BookListItem'
import { Group } from '@mantine/core'
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
      {data.map((item, i) => {
        return <BookListItem key={i} item={item} />
      })}
    </Group>
  )
}

export default Home
