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



//
// import Slider from "./components/Slider/Slider";
// import Content from "./MainScreen/Content/Content";
//
// // import RateDish from "../RateDish/RateDish"

// import Header from "./components/Header/Header"
// import Footer from "./components/Footer/Footer";
// import RateDish from "./RateDish/RateDish";
// import Authorization from "./Authorization/Authorization";
//
// const MainScreen = () => {
//   return (
//       <div>
//         <Header/>
//         <Slider/>
//         <Content/>
//         {/*<Authorization/>*/}
//         {/*<RateDish/>*/}
//         <Footer/>
//       </div>
//   );
// }
//
// export default MainScreen;
