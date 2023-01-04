import React, { FC } from 'react'
import { createStyles, Text, Container, Group, ScrollArea } from '@mantine/core'
import DashboardItem from '@/components/Dashboard/DashboardItem'
import FeedbackItem from '@/components/Dashboard/FeedbackItem'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
}
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const Januari = ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4']
const dataJanuari = {
  labels,
  datasets: [
    {
      label: 'Jumlah Pengunjung Bulan Januari',
      data: [27, 100, 340, 78, 29, 238, 172],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}
const data = {
  labels,
  datasets: [
    {
      label: 'Jumlah Pengunjung Perbulan',
      data: [27, 100, 340, 78, 29, 238, 172],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

const useStyles = createStyles((t) => ({
  container: {
    backgroundColor: t.colors.gray[0],
    // marginRight: t.spacing.lg,
    padding: t.spacing.lg,
    borderRadius: t.spacing.md,
  },
  itemTitle: {
    fontSize: t.fontSizes.lg,
    color: t.colors.gray[7],
    marginBottom: t.fontSizes.md,
  },
  bookCount: {
    fontWeight: 500,
    fontSize: 60,
  },
}))

const MainDashboard: FC = () => {
  const { classes } = useStyles()

  return (
    <Container className={classes.container}>
      <Group>
        <DashboardItem height={300}>
          <Text className={classes.itemTitle}>Jumlah Buku</Text>
          <Text className={classes.bookCount}>2</Text>
        </DashboardItem>
        <DashboardItem height={300}>
          <Text className={classes.itemTitle}>Pesan Pengguna</Text>
          <ScrollArea style={{ height: 230 }}>
            {[1, 1, 1, 1, 1, 1, 1].map((item, i) => {
              return (
                <FeedbackItem
                  key={i}
                  title="ahmad.kurniawan@gmail.com"
                  message="Pesan kepada petugas perpustakaan"
                />
              )
            })}
          </ScrollArea>
        </DashboardItem>
      </Group>

      <DashboardItem>
        <Text className={classes.itemTitle}>Jumlah Pengunjung</Text>
        <Bar style={{}} options={options} data={data} />
      </DashboardItem>
    </Container>
  )
}

export default MainDashboard
