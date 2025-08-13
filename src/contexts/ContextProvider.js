import React, { createContext, useContext, useState } from "react";
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
    const [isClicked, setIsClicked] = useState(initialState)

    const handlerClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked] :true  })
    }

    const [screenSize, setScreenSize] = useState(undefined)


    return (
        <StateContext.Provider 
            value={{
                activeMenu: activeMenu,
                setActiveMenu: setActiveMenu,
                isClicked: isClicked,
                setIsClicked: setIsClicked,
                handlerClick: handlerClick,
                screenSize: screenSize,
                setScreenSize: setScreenSize,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);