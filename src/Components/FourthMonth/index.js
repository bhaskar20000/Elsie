import ImgCard from "../ImgCard";
import f1 from "../../Pictures/4thMonth/f1.jpg";
import "./index.css";

const imagesList = [
  {
    id: 1,
    image: f1,
    time: "15 Dec 2024",
  },
];

const FourthMonth = () => {
  return (
    <div className="outer-container">
      <h1 className="fourth-heading">Fourth Month</h1>
      <div>
        {imagesList.map((eachitem) => (
          <ImgCard key={eachitem.id} eachimage={eachitem} />
        ))}
      </div>
    </div>
  );
};

export default FourthMonth;
