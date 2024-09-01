import React, {useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram";
const SearchUser = () => {
    const {tg} = useTelegram()

    const [q, SetQ] = useState('')

    function searchQuery(){
        if(!q){
            return
        }

        let data = {
            q,
            type_page: 'search'
        }

        fetch('http://localhost:8080/search-user', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <div>
            <div>Result: {q}</div>
            <input type={'text'} value={q} onInput={event => SetQ(event.target.value)} />
            <button onClick={searchQuery}>Search</button>
        </div>
    );
};

export default SearchUser;