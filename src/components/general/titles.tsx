import "@styles/general/titles.css";
import { FaPlay } from "react-icons/fa";
import microSvg from "@assets/icons/microfono 1.svg";
type propsTitle = {
  color?: "light" | "dark";
  title: string;
  subtitle?: string;
  size?: "big" | "little";
  icon?: "mphone";
  link?: string;
};

const Titles = ({
  color = "light",
  title = "",
  subtitle = "",
  size = "big",
  icon,
  link = "",
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
      <Subtitle subtitle={subtitle} size={size} link={link} />
    </div>
  );
};
export default Titles;

const Subtitle = ({
  link = "",
  subtitle,
  size,
}: {
  link: propsTitle["link"];
  subtitle: propsTitle["subtitle"];
  size: propsTitle["size"];
}) => {
  if (link.length) {
    return (
      <a href={link ? link : ""} target="_blank">
        <h4 className={`title__h4 ${size}`}>
          {subtitle}
          <FaPlay className="title__icon" />
        </h4>
      </a>
    );
  }
  return (
    <h4 className={`title__h4 ${size}`}>
      {subtitle}
      <FaPlay className="title__icon" />
    </h4>
  );
};
