import Navbar from '@/components/Navbar'
import Activity from '@/pages/user/Activity'
import Borrowing from '@/pages/user/Borrowing'
import Home from '@/pages/user/Home'
import { footerLink, lsKeys, navbarLink } from '@/utils/constants'
import { FC, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Container,
  createStyles,
  Group,
  MantineProvider,
  ScrollArea,
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import BookDetail from '@/pages/user/BookDetail'
import Footer from '@/components/Footer'
import Login from '@/pages/admin/Login'
import MainDashboard from '@/pages/admin/MainDashboard'
import SideBar from '@/components/Sidebar'
import BooksDashboard from '@/pages/admin/BooksDashboard'
import EditBook from '@/pages/admin/EditBook'

const useStyles = createStyles((t) => ({
  adminContentContainer: {
    flex: 1,
    height: '100vh',
    padding: t.spacing.lg,
  },
}))

const App: FC = () => {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <Routes>
            <Route path="/" element={<ClientContainer element={<Home />} />} />
            <Route
              path="/jadwal-kegiatan"
              element={<ClientContainer element={<Activity />} />}
            />
            <Route
              path="/profil"
              element={<ClientContainer element={<Borrowing />} />}
            />
            <Route
              path="/buku/:slug"
              element={<ClientContainer element={<BookDetail />} />}
            />
            <Route
              path="/admin/login"
              element={<ClientContainer element={<Login />} />}
            />
            <Route
              path="/admin/dashboard"
              element={<AdminContainer element={<MainDashboard />} />}
            />
            <Route
              path="/admin/books"
              element={<AdminContainer element={<BooksDashboard />} />}
            />
            <Route
              path="/admin/books/add"
              element={<AdminContainer element={<EditBook />} />}
            />
          </Routes>
        </NotificationsProvider>
      </MantineProvider>
    </BrowserRouter>
  )
}

interface ClientContainerProps {
  element: React.ReactNode
}
const ClientContainer: FC<ClientContainerProps> = ({ element }) => {
  return (
    <>
      <Navbar links={navbarLink} />
      <Container px={40} py={30} fluid>
        {element}
      </Container>
      <Footer data={footerLink} />
    </>
  )
}

interface AdminContainerProps {
  element: React.ReactNode
}
const AdminContainer: FC<AdminContainerProps> = ({ element }) => {
  const { classes } = useStyles()

  return (
    <Group style={{ alignItems: 'flex-start', height: '100vh' }}>
      <SideBar />
      <ScrollArea className={classes.adminContentContainer}>
        {element}
      </ScrollArea>
    </Group>
  )
}

export default App
