import React, {useEffect, useState} from 'react';
import Button from "../button/Button";
import './header.css'
import {useTelegram} from "../../../hooks/useTelegram";

const Header = () => {
    const {user,onClose} = useTelegram()

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={'header'}>
            <span>{user?.username}</span>
            <span>{windowDimensions?.width} * {windowDimensions?.height}</span>
            <Button onClick={onClose}>Закрыть</Button>
        </div>
    );
};

export default Header;