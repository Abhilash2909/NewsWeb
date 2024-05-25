import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"

const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App



// import Navbar from './Navbar';
// import NewsBoard from './NewsBoard';

// function App() {
//   const [category, setCategory] = useState('trending');
//   const [country, setCountry] = useState('in'); // Initial country

//   // ... rest of your code

//   return (
//     <div className="container">
//       <Navbar setCategory={setCategory} setCountry={setCountry} />
//       <NewsBoard category={category} country={country} />
//     </div>
//   );
// }

// export default App;
