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

const App = () => {
  const [category, setCategory] = useState("general");
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <Navbar setCategory={setCategory} setLanguage={setLanguage} />
      <NewsBoard category={category} language={language} />
    </div>
  );
};

export default App;
