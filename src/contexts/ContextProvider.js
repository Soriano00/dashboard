import React, { createContext, use, useContext, useState } from "react";
import { cartData } from "../data/dummy";

const StateContext = createContext();

const initialState = {
    chat: false,     
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);


    return (
        <StateContext.Provider 
            value={{
                activeMenu: activeMenu,
                setActiveMenu: setActiveMenu,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);