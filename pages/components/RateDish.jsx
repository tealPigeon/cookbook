import css from "../../styles/RateDish.module.css"
import React,{Fragment} from 'react';
import StarRating from "./StarRating";

// const firstExample = {
//     size: 90,
//     count: 5,
//     color: "#F6CB5A",
//     activeColor: "#F6CB5A",
//     value: 4.5,
//     a11y: true,
//     isHalf: true,
//     emptyIcon: <i className="far fa-star" />,
//     halfIcon: <i className="fa fa-star-half-alt" />,
//     filledIcon: <i className="fa fa-star" />,
//     onChange: newValue => {
//         console.log(`new value is ${newValue}`);}
// };


export default class RateDish extends React.Component{

    state={
        isOpen:true
    }
    render(){
        return (
        this.state.isOpen ?
        <Fragment>
            <div className={css.hidden}></div>
            <div className={css.background_block}>
            <div className={css.authorization_lightbox}>

                    <div className={css.title}>Оцените блюдо</div>
                    <div className={css.close} onClick={()=>this.setState({isOpen: false})}></div>
                    <div className={css.text}>
                        Благодарим за использование нашего сервиса. Оцените, пожалуйста, приготовленное блюдо, чтобы остальным пользователям было легче сделать выбор
                    </div>
                    <div className={css.star}>
                        <StarRating/>
                        {/*<ReactStars {...firstExample} />*/}

                </div>
            </div></div>

        </Fragment>: null
    );}

}