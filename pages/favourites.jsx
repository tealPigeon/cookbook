import React,{Fragment} from 'react';
import css from "../styles/Content.module.css"
import FavouritesItem from "../public/components/FavouritesItem";
import Header from "../public/components/Header";
import Footer from "../public/components/Footer";
import Link from "next/link";
import Authorization from "../public/components/Authorization";

// const favourites = [
//     {id:1, title:'Пельмени', href: '/recipe', image:"https://mospravda.ru/wp-content/uploads/2021/09/6024066639.jpg", rating:5, text:"Нежный, легкий и очень вкусный супчик!!! Отлично подойдет для деток. Хотя многие детки не любят почему-то брокколи. Но моя доченька слопала с удовольствием! И мы с мужем тоже!"},
//     {id:2, title:'Пельмени по-флопски', href: '/recipe', image:"https://31tv.ru/wp-content/uploads/2021/08/pell.jpg", rating:2, text:"Нежный, легкий и очень вкусный супчик!!! Отлично подойдет для деток. Хотя многие детки не любят почему-то брокколи. Но моя доченька слопала с удовольствием! И мы с мужем тоже!"},
// ]
import favourites from "/public/data/FavouritesData.json"
export const getStaticProps = async () =>
{
    const dishes = await fetch("http://13.38.23.154:8000/api/user-dish/loved/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        Authorization:"Token f61de83b7c70c7fdef53abb7354dda3e5ef993db"
        }
    });
    console.log(dishes)
    const dishesData = await dishes.json();
//   const tokenData = await res.json();
    return {
        props: {dishes:dishesData }
        // dishes:dishesData
    }
}

function Favourites({dishes}) {
console.log(dishes)
    return (
        <div>
            <Header/>
            <div className={css.content}>
                <p className={css.content_title}>Избранное</p>
                {
                    dishes.map((el) =>
                        {
                            return <FavouritesItem key={el.id} {...el }/>
                        }
                    )
                }

            </div>
            <Footer/>
        </div>
    );

}

export default Favourites;


// Favourites