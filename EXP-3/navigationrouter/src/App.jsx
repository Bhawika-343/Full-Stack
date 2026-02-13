import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Profile(){
  return (
    <div className="page profile">
      <marquee loop="5">
        <h1>Welcome to my Profile</h1>
      </marquee>
      <h1>Bhawika</h1>
      <h2>Full Stack Developer</h2>
    </div>
  )
}

function Dashboard(){
  return (
    <div className="page dashboard">
      <h1>Skills</h1>
      <h2>HTML</h2>
      <h2>CSS</h2>
      <h2>JavaScript</h2>
    </div>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="nav">
          <Link to="/profile"><button>Go to Profile</button></Link>
          <Link to="/dashboard"><button>Go to Dashboard</button></Link>
        </div>

        <Routes>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
