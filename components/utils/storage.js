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

export function clearUser() {
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

// const tokenKey = "token";
// const userKey = "user";

// export default function saveToken(token) {
//     SaveToStorage(tokenKey, token);
// }

// export function getToken() {
//     return getFromStorage(tokenKey);
// }

// export function saveUser(user) {
//     saveToStorage(userKey, user);
// }

// export function getUserName() {
//     const user = getFromStorage(userKey);

//     if (user) {
//         return user.username;
//     }

//     return null;
// }

// export function clearUser() {
//     localStorage.removeItem(LOCALSTORAGE_KEY);
//     localStorage.removeItem(tokenKey);
// }

// function saveToStorage(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
// }

// function getFromStorage(key) {
//     const value = localStorage.getItem(key);

//     if (!value) {
//         return [];
//     }
    
//     return JSON.parse(value);
// }