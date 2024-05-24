// import { useState } from "react"
// import Navbar from "./Components/Navbar"
// import NewsBoard from "./Components/NewsBoard"

// const App = () => {
//   const [category, setCategory] = useState("general")
//   return (
//     <>
//       <Navbar setCategory={setCategory}/>
//       <NewsBoard category={category}/>
//     </>
//   )
// }

// export default App



// import React from 'react';
import ReactDOM from 'react-dom';
import NewsBoard from './components/NewsBoard';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const App = () => {
    return (
        <div className="container">
            <NewsBoard category="technology" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
