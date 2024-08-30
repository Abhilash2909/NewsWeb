import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  const searchArticles = (query) => {
    setSearchQuery(query); 
  };

  return (
    <div>
      <Navbar setCategory={setCategory} searchArticles={searchArticles} />
      <NewsBoard category={category} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
