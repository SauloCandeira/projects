import { useState } from "react"


export type CounterDownProps = {
    date: Date;
}


export function useCountDown({date}: CounterDownProps) { 
// const useCountDown = (date) => {

    const countDate =  new Date(date).getTime()

    console.log(countDate);

    return 1
}


export default useCountDown