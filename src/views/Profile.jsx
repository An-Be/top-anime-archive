import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { auth } from "../firebase.config";
const Profile = () => {

    const{displayName, email, photoURl } = useContext(UserContext);
    console.log(displayName)

    return(
        <div className="profile" style={{marginTop: '7rem'}}>
            {!displayName ? <h1>Welcome ANON</h1> :<h1>Welcome {displayName}</h1>}
            {!photoURl ? <img width='200px' src={require('../Anon-profile.png')} alt='anon' /> :<img src={photoURl} alt={displayName} />}
            {!email ? <p>Email: ANON</p> : <p>Email: {email}</p>}
        </div>
    )

}
export default Profile;