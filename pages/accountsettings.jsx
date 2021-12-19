
import React,{Fragment} from 'react';
import css from './AccountSettings/AccountSettings.module.css'
// import img1 from "./MainScreen/Content/CookingItem/photo_2021-11-01_03-57-07.jpg";
import img2 from "./AccountSettings/icon_change.svg"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Image from 'next/image';

function Accountsettings()
{
    const img1="https://memepedia.ru/wp-content/uploads/2020/10/screenshot_11-3.png"
    return(
        <Fragment>
            <Header/>
            <div className={css.content_account}>
                <div className={css.title}>Настройки аккаунта</div>

                <div className={css.setting}>
                    {/*<Image className={css.image} src={require(img1)} alt="me" width="284px" height="284px"/>*/}
                    <div className={css.image}  style={{backgroundImage:'url("'+img1+'")'}}></div>

                    <div className={css.wrapper_setting}>

                        <label> <span>Имя:</span> <input className={css.input} type="text" id="name" defaultValue={"Андрей федосеев"}/>
                            <Image className={css.change_logo} src={require( "./AccountSettings/icon_change.svg")} alt="me" width="25.65px" height="28.18px" />
                            {/*<img src={require( "./AccountSettings/icon_change.svg")} alt="альтернативный текст" className={css.change_logo} />*/}
                        </label>

                        <label><span>E-mail:</span> <input className={css.input} type="email" id="email"  defaultValue={"AndreyFedos@mail.ru"}/>
                            <Image className={css.change_logo} src={require( "./AccountSettings/icon_change.svg")} alt="me" width="25.65px" height="28.18px"/>

                            {/*<img src={img2} alt="альтернативный текст" className={css.change_logo} />*/}
                        </label>

                        <label><span>Пароль:</span> <input className={css.input} type="password" id="password" defaultValue={"**********"}/>
                            <Image className={css.change_logo} src={require( "./AccountSettings/icon_change.svg")} alt="me" width="25.65px" height="28.18px"/>

                            {/*<img src={img2} alt="альтернативный текст" className={css.change_logo} />*/}
                        </label>

                        <div className={css.setting_description}>


                        </div>

                    </div>
                </div>

            </div>
            <Footer/>
        </Fragment>
    )
}

export default Accountsettings;
