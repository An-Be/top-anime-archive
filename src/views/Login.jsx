import { auth, provider } from '../firebase.config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Login = () => {
    const navigate = useNavigate();
    const { setIsAuth } = useContext(UserContext);

    const signIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            //redirect to home page
            navigate('/');
            console.log('logging in')
        });
    };

    const anon = () => {
        setIsAuth(true);
        navigate('/');
    }
    console.log('hello')

    return(
        <div style={{marginTop: '6rem'}} className="login">
            <p>Sign in with Google</p>
            <button className="login-btn" onClick={signIn}>Sign in With Google</button>
            <button className="anon-btn" onClick={anon}>Log in as Anon</button>
        </div>
    );
}
export default Login;