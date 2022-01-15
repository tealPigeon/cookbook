import React,{Fragment} from 'react';
import css from "../styles/Content.module.css"
import FavouritesItem from "../public/components/FavouritesItem";
import Header from "../public/components/Header";
import Footer from "../public/components/Footer";
import FavouritesComponent from "../public/components/Favourites_component";
import {parseCookies} from "nookies";
import cookies from "js-cookie";

export async function getServerSideProps({req, res})
{
    const lovedDishes = await fetch("http://13.38.23.154:8000/api/user-dish/loved/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization:`Token ${req.cookies.token}`
        }
    });
    const dishesData = await lovedDishes.json();
    return  {props: { dishes: dishesData }}
}



// export const getStaticProps = async () =>
// {
//     const lovedDishes = await fetch("http://13.38.23.154:8000/api/user-dish/loved/", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization:'Token f61de83b7c70c7fdef53abb7354dda3e5ef993db'
//         }
//     });
//     const dishesData = await lovedDishes.json();
//     return  {props: { dishes: dishesData }}
// }
    function Favourites({dishes})
    {
        return (
        <div>
            <Header/>
            <div className={css.content}>
                <p className={css.content_title}>Избранное</p>
                {
                    dishes[0] ? dishes.map((el) =>
                        {
                            return <FavouritesItem token={cookies.get('token')} key={el.id} {...el }/>
                        }
                    ):<div className={css.void}>
                    В Избранном пока ничего нет
                    </div>
                }

            </div>
            <Footer/>
        </div>
    );
}

export default Favourites;