import styles from '../styles/Home.module.css'
import Header from "../public/components/Header";
import Content from "../public/components/Content";
import Footer from "../public/components/Footer";
import React,{Fragment} from "react";
import Slider from "../public/components/Slider";
import Registration from "../public/components/Registration";
import PopularDishes from "/public/data/PopularDishes"
import Link from "next/link";
import Timer from "../public/components/TimerDisplay";
import {parseCookies} from "nookies";
// import { URLSearchParams } from 'url';
//
export const getStaticProps = async () =>
{
    const dishes = await fetch("http://13.38.23.154:8000/api/preview");
    const category = await fetch("http://13.38.23.154:8000/api/category");

  const dishesData = await dishes.json();
  const categoryData = await category.json();
  return {
      props: {dishes:dishesData, category:categoryData}
  }
}

export default function Home({dishes, category}){
    const cookies = parseCookies()
    console.log(cookies.fromClient)

    const popular = dishes.sort(( a, b ) =>  a.rating - b.rating).slice(-5).reverse()
    console.log(popular)
  return (<Fragment>
      <Header/>
          <Slider data={category}/>
    {/*<Registration/>*/}
    <Content title={"Популярное"} data={popular}/>
          <Link href={"/allrecipes"} passHref><a className={styles.sub_title}>Все рецепты...</a></Link>
    <Footer/>
  </Fragment>
  )
}
