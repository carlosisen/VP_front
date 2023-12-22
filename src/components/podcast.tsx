import Titles from "./general/titles";
import text from "@src/constants/texts.json";
import "@styles/podcast.css";
const Podcast = () => {
  const title = text[0].spanish.mainPage.podcast.title;
  return (
    <div className="podcast">
      <Titles title={title} color="dark" size="little" icon="mphone" />
      <iframe
        style={{ width: "100%", height: "28rem" }}
        className="main__iframe"
        src="https://www.ivoox.com/player_ej_102722240_6_1.html?c1=5b4b98"
        loading="lazy"
        allowFullScreen={false}></iframe>
    </div>
  );
};
export default Podcast;
