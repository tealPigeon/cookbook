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
import { URLSearchParams } from 'url';
//
export const getStaticProps = async () =>
{
//   // const res = await fetch("http://13.38.23.154:8000/auth/token", {
//   //     method: "POST",
//   //     body: JSON.stringify({
//   //         username: "admin",
//   //         password: "M2$z^p5(* "
//   //     })
//   // });
//
//     const formData = new URLSearchParams();
//       formData.append("username", "admin");
//       formData.append("password", "M2$z^p5(* ");
//
//     const res = await fetch("http://13.38.23.154:8000/auth/token", {
//         method: "POST",
//         headers: {
//             contentType: 'application/json'
//         },
//         body: formData,
//     });
//
//   //   let formData = require('form-data');
//   //   formData.append("username", "userrrs");
//   //   formData.append("password", "test1234567");
//   //   let request = new XMLHttpRequest();
//   //   request.open("POST", "http://13.38.23.154:8000/auth/token");
//   //   request.send(formData);
//
//     // const res = await fetch("http://13.38.23.154:8000/auth/token", {
//     //     method: "POST",
//     //     password: "test1234567",
//     //     username: "userrrs",
//     //     headers: {
//     //        contentType: 'application/json'
//     //         },
//     //
//     // });
//
//     // const res = await fetch("http://13.38.23.154:8000/auth/token", {
//     //     method: "POST",
//     //     password:  "M2$z^p5(* ",
//     //     username: "admin"});
//
//
    const dishes = await fetch("http://13.38.23.154:8000/api/preview", {
        method: "GET",
        // headers: {
        //     "Content-Type": "application/json",
        // token:"f61de83b7c70c7fdef53abb7354dda3e5ef993db"
        // },
        // password: "M2$z^p5(* ",
        // username: "admin"
    });
//
    const category = await fetch("http://13.38.23.154:8000/api/category", {
        method: "GET",
    });
//     // const
//
//   // console.log(res);
  const dishesData = await dishes.json();
  const categoryData = await category.json();
//   const tokenData = await res.json();
  return {
      // props: {dishes:dishesData, category:categoryData, token:String(tokenData) }
    props: {dishes:dishesData, category:categoryData,}

  }
}

export default function Home({dishes, category, token}){

// export default function Home({dishes, category, token}){
//     React.useEffect(() => {
//         window.localStorage.setItem('token', String(token));
//         console.log(window.localStorage.getItem('token'))
//     })
//     let token1=String(
//         React.useEffect(() => {window.localStorage.getItem('token')}));
  console.log(dishes)
  return (<Fragment>
        {/*<Timer/>*/}
    <Header name={"Войти"}/>
    <Slider data={category}/>
    {/*<Registration/>*/}
    <Content title={"Популярное"} data={dishes}/>
          {/*{console.log(dishes)}*/}
          {/*{console.log(category)}*/}
          {
              // React.useEffect(() => {
              //     console.log(token1)
              // })
          }
          <Link href={"/allrecipes"} passHref><a className={styles.sub_title}>Все рецепты...</a></Link>
    <Footer/>
  </Fragment>
  )
}
