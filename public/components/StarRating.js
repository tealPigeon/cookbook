import React,{Fragment,useState} from 'react';
import {FaStar} from "react-icons/fa";



// export const getServerSideProps = async (context) =>
// {
//     const {id}=context.params;
//     console.log(context)
//     return {
//         props: {
//             id:id
//         }
//     }
// }

let rate = null;
const StarRating =(props) =>{
    const [rating, setRating] = useState(null);

    const makeRate = async()=>{
        try {
            await fetch(`http://13.38.23.154:8000/api/user-dish/${props.dish_id}`, {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "Accept": "application/json",
                    Authorization: "Token f61de83b7c70c7fdef53abb7354dda3e5ef993db"
                },
                method: "PUT",
                body: JSON.stringify({
                    relation: {
                        rate: rate
                    }
                })
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (

        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue =i+1;
                return(
                    <Fragment div key={i}>
                        <label>
                            <input
                                className="star_input"
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                display="none"
                                onClick={()=> {
                                    setRating(ratingValue);
                                    rate=ratingValue;
                                    console.log(ratingValue);
                                    console.log(rating);
                                    setTimeout(makeRate, 100);}
                                }/>
                            <FaStar className="star" color={ratingValue <= rating ? "#ffc107":"#e4e5e9"} size={100}/>
                        </label>
                    </Fragment>

                )
            })}
        </div>
    );
    ;}

export default StarRating;