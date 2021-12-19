
import React,{Fragment} from 'react';
import css from "./AllCategories.module.css"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import Slide from "./components/Slider/Slide/Slide";
import Slider from "react-slick";
import tages from "../public/tags";
import Link from "next/link"

// const tages = [
//     {id:1, title:'Супы', link: '/working', image:"https://e3.edimdoma.ru/data/recipes/0006/9951/69951-ed4_wide.jpg?1628808148"},
//     {id:2, title:'Салаты', link: '/working', image:"https://lafoy.ru/photo_l/foto-1605-0.jpg"},
//     {id:3, title:'Десерты', link: '/working', image:"https://art-lunch.ru/content/uploads/2020/08/chernichniy-tiramisu-000.jpg"},
//     {id:4, title:'Напитки', link: '/working', image:"https://www.edimdoma.ru/system/images/contents/0001/2877/wide/shutterstock_169781966.jpg?1622559476"},
//     {id:5, title:'Заготовки', link: '/working', image:"https://www.povarenok.ru/data/cache/2015apr/10/34/1102172_94298-300x0.jpg"},
//     {id:6, title:'Первое', link: '/working', image:"https://recepti-vmultivarke.ru/wp-content/uploads/2016/05/xarcho-06.jpg"},
//     {id:7, title:'Второе', link: '/working', image:"https://img.7dach.ru/image/600/05/52/71/2018/03/12/02effd.jpg"},
// ]

function AllCategories() {


    return (
   <Fragment>
       <Header/>

<div className={css.all}>
    <div className={css.all_categories}>
        {
            tages.map((tag) => {
                return <Link key={tag.id}  href={tag.link}  style={{ cursor: 'pointer'}}>
                    <div className={css.categories} style={{backgroundImage:'url("'+ tag.image+'")' }}>
                    <div className={css.tags_of_dishes}>
                        <p className={css.tag} style={{color:'black'}}>{tag.title}</p>
                    </div>
                </div>
                </Link>
            })
        }

    </div>
</div>
<Footer/>
   </Fragment>
     

    );
}

export default AllCategories;
