import React, { FC } from 'react'
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Card,
  Spoiler,
} from '@mantine/core'

const useStyles = createStyles((t) => ({
  container: {
    flex: 1,
    backgroundColor: t.colors.yellow[0],
    borderRadius: t.fontSizes.xs,
    padding: 8,
    marginBottom: t.fontSizes.sm,
  },
  title: {
    fontSize: t.fontSizes.sm,
    color: t.colors.gray[7],
    fontWeight: 700,
  },
  message: {
    fontSize: t.fontSizes.sm,
    color: t.colors.gray[7],
  },
}))

interface DashboardItemProps {
  title: string
  message: string
}
const FeedbackItem: FC<DashboardItemProps> = ({ title, message }) => {
  const { classes } = useStyles()

  return (
    <Container className={classes.container}>
      <Text className={classes.title}>{title}</Text>
      <Spoiler
        maxHeight={30}
        style={{ fontSize: 12 }}
        showLabel="Baca Selengkapnya"
        hideLabel="Tutup"
      >
        <Text className={classes.message}>{message}</Text>
      </Spoiler>
    </Container>
  )
}

export default FeedbackItem
