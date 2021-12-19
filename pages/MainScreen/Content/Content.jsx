import css from "./Content.module.css"
import React,{Fragment} from 'react';
import Article from "./Article/Article";
import image1 from './photo_2021-10-21_18-46-48.jpg'


const popular = [
    {
        id:1,
    title: 'Суп-пюре из брокколи с гренками',
    image: "https://e3.edimdoma.ru/data/recipes/0006/9951/69951-ed4_wide.jpg?1628808148",
    rating:1,
    href:"/recipe",
    text:"Нежный, легкий и очень вкусный супчик!!! Отлично подойдет для деток. Хотя многие детки не любят почему-то брокколи. Но моя доченька слопала с удовольствием! И мы с мужем тоже!",
},
    {
        id:2,
        title: 'пельмени',
        image: "https://mospravda.ru/wp-content/uploads/2021/09/6024066639.jpg",
        rating:5,
        href:"/recipe",
        text:"Нежный, легкий и очень вкусный супчик!!! Отлично подойдет для деток. Хотя многие детки не любят почему-то брокколи. Но моя доченька слопала с удовольствием! И мы с мужем тоже!",
    },
    {
        id:3,
        title: 'пельмени по-флопски',
        image: "https://31tv.ru/wp-content/uploads/2021/08/pell.jpg",
        rating:2.5,
        href:"/recipe",
        text:"Нежный, легкий и очень вкусный супчик!!! Отлично подойдет для деток. Хотя многие детки не любят почему-то брокколи. Но моя доченька слопала с удовольствием! И мы с мужем тоже!",
    }]

const Content = (props) =>{
    return (
            <div className={css.content}>
            <p className={css.content_title}>Популярное</p>

                {
                    popular.map((el) => {
                        return <Article key={el.id} {...el }/>
                    })
                }

            </div>
    );
}

export default Content;
