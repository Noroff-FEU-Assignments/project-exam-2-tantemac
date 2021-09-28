import { useAuth } from "../utils/auth"
import LoginForm from "./LoginForm";

export const ProtectedRoute = ({children}) => {

    const isLoggedIn=useAuth();

    if (isLoggedIn===null) {
        return null;
    }
    if (!isLoggedIn) {
        return (
            <LoginForm />
        )
    }
    return children;
}