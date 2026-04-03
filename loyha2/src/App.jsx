import './App.css'
import { useState } from 'react'
import Navbar from './pages/navbar'
import Section1 from './pages/section1'
import Category from './pages/Category'
import FeaturedItem from './items/featured_item'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Navbar />
        <Section1 />
        <Category />
        <FeaturedItem />
       </section>
    </>
  )
}

export default App
