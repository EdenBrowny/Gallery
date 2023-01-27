import React from "react";
import { useState } from "react";
import "./Gallery.css";
import review1 from "../../Images/review1.jpeg";
import review3 from "../../Images/review3.jpeg";
import review4 from "../../Images/review4.jpeg";
import review5 from "../../Images/review5.jpeg";
import review6 from "../../Images/review6.jpeg";
import review8 from "../../Images/review8.jpeg";
import review7 from "../../Images/review7.jpeg";
import Rail from "../../Images/Rail.jpg";
import Road from "../../Images/Road.jpeg";
import Shine from "../../Images/Shine.jpeg";
// import CloseIcon from "@mui/icons-material/Close";
function Gallery() {
  let data = [
    {
      id: 1,
      imgSrc: Rail,
    },
    {
      id: 2,
      imgSrc: Road,
    },
    {
      id: 3,
      imgSrc: Shine,
    },
    {
      id: 4,
      imgSrc: review1,
    },
    {
      id: 5,
      imgSrc: review3,
    },
    {
      id: 6,
      imgSrc: review4,
    },
    {
      id: 7,
      imgSrc: review5,
    },
    {
      id: 8,
      imgSrc: review6,
    },
    {
      id: 9,
      imgSrc: review8,
    },
    {
      id: 10,
      imgSrc: review7,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImages = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        {/* <CloseIcon /> */}
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="picture"
              key={index}
              onClick={() => getImages(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
