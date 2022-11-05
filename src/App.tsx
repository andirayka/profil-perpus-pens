import Navbar from '@/components/Navbar'
import Activity from '@/pages/user/Activity'
import Borrowing from '@/pages/user/Borrowing'
import Home from '@/pages/user/Home'
import { navbarLink } from '@/utils/constants'
import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, MantineProvider } from '@mantine/core'
import BookDetail from '@/pages/user/BookDetail'

const App: FC = () => {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Navbar links={navbarLink} />

        <Container px={40} py={30} fluid>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jadwal-kegiatan" element={<Activity />} />
            <Route path="/peminjaman" element={<Borrowing />} />
            <Route path="/buku/:slug" element={<BookDetail />} />
          </Routes>
        </Container>
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App
