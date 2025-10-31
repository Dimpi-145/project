import {  createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyPdfChats, dummyChats } from "../assets/assets";


const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const navigate =useNavigate()
    const [user, setUser] = useState(null);
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    
    const fetchUser = async () =>{
        setUser(dummyPdfChats)
    }

    const fetchUserChats = async () => {
        setChats(dummyChats)
        setSelectedChat(dummyChats[0])
    }

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    

    useEffect(()=>{
        // populate initial user and chats on app start
        fetchUser()
        fetchUserChats()

    },[])


    const value={
        navigate, user, setUser, fetchUser, chats, setChats, selectedChat, theme, setTheme
    }
    return (
        <AppContext.Provider value={value}>
            {children}

        </AppContext.Provider>
    )
}

export const useAppContext =()=> useContext(AppContext)