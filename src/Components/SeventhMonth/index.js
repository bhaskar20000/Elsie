import "./index.css";
import ImgCard from "../ImgCard";
import seven1 from "../../Pictures/7thMonth/seven1.jpg";

const imagesList = [
  {
    id: 1,
    image: seven1,
    time: "15 Mar 2025",
  },
];

const SeventhMonth = () => {
  return (
    <div className="seventh-outer-container">
      <h1 className="seventh-heading">Seventh Month</h1>
      <div>
        {imagesList.map((eachitem) => (
          <ImgCard key={eachitem.id} eachimage={eachitem} />
        ))}
      </div>
    </div>
  );
};

export default SeventhMonth;
