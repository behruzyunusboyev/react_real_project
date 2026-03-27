import { useState } from 'react'
import Navbar from './pages/navbar'
import Home from './pages/home'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div style={{fontSize:"30px", fontWeight:"bold", color:"white"}}>
          <Navbar />
          <Home />
        </div>
        </section>
    </>
  )
}

export default App
