import { useState } from 'react'
import Navbar from './pages/navbar'
import Section1 from './pages/section1'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Navbar />
        
        <Section1 />
       </section>
    </>
  )
}

export default App
