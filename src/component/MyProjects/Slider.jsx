import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Project from "./Project";
import projectPic from '../../assets/images/Zefen.png'
import workingInProgress from '../../assets/images/work-in-progress-concept-stock-photography_csp21889500.webp'

function SliderComp() {
  let data = [
    {
      img: projectPic,
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: workingInProgress,
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: projectPic,
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: projectPic,
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: workingInProgress,
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];


var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerMode:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };
  let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Slider {...settings} >
        {sliderProject}
 
    </Slider>
  );
}

export default SliderComp;
