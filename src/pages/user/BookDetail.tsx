import BookDetailCover from '@/components/BookDetail/BookDetailCover'
import BookDetailInfo from '@/components/BookDetail/BookDetailInfo'
import { Anchor, Breadcrumbs, Group } from '@mantine/core'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

// const data = {
//   uuid: 'bismillah_UUID',
//   slug: 'ini-slug-buku',
//   title:
//     'Never Split the Difference: Negotiating As If Your Life Depended On It',
//   author: 'Chirss Voss',
//   category: 'Computer Science',
//   image: 'https://picsum.photos/120/180',
// }
const BookDetail: FC = () => {
  const { state } = useLocation()
  const item = state?.item
  const items = [
    { title: 'Koleksi Buku', href: '/' },
    { title: item?.slug, href: `/buku/${item?.slug}` },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ))

  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Group mt="lg">
        <BookDetailCover image="https://i.postimg.cc/L66K9jDn/13803342-5362840.jpg" />
        <BookDetailInfo data={item} />
      </Group>
    </>
  )
}

export default BookDetail
