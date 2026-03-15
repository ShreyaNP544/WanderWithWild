import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TrekDetails from './pages/TrekDetails'
import Archive from './pages/Archive'
import UserDetails from './pages/UserDetails'
import Community from './pages/Community'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trek/:id" element={<TrekDetails />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/user/:username" element={<UserDetails />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
