import "./index.css";
import fifth1 from "../../Pictures/5thMonth/fifth1.jpg";
import ImgCard from "../ImgCard";

const imagesList = [
  {
    id: 1,
    image: fifth1,
    time: "15 Jan 2024",
  },
];

const FifthMonth = () => {
  return (
    <div className="fifth-outer-container">
      <h1 className="fifth-heading">Fifth Month</h1>
      <div>
        {imagesList.map((eachitem) => (
          <ImgCard key={eachitem.id} eachimage={eachitem} />
        ))}
      </div>
    </div>
  );
};

export default FifthMonth;
