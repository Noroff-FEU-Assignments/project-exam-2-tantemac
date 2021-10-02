import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../utils/storage";
import logoutButton from "./LogOutButton";


export default function Layout({ children }) {

    const username = useAuth();

    let authLink = <Link href="/login">
                        <button>Logg inn</button>
                    </Link>;

        if(username) {
            authLink = logoutButton();
    }
 return (
    <>
        <nav className="bg-white shadow-lg font-global">
            <div className="max-w-6xl px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link href="/">
                                <a className="flex items-center py-2 px-2">
                                    <Image src="/logo.png" alt="Logo" width="200" height="60" className="mr-0" />
                                </a>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-8">
                            <Link href="/">
                                <a>Heim</a>
                            </Link>
                            <Link href="/about">
                                <a>Om meg</a>
                            </Link>
                            <Link href="/services">
                                <a>Tenester</a>
                            </Link>
                            <Link href="/questions">
                                <a>Spørsmål og svar</a>
                            </Link>
                            <Link href="/booking">
                                <a>Bestill pianostemming</a>
                            </Link>
                            {authLink}
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div className="h-full md:container md:mx-auto font-global">{children}</div>
        <div className="relative">
            <footer className="absolute inset-x-0 -bottom-32 w-full py-10 bg-black bg-opacity-75">
                <p className="text-white text-center">© Øystein Eckhoff Holsvik</p>
            </footer>
        </div>
    </>
 );
}