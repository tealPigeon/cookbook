import React,{Fragment,useState} from 'react';
import {FaStar} from "react-icons/fa";
// import "./StarRating.css"

const StarRating =() =>{
    const [rating, setRating] = useState(null);
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
                            onClick={()=> {setRating(ratingValue); console.log(ratingValue)}}/>
                        <FaStar className="star" color={ratingValue <= rating ? "#ffc107":"#e4e5e9"} size={100}/>
                    </label>
                    </Fragment>

                    )
            })}
        </div>
        );
    ;}

        export default StarRating;