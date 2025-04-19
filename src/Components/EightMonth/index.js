import "./index.css";
import ImgCard from "../ImgCard";
import eigth1 from "../../Pictures/8thMonth/eigth1.jpg";

const imagesList = [
  {
    id: 1,
    image: eigth1,
    time: "15 Apr 2025",
  },
];

const EightMonth = () => {
  return (
    <div className="eight-outer-container">
      <h1 className="eigth-heading">Eight Month</h1>
      <div>
        {imagesList.map((eachitem) => (
          <ImgCard key={eachitem.id} eachimage={eachitem} />
        ))}
      </div>
    </div>
  );
};

export default EightMonth;
