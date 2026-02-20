//FOR LAZY LOADING 

import { useState, lazy, Suspense } from 'react'
import './App.css'

// 👇 Add delay wrapper here
const Dash = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./components/Dashboard.jsx'))
    }, 3000) // 3 seconds delay
  })
)

function App() {
  const [count, setCount] = useState(0)
  const [showDash, setShowDash] = useState(false)

  return (
    <>
      <div>
        {/* Button to load dashboard */}
        <button onClick={() => setShowDash(true)}>
          Load Dashboard
        </button>
      </div>

      {/* Suspense wrapper REQUIRED */}
      {showDash && (
        <Suspense fallback={<p>Loading Dashboard...</p>}>
          <Dash />
        </Suspense>
      )}
    </>
  )
}

export default App

// FOR SIMPLE LOADING
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Dashboard from './components/Dashboard'

// function Home() {
//   return (
//     <>
//       <h1>Hi, I’m Himanshi</h1>
//       <h2>A passionate Full-Stack Developer in the making</h2>
//     </>
//   )
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App