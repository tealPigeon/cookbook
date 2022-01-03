import React,{Fragment} from 'react';
import css from '/styles/TimerDisplay.module.css'
// import StarRating from "./StarRating";
const Timer = () =>
{
    return(<Fragment>
        <div className={css.hidden}></div>
        <div className={css.background_block}>
            <div className={css.authorization_lightbox}>
                <div className={css.close}></div>

                <div className={css.title}>Задайте время</div>

                <button className={css.button}>Готово</button>
            </div>
</div>
    </Fragment>);
}

export default Timer;