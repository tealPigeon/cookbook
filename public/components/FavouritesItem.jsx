import css from "../../styles/FavouritesItem.module.css"
import React from 'react';
import ReactStars from "react-rating-stars-component";
import Link from "next/link"
import Router from "next/router";
import cookies from "js-cookie";

const FavouritesItem = (props) =>{


    const firstExample = {
        size: 34,
        value: props.rating,
        edit: false,
        isHalf: true,
        lineHeight:1,
        marginTop:0,
        paddingTop:0,
        activeColor: "#ffd700"
    };


    const removeFromFavorites = async()=> {
        await fetch(`http://13.38.23.154:8000/api/user-dish/${props.dish}`, {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Accept": "application/json",
                Authorization: `Token ${props.token}`
            },
            method: "PUT",
            body: JSON.stringify({
                relation: {
                    loved: "False",
                }
            })
        })
        console.log("PUT")
        await Router.push('/favourites')
    }

    return (
            <div className={css.article}>
                <div className={css.image}  style={{backgroundImage:'url("http://13.38.23.154:8000'+ props.web_image+'")'}}></div>
                <div className={css.wrapper_article}>
                    <div className={css.article_title}><Link href={`/recipes/${props.dish}`} passHref>{props.name}</Link></div>
                    <div className={css.star}> <ReactStars {...firstExample} />
                        <button className={css.close} onClick={()=>{removeFromFavorites()}}></button>
                    </div>
                    <div className={css.article_description}>{props.short_description}
                    </div>
                </div>
            </div>

    );
}

export default FavouritesItem;