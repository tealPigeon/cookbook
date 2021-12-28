import Footer from "./components/Footer";
import Header from "./components/Header";
import Recipe from "./recipe";
import React,{Fragment} from 'react';
import css from '../styles/allrecipes.module.css'
import Article from "./components/Article";
import PopularDishes from "/public/data/PopularDishes"
import Content from "./components/Content";
import TagsData from "/public/data/TagsData.json"


function Allrecipe(props) {
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
            <Content title={"Все рецепты"} data={PopularDishes}/>
            <Footer/>
        </Fragment>
    );
}

export default Allrecipe;