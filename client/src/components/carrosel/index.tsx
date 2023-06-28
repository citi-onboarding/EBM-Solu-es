import React from "react";
import Slider from "react-slick";
import { ImageCarrosel } from "../clientsimage";
import { imagecarrosel } from "../../assets";
import { CarouselContainer } from "./styles";
import { setadireita } from "../../assets";
import { setaesquerda } from "../../assets";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  console.log("blabla")
  return (
    <img src={setadireita} className={className} onClick={onClick} style={{ ...style, display: "flex", height: "15px", width: "10px" }} />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  console.log("bla")
  return (
    <img src={setaesquerda} className={className} onClick={onClick} style={{ ...style, display: "flex", height: "15px", width: "10px", zIndex: 99, backgroud: "none" }} />
  );
}

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <div
        style={{
          padding: "10px",
        }}
      >
        <ul style={{ margin: "10px", display: "flex", gap: "4px", justifyContent: "center" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "31px",
          height: "7px",
          borderRadius: "6.5px",
          marginTop: "30px",
          background: "#D9D9D9",

        }}
      ></div>
    )
  };
  return (
    <CarouselContainer>
      <Slider {...settings}>
        <ImageCarrosel path={imagecarrosel} selected={true} width={528} height={341} />
        <ImageCarrosel path={imagecarrosel} selected={true} width={528} height={341} />
        <ImageCarrosel path={imagecarrosel} selected={true} width={528} height={341} />
      </Slider>
    </CarouselContainer>
  );
}