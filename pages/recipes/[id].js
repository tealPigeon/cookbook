import React from 'react';
import css from '/styles/Recipe.module.css'
import ReactStars from "react-rating-stars-component";
import Image from 'next/image';
import Footer from "../../public/components/Footer";
import Header from "../../public/components/Header";
// import RecipesData from "/public/data/RecipesData.json"
import RateDish from "../../public/components/RateDish";

export const getServerSideProps = async (context) =>
{
    // console.log(context.params.id)
    const {id}=context.params;
    // const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const response = await fetch(`http://13.38.23.154:8000/api/dish/${id}`);

    const data = await response.json();
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contact: data },
    }
}

function Recipe(props) {

    const firstExample = {
        size: 34,
        value: props.contact.rating,
        func: ()=>{console.log(`Example 4: new value is ${props.contact.rating}`);},
        edit: false,
        isHalf: true,
        // color: "#ffd700",
        // emptyIcon: <i className="far fa-star"/>,
        // halfIcon: <i className="fa fa-star-half-alt" />,
        // filledIcon: <i className="fa fa-star" />,
        activeColor: "#ffd700",
    };
    let rateDishIsOpen = false;
console.log(props);
    const [showRateDish, setRateDish] = React.useState(rateDishIsOpen)
    // let names = props.contact.ingredients_name.split(", ")

    let i=0;

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
                        <div className={css.calories}>
                            <h3 className={css.calories_count}>{props.contact.calorie}</h3>
                        </div>
                    </div>
                    <div className={css.short_description}>{props.contact.description}
                        <div className={css.start_cooking}>
                            <div className={css.logo_text}>Добавить ингредиенты <br/> в список покупок</div>
                            <Image className={css.logo_image} src={require( "/public/logo_shopping.svg")} alt="me" width="40px" height="40px" />
                            {/*<div className={css.logo_image} style={{backgroundImage:'url("'+startCookingIcon+'")'}}></div>*/}
                        </div>
                        <div className={css.add_to_favorites} >
                            <Image className={css.logo_image} src={require( "/public/AddtoFavoritesIcon.svg")} alt="me" width="40px" height="40px" />
                            <div className={css.logo_text_favorite}>Добавить в избранное</div>
                        </div>
                    </div>
                </div>
                {
                    showRateDish ? rateDishIsOpen=!rateDishIsOpen && <RateDish/>: null
                }
                <div className={css.ingredients}>  <div className={css.title}>Ингредиенты </div>

                    <div className={css.portion}>
                        <div className={css.sub_title}>
                            <span>Для основного блюда:</span>
                            {/*<span className={css.portion_count}>Порции     <span>-</span>   1   <span>+</span> </span>*/}
                        </div>
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
                    <div className={css.sub_title}>Подготовления</div>
                    <div className={css.step_by_step_text}>Помойте фрукты. Подготовьте все необходимые ингредиенты.</div>
                    <div className={css.sub_title}>Готовка</div>

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