import Navbar from '@/components/Navbar'
import Activity from '@/pages/user/Activity'
import Borrowing from '@/pages/user/Borrowing'
import Home from '@/pages/user/Home'
import { footerLink, lsKeys, navbarLink } from '@/utils/constants'
import { FC, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, MantineProvider } from '@mantine/core'
import BookDetail from '@/pages/user/BookDetail'
import Footer from '@/components/Footer'
import Login from '@/pages/admin/Login'
import MainDashboard from '@/pages/admin/MainDashboard'

const App: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // localStorage.clear()
    const loggedInValue = localStorage.getItem(lsKeys.isLoggedIn)
    if (loggedInValue === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {!isLoggedIn && <Navbar links={navbarLink} />}

        <Container px={40} py={30} fluid>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jadwal-kegiatan" element={<Activity />} />
            <Route path="/peminjaman" element={<Borrowing />} />
            <Route path="/buku/:slug" element={<BookDetail />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<MainDashboard />} />
          </Routes>
        </Container>

        <Footer data={footerLink} />
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App
