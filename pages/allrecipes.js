import Footer from "../public/components/Footer";
import Header from "../public/components/Header";
import Recipe from "./recipe";
import React,{Fragment} from 'react';
import css from '../styles/allrecipes.module.css'
import Article from "../public/components/Article";
import PopularDishes from "/public/data/PopularDishes"
import Content from "../public/components/Content";
import TagsData from "/public/data/TagsData.json"

export const getStaticProps = async () =>
{
    const dishes = await fetch("http://13.38.23.154:8000/api/preview", {
        method: "GET",
    });

    const dishesData = await dishes.json();
    return {
        props: {dishes:dishesData}

    }
}


function Allrecipe({dishes}) {
    console.log(dishes)
    return (
        <Fragment>
            <Header/>

            <div className={css.tags}>
                {
                    TagsData.map((el)=>{
                        return <div key={el.id} className={css.tag}><input type="radio" checked className={css.tag_radio}/>{el.title}</div>

                    })
                }
                {/*<div className={css.tag}><input type="radio" className={css.tag_radio}/>Супы</div>*/}
                {/*<div className={css.tag}><input type="radio" className={css.tag_radio}/>Второе</div>*/}
                {/*<div className={css.tag}><input type="radio" className={css.tag_radio}/>15 минут</div>*/}
                {/*<div className={css.tag}><input type="radio" className={css.tag_radio}/>Диетическое</div>*/}
                {/*<div className={css.tag}><input type="radio" className={css.tag_radio}/>Праздник</div>*/}
                {/*<div className={css.tag}><input type="radio" className={css.tag_radio}/>Салаты</div>*/}
                {/*<div className={css.tag}><input type="radio" className={css.tag_radio}/>Новый год</div>*/}
            </div>
            <Content title={"Все рецепты"} data={dishes}/>
            <Footer/>
        </Fragment>
    );
}

export default Allrecipe;