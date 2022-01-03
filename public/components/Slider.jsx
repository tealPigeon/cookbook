// import  "./Slider.css"
import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link"
import Slide from "./Slide";
import TagsData from "/public/data/TagsData.json"

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      zIndex: 1,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}`
        );
      }
    };
    return (
      <div>
        <Slider {...settings}>
            {
              TagsData.map((tag) => {
            return <Slide key={tag.id} link={tag.link} text={tag.title} image={tag.image}/>
                })
            }
        </Slider>
          <Link href="/all_categories"><a style={{ cursor: 'pointer'}}  id="allcategories" className={"sub_title"}>Все категории...</a></Link>
      </div>
    );
  }
}