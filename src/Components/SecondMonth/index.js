import s1 from "../../Pictures/2ndMonth/s1.jpg";
import ImgCard from "../ImgCard";
import "./index.css";

const imagesList = [
  {
    id: 1,
    image: s1,
    time: "15 Oct 2024",
  },
];

const SecondMonth = () => {
  return (
    <div className="second-outer-container">
      <h1 className="second-heading">Second Month</h1>
      <div>
        {imagesList.map((eachitem) => (
          <ImgCard key={eachitem.id} eachimage={eachitem} />
        ))}
      </div>
    </div>
  );
};

export default SecondMonth;
