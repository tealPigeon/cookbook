
import React,{Fragment} from 'react';
import css from "../styles/AllCategories.module.css"

import Header from "./components/Header"
import Footer from "./components/Footer";
import TagsData from "../public/data/TagsData.json"
import Link from "next/link"
import styles from "../styles/Home.module.css";


function All_categories() {
    return (
        <Fragment>
            <Header/>
            <div className={css.all}>
                <div className={css.all_categories}>
                    {
                        TagsData.map((tag) => {
                            return <Link key={tag.id}  href={tag.link}  style={{ cursor: 'pointer'}} passHref>
                                <div className={css.categories} style={{backgroundImage:'url("'+ tag.image+'")' }}>
                                    <div className={css.tags_of_dishes}>
                                        <p className={css.tag} style={{color:'black'}}>{tag.title}</p>
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
