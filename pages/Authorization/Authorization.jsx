
import img from "./close_logo.svg"
import React,{Fragment} from 'react';
import css from "./Authorization.module.css"

export default class Authorization extends React.Component{

    state={
    isOpen:true
}
render() {
        return (
            this.state.isOpen ?
    <Fragment>
                <div className={css.hidden}></div>
            <div className={css.background_block}></div>
            <div className={css.authorization_lightbox}>
            <div className={css.title}>Авторизация</div>
            <div className={css.close} onClick={()=>this.setState({isOpen: false})}></div>
            <input type="email" id="email" name="email" placeholder="Email" value={"AndreyFedos@mail.ru"} className={css.email}/>
            <input type="password" id="password" name="password" placeholder="Пароль"  value={"*********"} className={css.password}/>

            <div className={css.remember_me}>
            <input type="checkbox" id="scales" name="scales" defaultChecked className={css.checkbox}/>
            <label htmlFor="scales" className={css.remember_me_label}>Запомнить меня</label>
            </div>
            <button className={css.enter}  onClick={()=>this.setState({isOpen: false})}>Войти</button>

            {/*<input type="button" className={css.enter} defaultValue="Войти" />*/}
            <p className={css.registration_text}>У вас нет аккаунта? <a className={css.registration}>Регистрация</a></p>
            </div>
    </Fragment>: null
);
}


};