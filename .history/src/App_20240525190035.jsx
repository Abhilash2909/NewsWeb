// import { useState } from "react"
// import Navbar from "./Components/Navbar"
// import NewsBoard from "./Components/NewsBoard"

// const App = () => {
//   const [category, setCategory] = useState("general")
//   return (
//     <div>
//       <Navbar setCategory={setCategory}/>
//       <NewsBoard category={category}/>
//     </div>
//   )
// }

// export default App




import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const countries = [
  { value: 'in', label: 'India' },
  { value: 'us', label: 'United States' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
  // ... add more countries as needed
];

const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState('in'); // Initial country

  return (
    <div className="container">
      <Navbar setCategory={setCategory} setCountry={setCountry} />
      <NewsBoard category={category} country={country} />
    </div>
  );
};

export default App;
