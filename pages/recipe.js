import React from 'react';
import css from './Recipe/Recipe.module.css'
import favoritesLogo from "./Recipe/AddtoFavoritesIcon.svg";
import ReactStars from "react-rating-stars-component";
import Image from 'next/image';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RecipesData from "/public/data/RecipesData.json"
import RateDish from "./RateDish/RateDish";

let rateDishIsOpen = false;

function Recipe(props) {

    const firstExample = {
        size: 34,
        value: RecipesData.rating,
        func: ()=>{console.log(`Example 4: new value is ${RecipesData.rating}`);},
        edit: false,
        isHalf: true,
        // color: "#ffd700",
        // emptyIcon: <i className="far fa-star"/>,
        // halfIcon: <i className="fa fa-star-half-alt" />,
        // filledIcon: <i className="fa fa-star" />,
        activeColor: "#ffd700",
    };

    const [showRateDish, setRateDish] = React.useState(rateDishIsOpen)

    let i=0;

    return (
        <div className="App">
            <Header/>
            <div className={css.content}>
                <div className={css.title}>{RecipesData.title}</div>
                <div  onClick={() => {rateDishIsOpen=!rateDishIsOpen; setRateDish(rateDishIsOpen)} }>
                    <ReactStars {...firstExample} className={css.stars}/>
                </div>
                <p className={css.rating_title}>{RecipesData.rating} ({RecipesData.number_of_reviews})</p>
                <div className={css.description}>
                    <div className={css.image} style={{backgroundImage:'url("'+RecipesData.image+'")'}}>
                        <div className={css.calories}>
                            <h3 className={css.calories_count}>{RecipesData.kilocalories}</h3>
                        </div>
                    </div>
                    <div className={css.short_description}>{RecipesData.description}
                        <div className={css.start_cooking}>
                            <div className={css.logo_text}>Начать готовку</div>
                            <Image className={css.logo_image} src={require( "./Recipe/startCookingIcon.svg")} alt="me" width="40px" height="40px" />
                            {/*<div className={css.logo_image} style={{backgroundImage:'url("'+startCookingIcon+'")'}}></div>*/}
                        </div>
                        <div className={css.add_to_favorites} >
                            <div className={css.logo_image} style={{backgroundImage:'url("'+favoritesLogo+'")'}}></div>
                            <Image className={css.logo_image} src={require( "./Recipe/AddtoFavoritesIcon.svg")} alt="me" width="40px" height="40px" />
                            <div className={css.logo_text}>Добавить в избранное</div>
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
                                RecipesData.ingredients.map((ingredient, index) =>{
                                    return <li><span><input type="checkbox"></input>{ingredient.name}</span> <span>{ingredient.value}</span></li>
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

                    <div className={css.steps}>
                        {RecipesData.steps_with_images!=null ?  (
                            RecipesData.steps_with_images.map((step) =>
                                <div className={css.step}>
                                    <div className={css.step_image} style={{backgroundImage:'url("'+step.image+'")'}}>
                                        <div className={css.step_count}>
                                            <p>Шаг {i+1}</p>
                                        </div>
                                    </div>
                                    <div className={css.step_description}>{step.description}
                                    </div>
                                    {console.log(i++)}
                                </div>
                            )
                            ): null }



                    <div className={css.short_recipe}>
                        <ol>
                            <li>Приготовьте манговый слой. Сложите в чашу блендера два замороженных банана, манго, очищенные дольки апельсина и добавьте сахар. Взбейте до однородности. Разлейте по бокалам для подачи, заполняя их наполовину.
                                Если смузи получается слишком густым, порциями добавьте апельсиновый сок, чтобы добиться желаемой консистенции.
                            </li>
                            <li> Приготовьте ягодный слой. В вымытую чашу блендера сложите один замороженный банан, охлажденную чернику, ежевику, йогурт. Добавьте сахар. Взбейте до однородности. Аккуратно вылейте в емкости для подачи поверх мангового слоя.Если смузи получается слишком густым, порциями добавляйте молоко, чтобы добиться желаемой консистенции.
                            </li>
                            <li>Украсьте ягодами и мятой. Подавайте смузи охлажденным.</li>
                        </ol>
                    </div>
                    <button className={css.start_cooking_button}>Начать готовку!</button>
                </div>
            </div></div>
            <Footer/>
            </div>
    );
}

export default Recipe;