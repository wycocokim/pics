import { useState } from "react";
import Searchbar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
