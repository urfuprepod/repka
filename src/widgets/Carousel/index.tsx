import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Card } from "antd";

type Props = {
  items: ICarouselElement[];
};

const Carousel: FC<Props> = (props) => {
  const { items } = props;

  return (
    <Swiper
      slidesPerView={3} // Показывает 3 элемента
      spaceBetween={20} // Отступ между элементами
      autoplay={{
        delay: 3000, // Задержка 3 сек
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      loop={true} // Бесконечная прокрутка
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <Card title={item.title}>
            {(Array.isArray(item.paragraphs)
              ? item.paragraphs
              : [item.paragraphs]
            ).map((el, idx) => (
              <p key={idx}>{el}</p>
            ))}
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
