import "@styles/main.css";
import News from "@src/components/news";
import VideoReviewSection from "@src/components/videoReviewSection";
import advertisement from "@assets/images/banner_vp 1.png";
import Podcast from "@src/components/podcast";
const Main = () => {
  return (
    <div className="main">
      <div className="main__div__section">
        <News />
        <Podcast />
      </div>
      <div className="main__div__section">
        <VideoReviewSection />
        <div className="main__div--advertisement">
          <img
            className="main__img"
            alt="anuncio-camiseta 15€"
            src={advertisement}></img>
        </div>
      </div>
    </div>
  );
};
export default Main;
