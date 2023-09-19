import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const onSubmit = async (data) => {
    const response = await searchImages(data);
    setImages(response);
    console.log(response);
  }
  return (<>
    <SearchBar onSubmit={onSubmit} />
    <ImageList images={images}/>
  </>);
}

export default App;
