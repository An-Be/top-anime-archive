import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [ isAuth, setIsAuth ] = useState(false)

    return(
        <UserContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;