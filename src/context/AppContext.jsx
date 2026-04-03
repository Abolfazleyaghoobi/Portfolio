import { createContext, useState } from "react";
export const appContext=createContext();
function AppProvider({children}){
const [next,setNext]=useState(false);

return (
    <>
    <appContext.Provider>
    {children}
    </appContext.Provider>
    </>
)
}

export default AppProvider;