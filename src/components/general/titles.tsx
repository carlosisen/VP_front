import "@styles/general/titles.css";
import { FaPlay } from "react-icons/fa";
type propsTitle = {
  color?: "light" | "dark";
  title: string;
  subtitle: string;
  size?: "big" | "little";
};

const Titles = ({
  color = "light",
  title = "EXAMPLE",
  subtitle = "example",
  size = "big",
}: propsTitle) => {
  return (
    <div className="title">
      <h3 className={`title__h3 ${color}`}>{title}</h3>
      <h4 className={`title__h4 ${color} ${size}`}>
        {subtitle}
        <FaPlay className="title__icon" />
      </h4>
    </div>
  );
};
export default Titles;
