import "./index.css";
import ImgCard from "../ImgCard";
import sixth1 from "../../Pictures/6thMonth/sixth1.jpg";

const imagesList = [
  {
    id: 1,
    image: sixth1,
    time: "15 Feb 2024",
  },
];

const SixthMonth = () => {
  return (
    <div className="sixth-outer-container">
      <h1 className="sixth-heading">Sixth Month</h1>
      <div>
        {imagesList.map((eachitem) => (
          <ImgCard key={eachitem.id} eachimage={eachitem} />
        ))}
      </div>
    </div>
  );
};

export default SixthMonth;
