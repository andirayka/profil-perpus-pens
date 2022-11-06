import BookDetailCover from '@/components/BookDetail/BookDetailCover'
import { Group } from '@mantine/core'
import { FC } from 'react'

const BookDetail: FC = () => {
  return (
    <Group>
      <BookDetailCover image="https://picsum.photos/420/630" />
    </Group>
  )
}

export default BookDetail
