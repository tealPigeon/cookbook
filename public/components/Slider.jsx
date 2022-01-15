// import  "./Slider.css"
import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link"
import Slide from "./Slide";
import TagsData from "/public/data/TagsData.json"

export default class SwipeToSlide extends Component {
  constructor(props) {
    super(props);
    this.props=props
    // console.log(props)
  }



  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "0px",
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
        {  console.log(this.props)}
        <Slider {...settings}>
            {
              this.props.data.map((tag) => {
            // return <Slide key={tag.id} link={tag.link} text={tag.name} image={tag.image}/>
                return <Slide id={tag.id} key={tag.id} text={tag.name} image={'http://13.38.23.154:8000'+tag.web_image}/>

              })
            }
        </Slider>
          <Link href="/all_categories" passHref><a style={{ cursor: 'pointer'}}  id="allcategories" className={"sub_title"}>Все категории...</a></Link>
      </div>
    );
  }
}