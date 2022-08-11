import { createContext, useState } from "react";
import { auth } from "../firebase.config";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [ isAuth, setIsAuth ] = useState(false)
    const [ email, setEmail ] = useState('');
    const [ displayName, setDisplayName ] = useState('');
    const [ photoURl, setPhotoURl ] = useState('');

    let user;

    const setUser = () => {
        user = auth.currentUser;
        if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        setDisplayName(user.displayName);
        setEmail(user.email);
        setPhotoURl(user.photoURL);

        //console.log(photoURl);
        }
    }
    const resetUser = () => {
        setDisplayName('');
        setEmail('');
        setPhotoURl('');
    }


    return(
        <UserContext.Provider value={{ isAuth, setIsAuth, displayName, email, photoURl, setUser, resetUser }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;