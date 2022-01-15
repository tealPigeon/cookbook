import css from "../../styles/Header.module.css";

import React,{Fragment, useState} from 'react';
// import {NavLink} from "react-router-dom";
import Link from "next/link"
import Menu from "./Menu";
// import Authorization from "./Authorization";
// import A from './A'
import Authorization from "./Authorization";
import {parseCookies} from "nookies";

function Header(props) {
    // const [modalActive, setModalActive] = useState(true);
    let menuIsOpen = false;
    let authorization = false;

    const [showMenu, setMenu] = useState(menuIsOpen)
    const [showAuthorization, setAuthorization] = useState(authorization)

    const cookies = parseCookies()
    // console.log(cookies.fromClient)


    // let name = props.name;
    return (
        <Fragment>
            <div className={css.header}>
                {/* <NavLink to="/main"  style={{ cursor: 'pointer'}}  id="main"><div className={css.logo} /></NavLink> */}
                <Link href="/" style={{ cursor: 'pointer'}} id="main" passHref><div className={css.logo}/></Link>
                <form className={css.search_form} action="#">
                    <input className={css.search_button} type="submit" defaultValue />
                    <input className={css.search} type="search" placeholder="Название блюда или ингредиента..." />
                </form>


                <div className={css.box}>

                    {
                        cookies.fromClient ? <div className={css.profile} onClick={() => {menuIsOpen=!menuIsOpen; setMenu(menuIsOpen);} }/>:<a style={{ cursor: 'pointer'}}  id="enter" className={css.enter} onClick={() => {authorization=!authorization; setAuthorization(authorization)} }>Войти</a>
                    }


                </div>

            </div>
            {
                showMenu ? <Menu/>: null
            }

            {
                showAuthorization ? authorization=!authorization && <Authorization/>: null
            }

        </Fragment>
    );
}

export default Header;
