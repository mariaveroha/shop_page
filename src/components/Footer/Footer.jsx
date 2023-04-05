
import React from "react";
import style from './Footer.module.css'
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.navbar}>
                <p className={style.item}>Cart</p>
                <p className={style.item}>Overview</p>
                <p className={style.item}>Boutique</p>
                <p className={style.item}>About Us</p>
                <p className={style.item}>FAQ</p>
            </div>
            <div className={style.name_section}>
                <p className={style.name}>ITEM SECTION NAME</p>
            </div>
        </div>
    )
}

export default Footer