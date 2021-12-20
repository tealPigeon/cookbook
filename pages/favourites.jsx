
import React,{Fragment} from 'react';
import css from "./MainScreen/Content/Content.module.css"
import FavouritesItem from "./Favourites/FavouritesItem/FavouritesItem";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Link from "next/link";
import Authorization from "./Authorization/Authorization";

// const favourites = [
//     {id:1, title:'Пельмени', href: '/recipe', image:"https://mospravda.ru/wp-content/uploads/2021/09/6024066639.jpg", rating:5, text:"Нежный, легкий и очень вкусный супчик!!! Отлично подойдет для деток. Хотя многие детки не любят почему-то брокколи. Но моя доченька слопала с удовольствием! И мы с мужем тоже!"},
//     {id:2, title:'Пельмени по-флопски', href: '/recipe', image:"https://31tv.ru/wp-content/uploads/2021/08/pell.jpg", rating:2, text:"Нежный, легкий и очень вкусный супчик!!! Отлично подойдет для деток. Хотя многие детки не любят почему-то брокколи. Но моя доченька слопала с удовольствием! И мы с мужем тоже!"},
// ]
import favourites from "/public/data/FavouritesData.json"

function Favourites() {
    return (
        <div>
            <Header/>
            <div className={css.content}>
                <p className={css.content_title}>Избранное</p>

                {
                    favourites.map((el) =>
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