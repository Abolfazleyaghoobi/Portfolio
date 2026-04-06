import { createContext, useState } from "react";
export const appContext=createContext();
function AppProvider({children}){
const [showMenu,setShowMenu]=useState(false);

return (
    <>
    <appContext.Provider value={{showMenu,setShowMenu}}>
    {children}
    </appContext.Provider>
    </>
)
}

export default AppProvider;