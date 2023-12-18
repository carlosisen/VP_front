import Titles from "./general/titles";
import texts from "@src/constants/texts.json";
import newsInfo from "@src/constants/news_exameple.json";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@styles/news.css";

const News = () => {
  const languageText = texts[0].spanish.mainPage.news;
  const news = newsInfo;

  return (
    <section className="news">
      <div className="news__div">
        <Titles title={languageText.title} subtitle={languageText.subtitle} />
        <div className="news__div--container">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            effect={"cards"}
            grabCursor={true}
            slidesPerView={1}
            initialSlide={0}
            breakpoints={{
              520: {
                slidesPerView: 2,
              },
              840: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper">
            {news.map((singleNew, index) => {
              return (
                <SwiperSlide key={`${index}-swip`}>
                  <a
                    className="news__anchor"
                    href="https://google.com"
                    target={"_blank"}
                    rel={"noopener noreferrer"}>
                    <img
                      className="news__image--new"
                      src={singleNew.image}></img>
                    <h3 className="news__h3">{singleNew.title}</h3>
                    <p>
                      {new Date().toLocaleDateString().slice(0, 10) +
                        "|" +
                        singleNew.author}
                    </p>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default News;
