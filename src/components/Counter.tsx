import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"
import { db } from '../lib/init-firebase'


export type CounterProps = {
    title: string;
    number: number
}


export function Counter({title, number }: CounterProps) { 
    return(
        <div> 
            <p> {number}</p>
            <h1>
                {title}
            </h1>
        </div>
    )
}

export default Counter