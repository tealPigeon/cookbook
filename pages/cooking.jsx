
import React from 'react';
import css from "./MainScreen/Content/Content.module.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CookingItem from "./components/CookingItem/CookingItem";

function Favourites() {
    return (
        <div>
            <Header/>
            <div className={css.content}>
                <p className={css.content_title}>Готовится</p>
            <CookingItem title='пельмени' image="https://mospravda.ru/wp-content/uploads/2021/09/6024066639.jpg" rating={5} text="Нежный, легкий и очень вкусный супчик!!! Отлично подойдет для деток. Хотя многие детки не любят почему-то брокколи. Но моя доченька слопала с удовольствием! И мы с мужем тоже!"
                     href="/"/>
            <CookingItem  title='пельмени по-флопски' image="https://31tv.ru/wp-content/uploads/2021/08/pell.jpg" rating={2} text="Нежный, легкий и очень вкусный супчик!!! Отлично подойдет для деток. Хотя многие детки не любят почему-то брокколи. Но моя доченька слопала с удовольствием! И мы с мужем тоже!"
                     href="/"/>
            </div>
            <Footer/>
        </div>
    );
}

export default Favourites;


// Favourites