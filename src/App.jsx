import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { useEffect } from "react"
import Favorites from "./components/Favorites"
import Home from "./components/Home"
import Footer from "./components/Footer"
// import { Home } from "lucide-react"

function App() {
  let dir = "rtl"
  useEffect(() => {
    document.documentElement.setAttribute("dir", dir)
  }, [])

  return (
  <div className="min-h-screen bg-white ">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="favorites" element={<Favorites/>}/>
    </Routes>
    <Footer/>
  </div>
  )
}

export default App