import React, { useState } from "react";
import style from './Header.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContrastIcon from '@mui/icons-material/Contrast';
import search from '../../images/search.svg'
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from "../../hooks/useTheme";
const Header = () => {
    let [back, setBack] = useState(search)
    const { theme, setTheme } = useTheme()

    const HandleClickTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        }
        else { setTheme('dark') }
    }



    return (
        <div className={style.header}>
            <p className={style.item}>Shop</p>
            <p className={style.item}>Discover</p>
            <p className={style.title}>COMPANY</p>
            <div className={style.search}>
                <input className={style.input} type="text" placeholder="Search"
                    style={{
                        backgroundImage: `url(${back})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '105px 8px'
                    }}
                    onKeyDown={() => { setBack(null) }}
                />
            </div>

            <p className={style.item}>Cart</p>
            <div className={style.icons}>
                <FacebookIcon className={style.icon} />
                <InstagramIcon className={style.icon} />
                <FavoriteIcon className={style.icon} />
                <ContrastIcon className={style.icon} onClick ={HandleClickTheme} />
            </div>
        </div>
    )
}

export default Header