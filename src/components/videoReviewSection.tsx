import Titles from "./general/titles";
import texts from "@src/constants/texts.json";
import ContainerSection from "./general/containerSection";
// import monchi from "@assets/images/monchito 1.png";
import "@styles/videoSection.css";
const VideoReviewSection = () => {
  const videoTexts = texts[0].spanish.mainPage.video;
  const reviewTexts = texts[0].spanish.mainPage.reviews;

  return (
    <section className="video-ReviewSection">
      <ContainerSection>
        <Titles title={videoTexts.title} subtitle={videoTexts.subtitle} />
        <div className="video-ReviewSection__div--video">
          <iframe
            width={"100%"}
            height={"100%"}
            loading="lazy"
            src="https://www.youtube.com/embed/SeNm4dfVuWE?si=Fbg2aK9qR1ITSRtKc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </ContainerSection>
      <ContainerSection>
        <Titles title={reviewTexts.title} subtitle={reviewTexts.subtitle} />
      </ContainerSection>
    </section>
  );
};

export default VideoReviewSection;
