import React, {Component, Fragment} from "react";
import css from "../../styles/Slide.module.css";
import Link from "next/link"

const Slide = (props) =>{

    // debugger;
    console.log(props)
    return (
        <Fragment>
            <div>
                <Link style={{ cursor: 'pointer'}} href={`/tags/${props.id}`} passHref>
                    <div className={css.slide_item} style={{backgroundImage:'url("'+ props.image+'")'}}>
                        <div className={css.tags_of_dishes}>
                            <p className={css.tag} style={{color:'black'}}>{props.text}</p>
                        </div>
                    </div>
            </Link>
            </div>
        </Fragment>

    );
}

export default Slide;