import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { useEffect } from "react"
import Favorites from "./components/Favorites"
import Home from "./components/Home"
// import { Home } from "lucide-react"

function App() {
  let dir = "rtl"
  useEffect(() => {
    document.documentElement.setAttribute("dir", dir)
  }, [])

  return (
  <div className="min-h-screen bg-gray-100 ">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="favorites" element={<Favorites/>}/>
      <Route path="/" element={<Favorites/>}/>
    </Routes>
  </div>
  )
}

export default App