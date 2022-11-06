import { FC } from 'react'
import { Card, createStyles } from '@mantine/core'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'

const useStyles = createStyles((t) => ({
  image: {
    width: 240,
    height: 360,
  },
}))

interface BookDetailCoverProps {
  image: string
}
const BookDetailCover: FC<BookDetailCoverProps> = ({ image }) => {
  const { classes } = useStyles()

  return (
    <Card withBorder shadow="sm" radius="md" p="md">
      <InnerImageZoom
        className={classes.image}
        src={image}
        zoomType="hover"
        zoomPreload={true}
      />
    </Card>
  )
}

export default BookDetailCover
