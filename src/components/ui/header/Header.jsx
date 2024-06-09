import React from 'react';
import Button from "../button/Button";
import './header.css'
import {useTelegram} from "../../../hooks/useTelegram";

const Header = () => {
    const {user,onClose} = useTelegram()

    console.log()

    return (
        <div className={'header'}>
            <span>{user?.username}</span>
            <Button onClick={onClose}>Закрыть</Button>
        </div>
    );
};

export default Header;