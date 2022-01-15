import css from "../../styles/RateDish.module.css"
import React, {Fragment, useState} from 'react';
// import StarRating from "./StarRating";
import {FaStar} from "react-icons/fa";
import Router from "next/router";

let rate = null;
    const RateDish =(props) =>{
        const [isOpen, setOpen] = useState(true);
        const [rating, setRating] = useState(null);
        let myStorage = window.localStorage.getItem('token');
        const makeRate = async()=>{
            const res = await fetch(`http://13.38.23.154:8000/api/user-dish/${props.dish_id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Token ${myStorage}`
                    }});
            const userData = await res.json();
            if(!(userData.loved == undefined))
            {try {
                await fetch(`http://13.38.23.154:8000/api/user-dish/${props.dish_id}`, {
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        "Accept": "application/json",
                        Authorization: `Token ${myStorage}`
                    },
                    method: "PUT",
                    body: JSON.stringify({
                        relation: {
                            rate: rate
                        }
                    })
                })
                setTimeout(close, 200);
                Router.reload(window.location.pathname)}

            catch (err) {
                console.log(err)
            }}
            else    {try {
                await fetch(`http://13.38.23.154:8000/api/user-dish/${props.dish_id}`, {
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        "Accept": "application/json",
                        Authorization: `Token ${myStorage}`
                    },
                    method: "POST",
                    body: JSON.stringify({
                        relation: {
                            rate: rate
                        }
                    })
                })
                setTimeout(close, 200);
                Router.reload(window.location.pathname)}

            catch (err) {
                console.log(err)
            }}
        }

        {

        }
        const close = async()=>{
            setOpen(false)
        }
        return (
            isOpen ?
                <Fragment>
                    <div className={css.hidden}></div>
                    <div className={css.background_block}>
                        <div className={css.authorization_lightbox}>

                            <div className={css.title}>Оцените блюдо</div>
                            <div className={css.close} onClick={()=>setOpen(false)}></div>
                            <div className={css.text}>
                                Благодарим за использование нашего сервиса. Оцените, пожалуйста, приготовленное блюдо, чтобы остальным пользователям было легче сделать выбор
                            </div>
                            <div className={css.star}>
                                {
                                    <div>
                                    {[...Array(5)].map((star, i) => {
                                        const ratingValue =i+1;
                                        return(
                                            <Fragment div key={i}>
                                                <label>
                                                    <input
                                                        className="star_input"
                                                        type="radio"
                                                        name="rating"
                                                        value={ratingValue}
                                                        display="none"
                                                        onClick={()=> {
                                                            setRating(ratingValue);
                                                            rate=ratingValue;
                                                            console.log(ratingValue);
                                                            setTimeout(makeRate, 100);}
                                                        }/>
                                                    <FaStar className="star" color={ratingValue <= rating ? "#ffc107":"#e4e5e9"} size={100}/>
                                                </label>
                                            </Fragment>

                                        )
                                    })}
                                    </div>}
                            </div>
                        </div></div>

                </Fragment>: null
        );

}


export default RateDish;