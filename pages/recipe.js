 
import React,{Fragment} from 'react';
import css from './Recipe/Recipe.module.css'
import favoritesLogo from "./Recipe/AddtoFavoritesIcon.svg";
import ReactStars from "react-rating-stars-component";
import Image from 'next/image';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import RateDish from "./RateDish/RateDish";

let val = 3.5;
let count = 60;
const firstExample = {
    size: 34,
    value: val,
    func: ()=>{console.log(`Example 4: new value is ${val}`);},
    edit: false,
    isHalf: true,
    // color: "#ffd700",
    // emptyIcon: <i className="far fa-star"/>,
    // halfIcon: <i className="fa fa-star-half-alt" />,
    // filledIcon: <i className="fa fa-star" />,
    // activeColor: "#ffd700",

};

let rateDishIsOpen = false;

function Recipe() {

    const [showRateDish, setRateDish] = React.useState(rateDishIsOpen)

    let i=1;
    return (

        <div className="App">
            <Header/>
            <div className={css.content}>
                <div className={css.title}>Гавайский смузи с манго и черникой </div>
                <div  onClick={() => {rateDishIsOpen=!rateDishIsOpen; setRateDish(rateDishIsOpen)} }>
                    <ReactStars {...firstExample}  className={css.stars}/>
                </div>

                <p className={css.rating_title}>{val} ({count})</p>
                <div className={css.description}>
                    <div className={css.image} style={{backgroundImage:'url("https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9yZWNpcGVzLzQ5NjAzL3N0ZXBzLzRRZ2VxVi5qcGVn.jpg")'}}>

                        <div className={css.calories}>
                            <h3 className={css.calories_count}>67,55 ккал</h3>
                        </div>
                    </div>

                    <div className={css.short_description}>Лето — идеальное время для смузи. Он не только освежает и насыщает, но и сохраняет максимум пользы в продуктах. Гавайский смузи с манго и черникой состоит из двух слоев. Необычный внешний вид и яркий вкус сделают напиток главным на вашем столе.


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
                        <div className={css.sub_title}><span>Для основного блюда:</span> <span className={css.portion_count}>Порции     <span>-</span>   2   <span>+</span> </span></div>


                        <ul className={css.leaders}>

                            <li> <span><input type="checkbox"></input> Сыр «маскарпоне»</span> <span>250 г</span></li>
                            <li><span> <input type="checkbox"></input> Сливочное масло</span> <span>50 г</span></li>
                            <li><span> <input type="checkbox"></input> Сливки 20% жирности</span> <span>150 мл = 150 г</span></li>
                            <li><span> <input type="checkbox"></input> Тростниковый сахар</span> <span>150 г</span></li>
                            <li><span> <input type="checkbox"></input> Зерна граната</span> <span>70 г</span></li>
                            <li><span> <input type="checkbox"></input> Апельсин</span> <span>100 г</span></li>
                            <li><span> <input type="checkbox"></input> Груша</span> <span>120 г</span></li>
                            <li><span> <input type="checkbox"></input> Яблоки</span> <span>280 г</span></li>
                        </ul>

                    </div>

                    <div className={css.portion}>
                        <div className={css.sub_title}><span >Для украшения:</span></div>


                        <ul className={css.leaders}>
                            <li> <span><input type="checkbox"></input> Сыр «маскарпоне»</span> <span>250 г</span></li>
                            <li><span> <input type="checkbox"></input> Сливочное масло</span> <span>50 г</span></li>
                            <li><span> <input type="checkbox"></input> Сливки 20% жирности</span> <span>150 мл = 150 г</span></li>
                            <li><span> <input type="checkbox"></input> Тростниковый сахар</span> <span>150 г</span></li>
                            <li><span> <input type="checkbox"></input> Зерна граната</span> <span>70 г</span></li>
                            <li><span> <input type="checkbox"></input> Апельсин</span> <span>100 г</span></li>
                            <li><span> <input type="checkbox"></input> Груша</span> <span>120 г</span></li>
                            <li><span> <input type="checkbox"></input> Яблоки</span> <span>280 г</span></li>
                        </ul>

                    </div>

                </div>

                <div className={css.step_by_step_recipe}>
                    <div className={css.title}>Пошаговый рецепт </div>
                    <div className={css.sub_title}>Подготовления</div>
                    {/*<div className={css.step_by_step_preparations}></div>*/}
                    <div className={css.step_by_step_text}>Помойте фрукты. Подготовьте все необходимые ингредиенты.</div>

                    {/*<div className={css.step_by_step_preparations}>Готовка</div>*/}
                    <div className={css.sub_title}>Готовка</div>
                    <div className={css.steps}>

                        <div className={css.step}>
                            <div className={css.step_image} style={{backgroundImage:'url("https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9yZWNpcGVzLzQ5NjAzL3N0ZXBzLzRRZ2VxVi5qcGVn.jpg")'}}>

                                <div className={css.step_count}>
                                    <p className={css.step_count_text}>Шаг {i++}</p>
                                </div>
                            </div>

                            <div className={css.step_description}>Отправьте в разогретый сотейник тростниковый сахар и топите его, постоянно помешивая около 10 минут.

                            </div>

                        </div>






                        <div className={css.step}>
                            <div className={css.step_image} style={{backgroundImage:'url("https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9yZWNpcGVzLzQ5NjAzL3N0ZXBzLzRRZ2VxVi5qcGVn.jpg")'}}>

                                <div className={css.step_count}>
                                    <p className={css.step_count_text}>Шаг {i++}</p>
                                </div>
                            </div>

                            <div className={css.step_description}>К растаявшему сахару добавьте нарезанные кубиком яблоки и грушу. На медленном огне соедините фрукты с сахаром.

                            </div>

                        </div>

                    </div>

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
            </div>
            <Footer/>
        </div>
    );
}

export default Recipe;