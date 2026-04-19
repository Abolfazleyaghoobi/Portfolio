import { createContext, useState } from "react";
export const appContext=createContext();
function AppProvider({children}){
const [showMenu,setShowMenu]=useState(false);
const [continuePage,setContinuePage]=useState(false) 

return (
    <>
    <appContext.Provider value={{showMenu,setShowMenu,continuePage,setContinuePage}}>
    {children}
    </appContext.Provider>
    </>
)
}

export default AppProvider;