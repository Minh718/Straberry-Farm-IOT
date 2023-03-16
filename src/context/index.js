import {useContext, createContext, useState,} from "react";


const AppContext = createContext();


const AppProvider = ({children})=>{
    const [user, setUser] = useState(false);

    return <AppContext.Provider value={{user,setUser}}>{children}</AppContext.Provider>
}

export default AppProvider;

export const useGlobalContext  = () => {
    return useContext(AppContext);
}
