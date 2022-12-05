import Navbar from '@/components/Navbar'
import Activity from '@/pages/user/Activity'
import Borrowing from '@/pages/user/Borrowing'
import Home from '@/pages/user/Home'
import { footerLink, lsKeys, navbarLink } from '@/utils/constants'
import { FC, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, createStyles, Group, MantineProvider } from '@mantine/core'
import BookDetail from '@/pages/user/BookDetail'
import Footer from '@/components/Footer'
import Login from '@/pages/admin/Login'
import MainDashboard from '@/pages/admin/MainDashboard'
import SideBar from '@/components/Sidebar'

const useStyles = createStyles((t) => ({
  adminContentContainer: {
    backgroundColor: t.colors.gray[0],
    margin: t.spacing.lg,
    padding: t.spacing.lg,
    flex: 1,
    borderRadius: t.spacing.md,
  },
}))

const App: FC = () => {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
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
        </Routes>
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
    <Group style={{ alignItems: 'flex-start' }}>
      <SideBar />
      <Container className={classes.adminContentContainer}>{element}</Container>
    </Group>
  )
}

export default App
