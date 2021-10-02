import { useRouter } from "next/router";
import { clearUser } from "../utils/storage";

export default function LogoutButton() {
    const router = useRouter();

    const onLogout = () => {
        clearUser(); 
        router.push ("/");
    }
    return <button 
                type="button" 
                onClick={onLogout}
                className="bg-black bg-opacity-75 text-white rounded-lg p-3 hover:bg-opacity-50">Logg ut</button>
}