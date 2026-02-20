import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { lazy, Suspense } from "react"
import './App.css'

// ✅ Proper delay wrapper
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const Home = lazy(async () => {
  await delay(3000)
  return import('./components/home.jsx')
})

const About = lazy(async () => {
  await delay(3000)
  return import('./components/about.jsx')
})

const Profile = lazy(async () => {
  await delay(3000)
  return import('./components/profile.jsx')
})

function App() {
  return (
    <BrowserRouter>

      <nav>
        <button><Link to="/home">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/profile">Profile</Link></button>
      </nav>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  )
}

export default App