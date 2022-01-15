import Footer from "../public/components/Footer";
import Header from "../public/components/Header";
import Recipe from "./recipe";
import React,{Fragment} from 'react';
import css from '../styles/allrecipes.module.css'
import Article from "../public/components/Article";
import PopularDishes from "/public/data/PopularDishes"
import Content from "../public/components/Content";

export const getStaticProps = async () =>
{
    const dishes = await fetch("http://13.38.23.154:8000/api/preview");
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
            <Content title={"Все рецепты"} data={dishes}/>
            <Footer/>
        </Fragment>
    );
}

export default Allrecipe;