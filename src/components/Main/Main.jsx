import React from "react";
import style from './Main.module.css'
import view1 from '../../images/view1.jpg'
import view2 from '../../images/view2.jpg'
import plus from '../../images/plus.svg'
const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.view}>
                <div className={style.smallView}>
                    <img className={style.small} src={view1} />
                    <img className={style.small} src={view2} />
                    <p className={style.title}> View</p>
                </div>
                <img className={style.main_view} src={view1} />

            </div>
            <div className={style.info}>
                <div className={style.name}>
                    <p className={style.text}>ITEM NAME </p>
                    <p className={style.text}>$235.00</p>
                </div>
                <div>
                    <button className={style.white_button}>Personalise</button>
                    <div className={style.buttons}>
                        <button className={style.black_button} >Add to Cart</button>
                        <button  className={style.small_button} > <img className={style.plus} src ={plus}/></button>
                    </div>
                    <div className={style.about}>
                    <p className={style.text}>*Free delivery on all orders over USD $50</p>
                    <p className={style.text}>*Check availability in boutiques</p>

                    </div>
                 
                    <div ><button className={style.white_button}>Material 	&darr;</button></div>
                    <div ><button className={style.white_button}>Dimensions 	&darr;</button></div>
                </div>


            </div>
        </div>
    )
}

export default Main