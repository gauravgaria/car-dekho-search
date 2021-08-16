import React from "react";

const ImageList = (props) => {
  const carImages = props.images.map((image) => {
    return (
      <img
        src={image.urls.small}
        alt=""
        style={{ margin: "10px", border: "5px black" }}
      />
    );
  });

  return <div>{carImages}</div>;
};

export default ImageList;
