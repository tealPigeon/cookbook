import css from "./Article.module.css"
import React,{Fragment} from 'react';
import ReactStars from "react-rating-stars-component";
// import {NavLink} from "react-router-dom";
import img1 from "./photo_2021-11-01_03-57-07.jpg";
import Link from "next/link"

const Article = (props) =>{

    const firstExample = {
        size: 34,
        value: props.rating,
        edit: false,
        isHalf: true,
        // color: "#ffd700",
        // emptyIcon: <i className="far fa-star"/>,
        // halfIcon: <i className="fa fa-star-half-alt" />,
        // filledIcon: <i className="fa fa-star" />,
        activeColor: "#ffd700"
    };

    // const image = props.image;
    return (
        <Link href={props.href}>

            <div className={css.article}>
                    <div className={css.image}  style={{backgroundImage:'url("'+ props.image+'")'}}></div>

                    <div className={css.wrapper_article}>
                        <div className={css.article_title}>{props.title}
                            <div className={css.star}>
                                {/*<StarRating/>*/}
                                <ReactStars {...firstExample} />
                            </div>
                        </div>
                  
                        
                        <div className={css.article_description}>{props.text}
                        <Link href="/readmore">
                        <a style={{ cursor: 'pointer'}}  id="main" className={css.read_more}>  Читать далее...
                            </a>
                            </Link>
                        </div>

                    </div>
                </div>
        </Link>

    );
}

export default Article;