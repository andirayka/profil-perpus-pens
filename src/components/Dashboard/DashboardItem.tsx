import React, { FC } from 'react'
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Card,
} from '@mantine/core'

const useStyles = createStyles((t) => ({
  container: {
    flex: 1,
    marginBottom: t.fontSizes.xl,
  },
}))

interface DashboardItemProps {
  children: React.ReactNode
  height?: number
}
const DashboardItem: FC<DashboardItemProps> = ({ children, height }) => {
  const { classes } = useStyles()

  return (
    <Card
      shadow="sm"
      radius="md"
      className={classes.container}
      style={{ height: height ?? 'auto' }}
    >
      {children}
    </Card>
  )
}

export default DashboardItem
