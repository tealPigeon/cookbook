
import React from 'react';
import css from "./MainScreen/Content/Content.module.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CookingItem from "./components/CookingItem/CookingItem";
import CookingDishes from "../public/data/CookingDishes.json";

function Favourites() {
    return (
        <div>
            <Header/>
            <div className={css.content}>
                <p className={css.content_title}>Готовится</p>
                {
                    CookingDishes.map((el) =>
                        {
                            return <CookingItem key={el.id} {...el }/>
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