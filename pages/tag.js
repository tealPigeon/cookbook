import Footer from "./components/Footer";
import Header from "./components/Header";
<<<<<<< HEAD
import React,{Fragment} from 'react';
import css from '../styles/tag.module.css'
=======
import Recipe from "./recipe";
import React,{Fragment} from 'react';
import css from '../styles/tag.module.css'
import Article from "./components/Article";
>>>>>>> origin/main
import SoupsData from "/public/data/SoupsData"
import Content from "./components/Content";
import TagsData from "/public/data/TagsData.json"


function Tag(props) {
    return (
        <Fragment>
            <Header/>

            <div className={css.tags}>
                {
                    TagsData.map((el)=>{
<<<<<<< HEAD
                        return el.title === "Супы" ? <div key={el.id} className={css.tag}><input type="radio" checked  className={css.tag_radio}/>{el.title}</div>: <div key={el.id} className={css.tag}><input type="radio" className={css.tag_radio}/>{el.title}</div>
=======
                        return el.title == "Супы" ? <div key={el.id} className={css.tag}><input type="radio" checked  className={css.tag_radio}/>{el.title}</div>: <div key={el.id} className={css.tag}><input type="radio" className={css.tag_radio}/>{el.title}</div>
>>>>>>> origin/main
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
            <Content title={"Рецепты в категории “Супы”"} data={SoupsData}/>
            <Footer/>
        </Fragment>
    );
}

export default Tag;