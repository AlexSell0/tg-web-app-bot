import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [party, setParty] = useState(null)

    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, []);

    useEffect(() => {
        if(!city || !country){
            tg.MainButton.hide()
        }else{
            tg.MainButton.show()
        }
    }, [country, city]);

    return (
        <div className={'container'}>
            <h3>Введите данные</h3>

            <form className={'form'}>
                <div className={'form-control'}>
                    <span>Страна</span>
                    <input type="text" value={country} placeholder={'Страна'}
                           onInput={(event) => setCountry(event.target.value)}/>
                </div>

                <div className={'form-control'}>
                    <span>Город</span>
                    <input type="text" value={city} placeholder={'Страна'}
                           onInput={(event) => setCity(event.target.value)}/>
                </div>

                <select value={party} onChange={(event)=>setParty(event.target.value)}>
                    <option value="" disabled={true}>Выберите лицо</option>
                    <option value="0">Физ. лицо</option>
                    <option value="1">Юр. лицо</option>
                </select>
            </form>
        </div>
    );
};

export default Form;