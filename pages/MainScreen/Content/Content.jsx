import css from "./Content.module.css"
import React,{Fragment} from 'react';
import Article from "./Article/Article";
import PopularDishes from "/public/data/PopularDishes"

const Content = (props) =>{
    return (
            <div className={css.content}>
            <p className={css.content_title}>Популярное</p>
                {
                    PopularDishes.map((el) => {
                        return <Article key={el.id} {...el }/>
                    })
                }
            </div>
    );
}

export default Content;
