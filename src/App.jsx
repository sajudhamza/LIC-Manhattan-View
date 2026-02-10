import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RoomsListPage from './pages/RoomsListPage'
import RoomDetailPage from './pages/RoomDetailPage'
import ExplorePage from './pages/ExplorePage'
import ExploreCategoryPage from './pages/ExploreCategoryPage'
import GalleryPage from './pages/GalleryPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsListPage />} />
          <Route path="/rooms/:slug" element={<RoomDetailPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/explore/:slug" element={<ExploreCategoryPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
