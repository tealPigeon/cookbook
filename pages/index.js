import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import React,{Fragment} from "react";
import Slider from "./components/Slider";
import Registration from "./components/Registration";
import PopularDishes from "/public/data/PopularDishes"
import Link from "next/link";

export default function Home() {
  return (<Fragment>
    <Header name={"Войти"}/>
    <Slider/>
    {/*<Registration/>*/}
    <Content title={"Популярное"} data={PopularDishes}/>
        <Link href={"/allrecipes"}><a className={styles.sub_title}>Все рецепты...</a></Link>
    <Footer/>
  </Fragment>
  )
}
