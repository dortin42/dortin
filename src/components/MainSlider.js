import React, { Component } from 'react';

// React Slick Slider
import Slider from "react-slick";

// Img
import VimMasterRace from "../assets/img/vim_master_race.png";

class MainSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={VimMasterRace} className='slider-imgs' alt="Vim Master Race"/>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    );
  }
}

export default MainSlider;
