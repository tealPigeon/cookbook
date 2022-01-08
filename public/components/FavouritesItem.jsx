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
        <Link href={`/recipes/${props.id}`} passHref>
            <div className={css.article}>
                <div className={css.image}  style={{backgroundImage:'url("http://13.38.23.154:8000'+ props.web_image+'")'}}></div>
                <div className={css.wrapper_article}>
                    <div className={css.article_title}>{props.name}</div>
                    <div className={css.star}> <ReactStars {...firstExample} />
                        <button className={css.close} ></button>
                    </div>
                    <div className={css.article_description}>{props.short_description}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default FavouritesItem;