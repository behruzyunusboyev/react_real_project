import { useState } from 'react'
import Navbar from './pages/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Navbar />
       </section>
    </>
  )
}

export default App
