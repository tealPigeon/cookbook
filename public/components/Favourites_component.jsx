
import css from "../../styles/Content.module.css";
import FavouritesItem from "./FavouritesItem";
import {parseCookies} from "nookies";


function FavouritesComponent(props)
{
    // const cookies = parseCookies()
let dishes =[]
    const getFavorites = async()=>{
        const lovedDishes = await fetch("http://13.38.23.154:8000/api/user-dish/loved/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:`Token ${props.cookies.fromClient}`
            }
        });
        const dishesData = await lovedDishes.json();
        dishes=dishesData;
        console.log(lovedDishes)
        console.log(dishesData)
        return await dishesData;
    }
    dishes = getFavorites();
    console.log(dishes)
    // console.log(fav)

    return (
        <div>
            <div className={css.content}>
                <p className={css.content_title}>Избранное</p>
                {/*<p>{props.cookies.fromClient}</p>*/}
                {
                    dishes[0] ? dishes.map((el) =>
                        {
                            return <FavouritesItem key={el.id} {...el }/>
                        }
                    ):<div className={css.void}>
                        В Избранном пока ничего нет
                    </div>
                }

            </div>
        </div>
    );
}

export default FavouritesComponent;
