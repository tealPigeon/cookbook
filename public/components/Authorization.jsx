
import React,{Fragment} from 'react';
import css from "../../styles/Authorization.module.css"

import {setCookie, destroyCookie} from "nookies";
import cookies from 'js-cookie'
import Router from "next/router";

export default function Authorization() {
    const [isOpen, setOpen] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const emailHandler = (e) =>
    {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) =>
    {
        setPassword(e.target.value)
    }

    async function handleLogin(){
        let myStorage = window.localStorage;
        const loginInfo ={
            username: email,
            password: password
        }
        const formData = new URLSearchParams();
        formData.append("username", loginInfo.username);
        formData.append("password", loginInfo.password);

        try {
            const res = await fetch("http://13.38.23.154:8000/auth/token",
                {
                    method: "POST",
                    headers: {
                        // contentType: 'application/json',
                    },
                    body: formData,
                }
            );
            const tokenData = await res.json();
            console.log(tokenData.token);
            myStorage.setItem('token', tokenData.token)
            cookies.set('token', tokenData.token, { expires: 7 })
            if(tokenData.token){setCookie(null, 'fromClient', tokenData.token), {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            }} else {
                destroyCookie(null, 'fromClient')
                cookies.remove('token', { path: '' })
            }
            Router.reload(window.location.pathname)
            setOpen(false)
        }
        catch(err) {
            alert(err);
        }
    }

    return (
        isOpen ?
            <Fragment>
                <div className={css.hidden}></div>
                <div className={css.background_block}>
                    <div className={css.authorization_lightbox}>
                        <div className={css.title}>Авторизация</div>
                        <div className={css.close} onClick={()=>setOpen(false)}></div>
                        {/*<input type="email" id="email" name="email" placeholder="Email" value={"AndreyFedos@mail.ru"} className={css.email}/>*/}
                        {/*<input type="password" id="password" name="password" placeholder="Пароль"  value={"*********"} className={css.password}/>*/}
                        <input
                            onChange={e=>emailHandler(e)}
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className={css.email}/>
                        <input
                            onChange={e=>passwordHandler(e)}
                            value={password}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Пароль"
                            className={css.password}/>
                        <div className={css.remember_me}>
                            <input type="checkbox" id="scales" name="scales" defaultChecked className={css.checkbox}/>
                            <label htmlFor="scales" className={css.remember_me_label}>Запомнить меня</label>
                        </div>
                        {/*console.log(email+' '+password);*/}
                        <button className={css.enter} onClick={()=>handleLogin()}>Войти</button>

                        {/*<input type="button" className={css.enter} defaultValue="Войти" />*/}
                        <p className={css.registration_text}>У вас нет аккаунта? <a className={css.registration}>Регистрация</a></p>
                    </div></div>
            </Fragment>: null
    );
}


// export default Authorization;
