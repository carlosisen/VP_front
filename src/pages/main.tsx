import "@styles/main.css";
import News from "@src/components/news";
import VideoReviewSection from "@src/components/videoReviewSection";
const Main = () => {
  return (
    <div className="main">
      <div className="main-div__section">
        <News />
        PÁGINA EN DESARROLLO, ESPERAD CON UNAS BUENAS PALOMITAS
      </div>
      <div className="main-div__section">
        <VideoReviewSection />
      </div>
    </div>
  );
};
export default Main;
