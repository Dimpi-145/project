import {  createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AppContext = createContext()

export const AppContextProvider = ({Children})=>{

    const navigate =useNavigate()
    const [user, setUser] = useState(null);
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    
    const fetchUser = async () =>{
        setUser(dummyUserData)
    }

    const fetchUserChats = async () => {
        setChats(dummyChats)
        setSelectedChat(dummyChats[0])
    }

    useEffect(()=>{
        if(user)
    }, [user])

    useEffect(()=>{
        fetchUser()

    },[])


    const value={
        navigate, user, setUser, fetchUser, chats, setChats, selectedChat, theme
    }
    return (
        <AppContext.Provider value={value}>
            {children}

        </AppContext.Provider>
    )
}

export const useAppContext =()=> useContext(AppContext)