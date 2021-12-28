
import React,{Fragment} from 'react';
import css from './ShoppingList/ShoppingList.module.css'

function ShoppingItem()
{
    return(
        <Fragment>
            <li><span><input type="checkbox"></input> Сыр «маскарпоне»</span> <span>250 г</span></li>
            <li><span><input type="checkbox"></input> Сливочное масло</span> <span>50 г</span></li>
            <li><span><input type="checkbox"></input> Сливки 20% жирности</span> <span>150 мл = 150 г</span></li>
            <li><span><input type="checkbox"></input> Тростниковый сахар</span> <span>150 г</span></li>
            <li><span><input type="checkbox"></input> Зерна граната</span> <span>70 г</span></li>
            <li><span><input type="checkbox"></input> Апельсин</span> <span>100 г</span></li>
            <li><span><input type="checkbox"></input> Груша</span> <span>120 г</span></li>
            <li><span><input type="checkbox"></input>  Яблоки</span> <span>280 г</span></li>
        </Fragment>
    )
}

export default ShoppingItem;