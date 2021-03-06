import css from "../../styles/Footer.module.css"

import React,{Fragment} from 'react';

function Footer() {
    return (
        <Fragment>
           <div className={css.footer}>
               <div className={css.logo}></div>
               <div className={css.footer_text}>Все права на материалы, находящиеся на сайте www.cookbook.com, распространяются в соответствии с действующим законодательством. При использовании материалов с других сайтов, гиперссылка (hyperlink) на источник указывается под картинкой в описании. <br/> Администрация сайта не несет ответственности за результат применения приведенных кулинарных рецептов, методик их приготовления, кулинарных и прочих рекомендаций, работоспособность ресурсов, на которые размещены гиперссылки, и за содержание рекламных объявлений.  <br/>e-mail: info@cookbook.com       реклама на сайте: ad@cookbook.com </div>
           </div>
        </Fragment>
    );
}

export default Footer;