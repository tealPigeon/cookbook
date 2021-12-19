// import  "./Slider.css"
import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link"
import Slide from "./Slide/Slide";
import tages from "../../../public/tags";

// const tages = [
//     {id:1, title:'Супы', link: '/working', image:"https://e3.edimdoma.ru/data/recipes/0006/9951/69951-ed4_wide.jpg?1628808148"},
//     {id:2, title:'Салаты', link: '/working', image:"https://lafoy.ru/photo_l/foto-1605-0.jpg"},
//     {id:3, title:'Десерты', link: '/working', image:"https://art-lunch.ru/content/uploads/2020/08/chernichniy-tiramisu-000.jpg"},
//     {id:4, title:'Напитки', link: '/working', image:"https://www.edimdoma.ru/system/images/contents/0001/2877/wide/shutterstock_169781966.jpg?1622559476"},
//     {id:5, title:'Заготовки', link: '/working', image:"https://www.povarenok.ru/data/cache/2015apr/10/34/1102172_94298-300x0.jpg"},
//     {id:6, title:'Первое', link: '/working', image:"https://recepti-vmultivarke.ru/wp-content/uploads/2016/05/xarcho-06.jpg"},
//     {id:7, title:'Второе', link: '/working', image:"https://img.7dach.ru/image/600/05/52/71/2018/03/12/02effd.jpg"},
// ]

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
                tages.map((tag) => {
            return <Slide key={tag.id} link={tag.link} text={tag.title} image={tag.image}/>
                })
            }
        </Slider>
          <Link href="/allcategories"><a style={{ cursor: 'pointer'}}  id="allcategories" className={"sub_title"}>Все категории...</a></Link>
      </div>
    );
  }
}