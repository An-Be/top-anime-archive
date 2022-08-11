import { auth, provider } from '../firebase.config';
import { signInWithPopup, signInAnonymously } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Login = () => {
    const navigate = useNavigate();
    const { setIsAuth, setUser } = useContext(UserContext);

    const signIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            setUser();
            //redirect to home page
            navigate('/');
        }).catch((error) => {
            console.log(error)
        })
    };

    const anon = () => {
        signInAnonymously(auth).then(() => {
            setIsAuth(true);
            setUser();
            navigate('/');
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <div style={{marginTop: '10rem'}} className="login">
            <p>Sign in</p>
            <div className='btnWrapper'>
            <button className="login-btn" onClick={signIn}>Sign in With Google</button>
            <button className="anon-btn" onClick={anon}>Sign in as Anon</button>
            </div>
        </div>
    );
}
export default Login;