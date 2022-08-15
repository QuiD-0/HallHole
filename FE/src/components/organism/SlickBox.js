import React, { Component } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PosterSize from "../atom/PosterSize";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

export default function SimpleSlider({ rooms = [] }) {
  const navigate = useNavigate();

  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const cardStyle = {
    maxWidth: 300,
    width: "100vw",
    marginX: "auto",
    maxHeight: 400,
    boxShadow: 3,
    borderRadius: 10,
  };

  function getSliderItems(rooms) {
    return rooms.map(room => {
      <Card sx={cardStyle}>
        <Box>
          <PosterSize
            size="large"
            src={room?.performance?.poster}
            onClick={() => navigate(`performancedetail/${room?.performance?.id}`)}
          ></PosterSize>
        </Box>
      </Card>;
    });
  }

  return (
    <Box>
      <Slider {...sliderSetting}>{getSliderItems(rooms)}</Slider>
    </Box>
  );
}
