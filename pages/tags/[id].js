import Footer from "/public/components/Footer";
import Header from "/public/components/Header";
import React,{Fragment} from 'react';
import css from '/styles/tag.module.css'
import SoupsData from "/public/data/SoupsData"
import Content from "/public/components/Content";
import TagsData from "/public/data/TagsData.json"


export const getServerSideProps = async (context) =>
{
    const {id}=context.params;
    const category = await fetch("http://13.38.23.154:8000/api/category");
    const dishes = await fetch("http://13.38.23.154:8000/api/preview");

    const categoryData = await category.json();
    const dishesData = await dishes.json();
    return {
        props: {category:categoryData, id:id, dishes:dishesData}
    }
}

function Tag(category) {
    let title = category.category.filter(el => el.id==category.id);
    let dishes_for_category = category.dishes.filter(el => el.category==category.id);
    return (
        <Fragment>
            <Header/>
            <Content title={`Рецепты в категории "${title[0].name}"`} data={dishes_for_category}/>
            <Footer/>
        </Fragment>
    );
}

export default Tag;