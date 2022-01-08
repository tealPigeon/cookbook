
import React,{Fragment} from 'react';
import css from "../../styles/Authorization.module.css"
import Header from "./Header";
import { URLSearchParams } from 'url';

//
// export const getStaticProps = async () =>
// {
//     const formData = new URLSearchParams();
//     formData.append("username", "admin");
//     // formData.append("username", username);
//
//     formData.append("password", "M2$z^p5(* ");
//
//     const res = await fetch("http://13.38.23.154:8000/auth/token", {
//         method: "POST",
//         headers: {
//             contentType: 'application/json'
//         },
//         body: formData,
//     });
//     const dishesData = await res.json();
//     localStorage.setItem('token', String(res.json()));
//     return {
//         props: {dishes:dishesData}
//     }
// }
//

export default function Authorization({dishes}) {
// console.log(localStorage.getItem('token'))
//     console.log(dishes)
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
                            <button className={css.enter} onClick={()=>{console.log(email+' '+password);
                                setOpen(false)}}>Войти</button>

                            {/*<input type="button" className={css.enter} defaultValue="Войти" />*/}
                            <p className={css.registration_text}>У вас нет аккаунта? <a className={css.registration}>Регистрация</a></p>
                        </div></div>
                </Fragment>: null
        );
    }



// export default Authorization;
