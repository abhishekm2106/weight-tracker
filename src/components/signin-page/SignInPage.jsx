import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaUserSecret } from "react-icons/fa"
import { signInWithGoogle, signInAnonymously } from '../../firebase/firebaseFunction'
import './signin-page.scss'

function SignInPage() {
    return (
        <div className='sign-in-page'>
            <h2>Sign In To your account</h2>
            <div className="button-container">
                <button className="google" onClick={() => signInWithGoogle()}><p>Sign In With Google</p> <FcGoogle size="2em" /> </button>
                <button className="anom" onClick={() => signInAnonymously()}>Sign In Anonymously <FaUserSecret size="2em" /></button>
            </div>
        </div>
    )
}

export default SignInPage
