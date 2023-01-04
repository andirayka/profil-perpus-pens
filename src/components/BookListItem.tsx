import React, { FC } from 'react'
import { Text, createStyles, Card, Image, Center } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

const topBgColorList = ['yellow', 'lime', 'green', 'teal', 'cyan', 'indigo']
const randomTopBgColor =
  topBgColorList[Math.floor(Math.random() * topBgColorList.length)]

const useStyles = createStyles((t) => ({
  container: {
    width: 200,
    height: 340,
    cursor: 'pointer',
  },
  topBgColor: {
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: t.colors[randomTopBgColor][0],
    width: '100%',
    height: 140,
  },
  categoryText: {
    color: t.colors.dark[3],
    fontSize: t.fontSizes.sm,
    marginTop: 12,
  },
  nameText: {
    color: t.colors.dark[9],
    fontSize: t.fontSizes.lg,
    fontWeight: 600,
    marginTop: 4,
  },
  authorText: {
    color: t.colors.green[7],
    fontWeight: 500,
    fontSize: t.fontSizes.md,
  },
}))

export interface BookListItemProps {
  title: string
  author: string
  category: string
  image: string
  slug: string
}
const BookListItem: FC<{ item: BookListItemProps }> = ({ item }) => {
  const { classes } = useStyles()
  const navigate = useNavigate()

  const goToDetail = (): void => {
    navigate(`buku/${item.slug}`, { state: { item } })
  }

  return (
    <Card
      withBorder
      shadow="sm"
      radius="md"
      className={classes.container}
      onClick={goToDetail}
    >
      <Center>
        <div className={classes.topBgColor} />
        <Image width={120} height={180} src={'https://picsum.photos/120/180'} />
      </Center>

      <Text className={classes.categoryText}>{item.category}</Text>
      <Text lineClamp={2} className={classes.nameText}>
        {item.title}
      </Text>
      <Text className={classes.authorText}>{item.author}</Text>
    </Card>
  )
}

export default BookListItem
