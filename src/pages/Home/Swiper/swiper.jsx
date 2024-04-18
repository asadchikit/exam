import "swiper/css";
import React from "react";
import "swiper/css/pagination";
import "../../../assets/css/swipper.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <section>
      <div className="container">
        <Swiper
            spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="my_swiper"         
        >
          <SwiperSlide>
            <img
              className="swiper_img"
              src="https://newwind64.ru/wp-content/uploads/2018/08/%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B01.gif"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="swiper_img"
              src="https://avatars.dzeninfra.ru/get-zen_doc/3491078/pub_600ea01d27add74df6cf8f96_600ea0438dfe7b3b2dafd1f5/scale_1200"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="swiper_img"
              src="https://thumbs.dreamstime.com/z/row-bag-30-17409244.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="swiper_img"
              src="https://fiestavrn.ru/wp-content/uploads/2018/07/rasprodaja.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
