import React, {Fragment} from 'react';
import css from '/styles/Recipe.module.css'
import ReactStars from "react-rating-stars-component";
import Image from 'next/image';
import Footer from "../../public/components/Footer";
import Header from "../../public/components/Header";
// import RecipesData from "/public/data/RecipesData.json"
import RateDish from "../../public/components/RateDish";
import {destroyCookie, setCookie} from "nookies";
import Router from "next/router";
import cookies from 'js-cookie'

// let token =[]
export const getServerSideProps = async (context) =>
{

    // console.log(Cookies.get('token') )
    const {id}=context.params;
    const response = await fetch(`http://13.38.23.154:8000/api/dish/${id}`);


    const res = await fetch(`http://13.38.23.154:8000/api/user-dish/${id}`,
        {
            method: "GET",
            headers: {
                Authorization:`Token ${context.req.cookies.token}`
            }});

    const dish = await response.json();
    const userData = await res.json();
    if (!dish) {
        return {
            notFound: true,
            id:id
        }
    }

    return {
        props: { contact: dish,
            id:id,
            userDish:userData,
        },
    }
}

function Recipe(props) {
// console.log(token)

let rating = (props.userDish.rate == undefined) ? 0: props.userDish.rate
    let connectionExists = !(props.userDish.loved == undefined)
    let rateDishIsOpen = false;
    // console.log(props);
    const [showRateDish, setRateDish] = React.useState(rateDishIsOpen)

    const [rate,setRate] = React.useState(props.contact.rating)
    // let names = props.contact.ingredients_name.split(", ")
    let lovedData = props.userDish.loved?true:false
    const [loved, setLoved] = React.useState(lovedData)

    const firstExample = {
        size: 34,
        value:rate,
        func: ()=>{setRate(rate);},
        edit: false,
        isHalf: true,
        activeColor: "#ffd700",
    };

    const addToFavorites = async()=> {
        let strloved = loved?"False":"True"
        console.log(strloved)
        if(connectionExists) {
            await fetch(`http://13.38.23.154:8000/api/user-dish/${props.id}`, {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "Accept": "application/json",
                    Authorization: `Token ${cookies.get('token')}`
                },
                method: "PUT",
                body: JSON.stringify({
                    relation: {
                        loved: strloved,
                        rate: rating
                    }
                })
            })
            console.log("PUT")
        }
        else
        {
            await fetch(`http://13.38.23.154:8000/api/user-dish/${props.id}`, {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "Accept": "application/json",
                    Authorization: `Token ${cookies.get('token')}`
                },
                method: "POST",
                body: JSON.stringify({
                    relation: {
                        loved: strloved,
                        rate: rating
                    }
                })
            })
            console.log("POST")
        }
    }


console.log(props.contact)

    return (
        <div className="App">
            <Header/>
            <div className={css.content}>
                <div className={css.title}>{props.contact.name}</div>
                <div  onClick={() => {rateDishIsOpen=!rateDishIsOpen; setRateDish(rateDishIsOpen)} }>
                    <ReactStars {...firstExample} className={css.stars}/>
                </div>
                <p className={css.rating_title}>{props.contact.rating} ({props.contact.vote})</p>
                <div className={css.description}>

                    {/*<div className={css.image} style={{backgroundImage:'url("http://13.38.23.154:8000/api/dish/web_image")'}}>*/}
                    <div className={css.image} style={{backgroundImage:'url("http://13.38.23.154:8000'+ props.contact.web_image+'")'}}>
                        {
                            (props.contact.calorie.toString()=="?")?null:
                                <div className={css.calories}>
                                    <h3 className={css.calories_count}>{props.contact.calorie}</h3>
                                </div>
                        }

                    </div>

                    <div className={css.short_description}>{props.contact.description}
                        <div className={css.start_cooking}>

                            {/*<div className={css.logo_text}>Добавить ингредиенты <br/> в список покупок</div>*/}
                            {/*<Image className={css.logo_image} src={require( "/public/logo_shopping.svg")} alt="me" width="40px" height="40px" />*/}
                            {/*<div className={css.logo_image} style={{backgroundImage:'url("'+startCookingIcon+'")'}}></div>*/}
                        </div>
                        <div className={css.add_to_favorites} onClick={()=>{setLoved(!loved); addToFavorites()}} >
                            {
                                loved ? <Fragment><Image className={css.logo_image} src={require( "/public/Favorites.svg")} alt="me" width="40px" height="40px" /><div className={css.logo_text_favorite} >Убрать из избранного</div></Fragment> :
                                    <Fragment><Image className={css.logo_image} src={require("/public/AddtoFavoritesIcon.svg")} alt="me" width="40px" height="40px" /><div className={css.logo_text_favorite} >Добавить в избранное</div></Fragment>
                            }
                            {/*<Image className={css.logo_image} src={require( "/public/AddtoFavoritesIcon.svg")} alt="me" width="40px" height="40px" />*/}
                            {/*<Image className={css.logo_image} src={require( "/public/Favorites.svg")} alt="me" width="40px" height="40px" />*/}
                        </div>
                    </div>

                    <div className={css.source}>Источник: {props.contact.source}</div>
                </div>
                {
                    showRateDish ? rateDishIsOpen=!rateDishIsOpen && <RateDish dish_id={props.id}/>: null
                }
                <div className={css.ingredients}>  <div className={css.title}>Ингредиенты </div>

                    <div className={css.portion}>
                        <ul className={css.leaders}>
                            {
                                // console.log(names)
                                props.contact.ingredients_name.split(", ").map((ingredient, index) =>{
                                    return <li key={props.contact.id}><span>
                                        {/*<input type="checkbox"></input>*/}
                                        {ingredient}</span>
                                        <span>{props.contact.ingredients_number.split(", ")[index]}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                </div>
                <div className={css.step_by_step_recipe}>
                    <div className={css.title}>Пошаговый рецепт </div>
                    <div className={css}>

                        <div className={css.short_recipe}>
                            <ol>
                                {
                                    props.contact.recipe.split('\n').map((ingredient)=>
                                    {
                                        return <li key={props.contact.id}>{ingredient}</li>
                                    })
                                }
                            </ol>
                        </div>
                        {/*<button className={css.start_cooking_button}>Начать готовку!</button>*/}
                    </div>
                </div></div>
            <Footer/>
        </div>
    );
}

export default Recipe;