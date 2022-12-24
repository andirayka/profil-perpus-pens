import BookDetailCover from '@/components/BookDetail/BookDetailCover'
import BookDetailInfo from '@/components/BookDetail/BookDetailInfo'
import { Anchor, Breadcrumbs, Group } from '@mantine/core'
import { FC } from 'react'

const data = {
  uuid: 'bismillah_UUID',
  slug: 'ini-slug-buku',
  title:
    'Never Split the Difference: Negotiating As If Your Life Depended On It',
  author: 'Chirss Voss',
  category: 'Computer Science',
  image: 'https://picsum.photos/120/180',
}
const items = [
  { title: 'Koleksi Buku', href: '/' },
  { title: data.slug, href: `/buku/${data.slug}` },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
))
const BookDetail: FC = () => {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Group mt="lg">
        <BookDetailCover image="https://picsum.photos/420/630" />
        <BookDetailInfo data={data} />
      </Group>
    </>
  )
}

export default BookDetail
