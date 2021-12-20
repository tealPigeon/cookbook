
import React,{Fragment} from 'react';
import css from './ShoppingList/ShoppingList.module.css'
import ReactStars from "react-rating-stars-component";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShoppingListData from "/public/data/ShoppingListData.json"

function Shopping()
{
    return(
        <Fragment>
            <Header/>
            <div className={css.content}>
                <div className={css.title}>Список покупок</div>
                {ShoppingListData.map((item, index)=>{
                    return (
                        <div className={css.artical}>
                            <div className={css.image}  style={{backgroundImage:'url(' +item.image+')'}}></div>
                            <div className={css.wrapper_artical}>
                                <div className={css.artical_title}>
                                    {item.title}
                                </div>
                                <div className={css.artical_description}>
                                    <ul className={css.leaders}>
                                        {item.ingredients.map((ingredient, index)=>{
                                            return <li><span><input type="checkbox"></input>{ingredient.name}</span> <span>{ingredient.value}</span></li>})}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Shopping;