import Titles from "./general/titles";
import text from "@src/constants/texts.json";
import "@styles/podcast.css";
const Podcast = () => {
  const title = text[0].spanish.mainPage.podcast.title;
  return (
    <div className="podcast">
      <Titles title={title} color="dark" size="little" icon="mphone" />
      <iframe
        style={{ width: "100%", height: "26rem", borderRadius: "10px" }}
        className="main__iframe"
        src="https://www.ivoox.com/player_es_podcast_1507368_zp_1.html"
        // loading="lazy"
        scrolling={"false"}
        allowFullScreen={false}></iframe>
      {/* <iframe
        id="button_subscribe_ivoox1507368"
        src="https://www.ivoox.com/_p3_1507368_1.html?c1=ff6600&c2=ffffff&c3=000000&utm_source=embed_subscription_new&utm_medium=download&utm_campaign=new_embeds"
        scrolling="no"
        height="111"
        frameBorder="0"
        allowFullScreen={false}
        style={{ width: "auto", borderRadius: "10px", marginTop: "1rem" }}
        // loading="lazy"
      ></iframe> */}
    </div>
  );
};
export default Podcast;
