import css from "../../styles/Content.module.css"
import React,{Fragment} from 'react';
import Article from "./Article";
import PopularDishes from "/public/data/PopularDishes"

const Content = (props) =>{

    let data =Array.from(props.data);
    console.log(data);
    return (
            <div className={css.content}>
            <p className={css.content_title}>{props.title}</p>
                {
                    data.map((el) => {
                        return <Article key={el.id} {...el }/>
                    })
                }
            </div>
    );
}

export default Content;
