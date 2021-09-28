import { useEffect, useState } from "react";

const LOCALSTORAGE_KEY = "auth";

export const setJWT=(jwt) => {
    localStorage.setItem(LOCALSTORAGE_KEY, jwt);
}


export const useAuth=() => {
    const [jwt, setJWT] = useState ()
    useEffect(() => {
        if (typeof window !=="undefined") {
            const auth = window.localStorage.getItem(LOCALSTORAGE_KEY);
            setJWT(auth || "");
        }
    }, [])
    return jwt;
}