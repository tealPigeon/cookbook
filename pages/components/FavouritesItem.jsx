import css from "../../styles/FavouritesItem.module.css"
import React from 'react';
import ReactStars from "react-rating-stars-component";
import Link from "next/link"

const FavouritesItem = (props) =>{

    const firstExample = {
        size: 34,
        value: props.rating,
        edit: false,
        isHalf: true,
        lineHeight:1,
        marginTop:0,
        paddingTop:0,
        // color: "#ffd700",
        // emptyIcon: <i className="far fa-star"/>,
        // halfIcon: <i className="fa fa-star-half-alt" />,
        // filledIcon: <i className="fa fa-star" />,
        activeColor: "#ffd700"
    };

    return (
        <Link href={props.href}>
            <div className={css.article}>
                <div className={css.image}  style={{backgroundImage:'url("'+ props.image+'")'}}></div>
                <div className={css.wrapper_article}>
                    <div className={css.article_title}>{props.title}</div>
                    <div className={css.star}> <ReactStars {...firstExample} />
                        <button className={css.close} ></button>
                    </div>
                    <div className={css.article_description}>{props.text}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default FavouritesItem;