import css from "../../styles/Registration.module.css"
import img from "../../public/close_logo.svg"
import React,{Fragment} from 'react';

function Registration() {
    return (
        <Fragment>
            <div className={css.hidden}></div>
            <div className={css.background_block}>
            <div className={css.registration_lightbox}>
                <div className={css.title}>Регистрация</div>
                <div className={css.close} ></div>
                <input type="text" id="name" name="name" className={css.name} placeholder="Имя"/>
                <input type="email" id="email" name="email" className={css.email} placeholder="Email"/>
                <input type="password" id="password" name="password" className={css.password} placeholder="Пароль"/>
                <input type="password" id="password2" name="password2" className={css.password} placeholder="Подтвердите пароль"/>
                <button className={css.registration}>Зарегистрироваться</button>
            </div>
            </div>
        </Fragment>
    );
}

export default Registration;