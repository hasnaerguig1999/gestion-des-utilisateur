import axios from 'axios';
import {createContext, useState} from 'react';

import { useToast } from '@chakra-ui/react'
export const GlobalContext = createContext();
export default function Wrapper({children}){
    const [users,setUsers ]= useState([])
    const toast = useToast()
    
    const FetchUsers = ()=>{
        axios.get('/api/users')
        .then(res=>{
            setUsers(res.data);
        })
        .catch((err) =>{
            console.log(err.response);
        })
    };
    const Search = (query) => {
        axios.post(`/api/users/search?key=${query}`)
            .then(res => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    const Delete = (id)=>{
        axios.delete(`/api/users/${id}`)
        .then(res =>{
            FetchUsers(users.filter((user) => user._id !== id));
            toast({
                title: 'users deleted.',
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
        })
        .catch((err) =>{
            console.log(err.response);
        })
    }
    
    return (
    <GlobalContext.Provider value={{FetchUsers,users,Search,Delete}}>
        {children}
    </GlobalContext.Provider>
    );
}