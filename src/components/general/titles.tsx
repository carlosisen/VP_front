import "@styles/general/titles.css";
import { FaPlay } from "react-icons/fa";
import microSvg from "@assets/icons/microfono 1.svg";
type propsTitle = {
  color?: "light" | "dark";
  title: string;
  subtitle?: string;
  size?: "big" | "little";
  icon?: "mphone";
};

const Titles = ({
  color = "light",
  title = "",
  subtitle = "",
  size = "big",
  icon,
}: propsTitle) => {
  const microphoneSvg = icon === "mphone" && microSvg;
  return (
    <div className="title">
      <h3 className={`title__h3 ${color} ${size}`}>
        {" "}
        {microphoneSvg && (
          <img src={microphoneSvg} className="title__icon--svg"></img>
        )}
        {title}
      </h3>
      <h4 className={`title__h4 ${size}`}>
        {subtitle}
        <FaPlay className="title__icon" />
      </h4>
    </div>
  );
};
export default Titles;
