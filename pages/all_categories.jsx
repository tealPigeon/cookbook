
import React,{Fragment} from 'react';
import css from "../styles/AllCategories.module.css"

import Header from "../public/components/Header"
import Footer from "../public/components/Footer";
import TagsData from "../public/data/TagsData.json"
import Link from "next/link"
import styles from "../styles/Home.module.css";

export const getStaticProps = async () =>
{
    const category = await fetch("http://13.38.23.154:8000/api/category", {
        method: "GET",
    });

    const categoryData = await category.json();

    return {
        props: {category:categoryData}
    }
}


function All_categories(dishes) {
    console.log(dishes.category)
    return (
        <Fragment>
            <Header/>
            <div className={css.all}>
                <div className={css.all_categories}>
                    {
                        dishes.category.map((tag) => {
                            return <Link key={tag.id} style={{ cursor: 'pointer'}} href={`/tags/${tag.id}`} passHref>
                                <div className={css.categories} style={{backgroundImage:'url("http://13.38.23.154:8000'+ tag.web_image+'")'}}>
                                    <div className={css.tags_of_dishes}>
                                        <p className={css.tag} style={{color:'black'}}>{tag.name}</p>
                                    </div>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div>
            <Link href={"/allrecipes"} passHref><p className={styles.sub_title}>Все рецепты...</p></Link>
            <Footer/>
        </Fragment>


    );
}

export default All_categories;
