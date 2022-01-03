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

export default function Home() {
  return (<Fragment>
        {/*<Timer/>*/}
    <Header name={"Войти"}/>
    <Slider/>
    {/*<Registration/>*/}
    <Content title={"Популярное"} data={PopularDishes}/>
        <Link href={"/allrecipes"} passHref><a className={styles.sub_title}>Все рецепты...</a></Link>
    <Footer/>
  </Fragment>
  )
}
