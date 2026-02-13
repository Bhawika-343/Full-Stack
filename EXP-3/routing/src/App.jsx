import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {
  return (
    <h1>Home Page</h1>
  )
}
function Contact() {
  return (
    <h1>Contact Page</h1>
  )
}
function About() {
  return (
    <h1>About Page</h1>
  )
}
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/Contact" element = {<Contact/>}/>
          <Route path="/About" element = {<About/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App