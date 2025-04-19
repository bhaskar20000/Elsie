import t1 from "../../Pictures/3rdMonth/t1.jpg";
import ImgCard from "../ImgCard";
import "./index.css";

const imagesList = [
  {
    id: 1,
    image: t1,
    time: "15 Nov 2024",
  },
];

const ThirdMonth = () => {
  return (
    <div className="third-outer-container">
      <h1 className="third-heading">Third Month</h1>
      <div>
        {imagesList.map((eachitem) => (
          <ImgCard key={eachitem.id} eachimage={eachitem} />
        ))}
      </div>
    </div>
  );
};

export default ThirdMonth;
