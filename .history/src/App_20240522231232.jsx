import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"

const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <d>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </di>
  )
}

export default App
