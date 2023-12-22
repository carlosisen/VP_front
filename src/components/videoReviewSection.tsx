import Titles from "./general/titles";
import texts from "@src/constants/texts.json";
import ContainerSection from "./general/containerSection";
import reviews from "@src/constants/reviews.json";
// import monchi from "@assets/images/monchito 1.png";
import "@styles/videoReviewSection.css";
const VideoReviewSection = () => {
  const videoTexts = texts[0].spanish.mainPage.video;
  const reviewTexts = texts[0].spanish.mainPage.reviews;

  return (
    <section className="video-ReviewSection">
      <ContainerSection>
        <Titles
          title={videoTexts.title}
          subtitle={videoTexts.subtitle}
          color="dark"
        />
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
        <Titles
          title={reviewTexts.title}
          subtitle={reviewTexts.subtitle}
          color="dark"
        />
        <div className="video-ReviewSection__div--rewiev">
          {reviews.slice(0, 2).map((review) => (
            <article className="videoReviewSection__article">
              <img
                className="videoReviewSection__image--new"
                src={review.image}></img>
              <h3 className="videoReviewSection__h3">{review.title}</h3>
              <p>
                {new Date().toLocaleDateString().slice(0, 10) +
                  " | " +
                  review.author}
              </p>
              <p className="videoReviewSection__p--content">{review.content}</p>
              <a
                className="videoReviewSection__anchor"
                href={review.src}
                target={"_blank"}
                rel={"noopener noreferrer"}>
                <span>Leer más</span>
              </a>
            </article>
          ))}
        </div>
      </ContainerSection>
    </section>
  );
};

export default VideoReviewSection;
