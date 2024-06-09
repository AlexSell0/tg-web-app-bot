import React, {useCallback, useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [party, setParty] = useState('')

    const [test, setTest] = useState('')

    const {tg} = useTelegram()

    const onSendData = useCallback(()=>{
        const data = {
            city,
            country,
        }

        setTest('dsfdsfds')

        tg.sendData(JSON.stringify(data))
    }, [country, city])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)

        return ()=>{
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, []);

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
            <p>{test}</p>
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