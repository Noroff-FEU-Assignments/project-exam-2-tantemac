const tokenKey = "token";
const userKey = "user";

export default function saveToken(token) {
    SaveToStorage(tokenKey, token);
}

export default function getToken() {
    return getFromStorage(tokenKey);
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUserName() {
    const user = getFromStorage(userKey);

    if (user) {
        return user.username;
    }

    return null;
}

export default function clearUser() {
    localStorage.removeItem(userKey);
    localStorage.removeItem(tokenKey);
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return [];
    }
    
    return JSON.parse(value);
}