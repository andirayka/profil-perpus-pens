import Navbar from '@/components/Navbar'
import Activity from '@/pages/user/Activity'
import Borrowing from '@/pages/user/Borrowing'
import Home from '@/pages/user/Home'
import { navbarLink } from '@/utils/constants'
import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Navbar links={navbarLink} />

      <div style={{ padding: 50 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jadwal-kegiatan" element={<Activity />} />
          <Route path="/peminjaman" element={<Borrowing />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
