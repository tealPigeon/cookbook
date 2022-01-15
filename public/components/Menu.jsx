import css from "../../styles/Menu.module.css"
import Link from "next/link"
import React,{Fragment, useState} from 'react';
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useRouter } from 'next/router'
import Cookies from "js-cookie";

const Menu =()=>
{
    const [isOpen, setOpen] = React.useState(true);
    const router = useRouter()

    async function clearCookies()
    {
        const cookies = await parseCookies()
        console.log("очищает куки :3")
        await destroyCookie(null, 'fromClient')
        await Cookies.remove('token', { path: '' })
        setOpen(false)
        await router.push("http://localhost:3000/")
    }


    return (
        isOpen ?
        // <div className={active ? (css.menuActive): (css.menu)} onClick={() => setActive(false)}>
        <div className={css.menuActive}>
        <div className={css.menu__content}>
                <ul className={css.menu__list}>
                    <li className={css.menu__item}><Link href="/favourites" passHref>Избранное</Link></li>
                    {/*<li className={css.menu__item}>Таймер</li>*/}
                    {/*<li className={css.menu__item}><Link href="/shopping" passHref>Список покупок</Link></li>*/}
                    <li className={css.menu__item}><Link href="/accountsettings" passHref>Настройки аккаунта</Link></li>
                    <li className={css.menu__item} onClick={()=>clearCookies()}>Выход</li>
                    </ul>
            </div>
        </div> : null

    );

};

export default Menu;