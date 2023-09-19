import ImageShow from "./ImageShow";
import "./imageList.css";

function ImageList({ images }) {
  console.log(process.env.REACT_UNSPLASH_API);
  
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />
  });

  return (
    <div className="image-list">
      {renderedImages}
    </div>
  );
}

export default ImageList;
