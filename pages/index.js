import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "./components/Header/Header";
import Content from "./MainScreen/Content/Content";
import Footer from "./components/Footer/Footer";
import React from "react";
import Slider from "./components/Slider/Slider";

export default function Home() {
  return (<div>
    <Header name={"Войти"}/>
    <Slider/>
    <Content/>
    <Footer/>
  </div>
  )
}
