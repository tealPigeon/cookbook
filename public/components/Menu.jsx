import css from "../../styles/Menu.module.css"
import Link from "next/link"
import React,{Fragment, useState} from 'react';

const Menu =()=>
{
    return (
        // <div className={active ? (css.menuActive): (css.menu)} onClick={() => setActive(false)}>
        <div className={css.menuActive}>
        <div className={css.menu__content}>
                <ul className={css.menu__list}>
                    <li className={css.menu__item}><Link href="/favourites" passHref>Избранное</Link></li>
                    <li className={css.menu__item}>Таймер</li>
                    <li className={css.menu__item}><Link href="/shopping" passHref>Список покупок</Link></li>
                    <li className={css.menu__item}><Link href="/accountsettings" passHref>Настройки аккаунта</Link></li>
                    <li className={css.menu__item}><Link href="/favourites" passHref>Выход</Link></li>
                    </ul>
            </div>
        </div>

    );

};

export default Menu;