
import React,{Fragment} from 'react';
import css from './ShoppingList/ShoppingList.module.css'
import ReactStars from "react-rating-stars-component";
import img1 from "./MainScreen/Content/Article/photo_2021-11-01_03-57-07.jpg";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function Shopping()
{
    return(
        <Fragment>
            <Header/>

            <div className={css.content}>
                <div className={css.title}>Список покупок</div>


                <div className={css.artical}>
                    <div className={css.image}  style={{backgroundImage:'url("https://kamelena.ru/recipes/image/600/636/f636-1.jpg")'}}></div>

                    <div className={css.wrapper_artical}>
                        <div className={css.artical_title}>
                            Фруктовый десерт с кремом из маскарпоне
                        </div>


                        <div className={css.artical_description}>
                            <ul className={css.leaders}>
                                <li> <span><input type="checkbox"></input> Сыр «маскарпоне»</span> <span>250 г</span></li>
                                <li><span> <input type="checkbox"></input> Сливочное масло</span> <span>50 г</span></li>
                                <li><span> <input type="checkbox"></input> Сливки 20% жирности</span> <span>150 мл = 150 г</span></li>
                                <li><span> <input type="checkbox"></input> Тростниковый сахар</span> <span>150 г</span></li>
                                <li><span> <input type="checkbox"></input> Зерна граната</span> <span>70 г</span></li>
                                <li><span> <input type="checkbox"></input> Апельсин</span> <span>100 г</span></li>
                                <li><span> <input type="checkbox"></input> Груша</span> <span>120 г</span></li>
                                <li><span><input type="checkbox"></input>  Яблоки</span> <span>280 г</span></li>
                            </ul>

                        </div>

                    </div>
                </div>

                <div className={css.artical}>
                    <div className={css.image}  style={{backgroundImage:'url("https://www.koolinar.ru/all_image/recipes/23/23687/recipe_04b21c0a-d131-4d95-a61b-48e931ca36f9_w450.jpg")'}}></div>

                    <div className={css.wrapper_artical}>
                        <div className={css.artical_title}>
                            Фруктовый десерт с кремом из маскарпоне
                        </div>


                        <div className={css.artical_description}>
                            <ul className={css.leaders}>

                                <li> <span><input type="checkbox"></input> Сыр «маскарпоне»</span> <span>250 г</span></li>
                                <li><span> <input type="checkbox"></input> Сливочное масло</span> <span>50 г</span></li>
                                <li><span> <input type="checkbox"></input> Сливки 20% жирности</span> <span>150 мл = 150 г</span></li>
                                <li><span> <input type="checkbox"></input> Тростниковый сахар</span> <span>150 г</span></li>
                                <li><span> <input type="checkbox"></input> Зерна граната</span> <span>70 г</span></li>
                                <li><span> <input type="checkbox"></input> Апельсин</span> <span>100 г</span></li>
                                <li><span> <input type="checkbox"></input> Груша</span> <span>120 г</span></li>
                                <li><span> <input type="checkbox"></input> Яблоки</span> <span>280 г</span></li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>


            <Footer/>
        </Fragment>
    )
}

export default Shopping;