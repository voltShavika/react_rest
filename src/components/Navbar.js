import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged} from 'firebase/auth'

import auth from '../base';
import { loginErr, loginReq, loginSuc,  logoutReq } from '../redux/actions';


export default function Navbar() {

    const userLoading = useSelector(state => state.userLoading)
    const loggedIn = useSelector(state => state.loggedIn);
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    const handleGoogleSignIn = () => {
		const provider = new GoogleAuthProvider()
		signInWithPopup(auth, provider)
	}

    const handleLogout = () => {
        signOut(auth)
        dispatch(logoutReq())
    }

    useEffect(()=> {
        dispatch(loginReq())
		const unsubscribe = onAuthStateChanged(auth, (currentUser)=>  {
            console.log("User", currentUser);
            if(currentUser != null){
                dispatch(loginSuc(currentUser));
            }else{
                dispatch(loginErr())
            }
			
		});
		return () => {
			unsubscribe();
		}
	}, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">React Rest</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                    </ul>
                    {
                        userLoading && <p>Please wait...</p>
                    }
                    {
                        loggedIn? <button onClick={handleLogout} className="btn btn-outline-danger" type="submit">Logout</button>: <button onClick={handleGoogleSignIn} className="btn btn-outline-success" type="submit">Login</button>
                    }
                    
                    </div>
                </div>
            </nav>
        </>
    )
}
