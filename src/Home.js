import { useEffect, useState } from "react";
import "./Home.css";
import bg from "./assets/bg.jpg";
import aboutBg from "./assets/about-bg.jpg";

export default function Home() {
  const imageLists = [
    {
      id: 1,
      name: "bg",
      src: bg,
      caption: "THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY",
    },
    {
      id: 2,
      name: "about-bg",
      src: aboutBg,
      caption: "WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM",
    },
  ];

  const [idImg, setIdImg] = useState(0);
  const [image, setImage] = useState(imageLists[idImg]);

  const changeId = (num) => {
    if (idImg === 0 && num < 0) {
      setIdImg(imageLists.length - 1);
    } else if (idImg === imageLists.length - 1 && num > 0) {
      setIdImg(0);
    } else {
      setIdImg(idImg + num);
    }
  };

  useEffect(() => {
    setImage(imageLists[idImg]);
  }, [idImg]);

  return (
    <div className="home">
      <img src={image.src} />
      <button className="prev" onClick={() => changeId(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => changeId(1)}>
        &#10095;
      </button>
      <div className="caption">{image.caption}</div>
      <div className="dot">
        {imageLists.map((item, idx) => {
          return (
            <div className={idImg == idx ? "active" : ""} key={idx}>
              <button onClick={() => setIdImg(idx)}></button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
