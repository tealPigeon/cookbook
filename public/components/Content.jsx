import css from "../../styles/Content.module.css"
import React,{Fragment} from 'react';
import Article from "./Article";
import PopularDishes from "/public/data/PopularDishes"

const Content = (props) =>{

    return (
            <div className={css.content}>
            <p className={css.content_title}>{props.title}</p>
                {
                    props.data.map((el) => {
                        return <Article key={el.id} {...el }/>
                    })
                }
            </div>
    );
}

export default Content;
