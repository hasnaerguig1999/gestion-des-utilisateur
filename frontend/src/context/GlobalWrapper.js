import axios from 'axios';
import {createContext, useState} from 'react';
export const GlobalContext = createContext();

export default function Wrapper({children}){
    const [users,setUsers ]= useState([])
    const FetchUsers = ()=>{
        axios.get('/api/users')
        .then(res=>{
            setUsers(res.data);
        })
        .catch((err) =>{
            console.log(err.response);
        })
    }
    return (
    <GlobalContext.Provider value={{FetchUsers, users}}>
        {children}
    </GlobalContext.Provider>
    );
}