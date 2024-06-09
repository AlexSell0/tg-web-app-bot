import React from 'react';
import Button from "../button/Button";
import './header.css'
const tg = window.Telegram.WebApp;
const Header = () => {
    const onClose = ()=>{
        tg.close()
    }

    console.log()

    return (
        <div className={'header'}>
            <span>{tg.initDataUnsafe?.user?.username}</span>
            <Button onClick={onClose}>Закрыть</Button>
        </div>
    );
};

export default Header;