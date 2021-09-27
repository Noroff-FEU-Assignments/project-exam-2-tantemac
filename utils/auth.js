import { useEffect, useState } from "react";

const LOCALSTORAG_KEY = "auth";

export const setJWT=(jwt) => {
    localStorage.setItem(LOCALSTORAG_KEY, jwt);
}


export const useAuth=() => {
    const [jwt, setJWT] = useState ()
    useEffect(() => {
        if (typeof window !=="undefined") {
            const auth = window.localStorage.getItem(LOCALSTORAG_KEY);
            setJWT(auth || "");
        }
    }, [])
    return jwt;
}