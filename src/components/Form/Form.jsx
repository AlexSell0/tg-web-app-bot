import React, {useCallback, useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [party, setParty] = useState('')

    const {tg} = useTelegram()

    const onSendData = useCallback(()=>{
        const data = {
            form: {
                city: 'dsadsa',
                country: country,
            }
        }

        console.log(data)

        tg.sendData(JSON.stringify(data))
    }, [country, city, party])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)

        return ()=>{
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData]);

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

    function setCountryValue(event){
        setCountry(event.target.value)
    }

    function setCityValue(event){
        setCity(event.target.value)
    }

    return (
        <div className={'container'}>
            <h3>Введите данные</h3>
            <form onSubmit={()=>onSendData} className={'form'}>
                <div className={'form-control'}>
                    <span>Страна</span>
                    <input type="text" value={country} placeholder={'Страна'}
                           onInput={(event) => setCountryValue(event)}/>
                </div>

                <div className={'form-control'}>
                    <span>Город</span>
                    <input type="text" value={city} placeholder={'Страна'}
                           onInput={(event) => setCityValue(event)}/>
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