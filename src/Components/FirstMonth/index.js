import f1 from "../../Pictures/1stMonth/f1.jpg";
import ImgCard from "../ImgCard";
import "./index.css";

const f1imgs = [
  {
    image: f1,
    id: 1,
    time: "15 sep 2024",
  },
];

const FirstMonth = () => {
  return (
    <div className="first-outer-container">
      <h1 className="first-month-heading">First Month</h1>
      <div className="first-container-images-container">
        {f1imgs.map((eachitem) => (
          <ImgCard key={eachitem.id} eachimage={eachitem} />
        ))}
      </div>
    </div>
  );
};

export default FirstMonth;
