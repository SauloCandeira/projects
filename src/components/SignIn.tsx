import { useEffect, useState } from "react"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/init-firebase'
import "./App.css";
import { signInWithGoogle } from "../lib/init-firebase";

interface BlogsProps{
    data: string,
    id: string
}

export default function SignIn() {

    return(
        <div>

            
            {/* Header */}
            <div>
                <div className="App">
                    <button className="login-with-google-btn" onClick={signInWithGoogle}>
                        Sign in with Google
                    </button>
                    <h1>{localStorage.getItem("name")}</h1>
                    <h1>{localStorage.getItem("email")}</h1>
                    <img src={localStorage.getItem("profilePic")} />
                </div>
            </div>
            
      
        </div>
    )
}