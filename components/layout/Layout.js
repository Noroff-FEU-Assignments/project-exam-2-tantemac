import Link from "next/link";
import Image from "next/image";
import { clearUser, useAuth } from "../utils/storage";
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
                    <div className="hidden md:flex items-center space-x-8">
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

   <div className="container mx-auto font-global">{children}</div>

   <footer className="py-10 mt-10 bg-black bg-opacity-75">
      <p className="text-white text-center">© Øystein Eckhoff Holsvik</p>
   </footer>
  </>
 );
}

// const isLoggedIn=useAuth();

// if (isLoggedIn===null) {
//     return null;
// }
// if (!isLoggedIn) {
//     return (
//         <LoginForm />
//     )
// }

// import { getUserName } from "../utils/storage.js";
// import logoutButton from "./logoutButton.js";

// export default function createMenu() {
//     const { pathname } = document.location;

//     // console.log(pathname);

//     const username = getUserName();

//     let authLink = `<li class="nav-item">
//                         <a class="menuIcon nav-link ${pathname === "/login.html" ? "active" : ""}" href="login.html"><i class="fas fa-user-circle fa-1x"></i></a>
//                     </li>

//     if(username) {
//         authLink = `<li class="nav-item">
//                         <a class="nav-link ${pathname === "/add.html" ? "active" : ""}" aria-current="page" href="add.html">Add product</i></a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link ${pathname === "/products.html" ? "active" : ""}" aria-current="page" href="products.html">Edit product</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="menuIcon nav-link ${pathname === "/cart.html" ? "active" : ""}" href="cart.html"><i class="fas fa-shopping-cart fa-1x"></i></a>
//                     </li>
//                     <li class="nav-item">
//                         <button class="btn btn-outline-primary menuIcon" id="logout">Logout</button>
//                     </li>`;
//     }

//     // console.log(username);

//     const container = document.querySelector(".menuContainer");

//     container.innerHTML = `<button class="navbar-toggler" 
//                             type="button"
//                             data-bs-toggle="collapse"
//                             data-bs-target="#navbarNav"
//                             aria-controls="navbarNav"
//                             aria-expanded="false"
//                             aria-label="Toggle navigation"
//                             >
//                                 <span class="navbar-toggler-icon"></span>
//                             </button>
//                             <div class="collapse navbar-collapse" id="navbarNav">
//                                 <ul class="navbar-nav">
//                                     <li class="nav-item">
//                                         <a class="nav-link ${pathname === "/index.html" ? "active" : ""}" aria-current="page" href="index.html">Home</a>
//                                     </li>
//                                     <li class="nav-item">
//                                         <a class="nav-link ${pathname === "/products.html" ? "active" : ""}" href="products.html">Products</a>
//                                     </li>
//                                     ${authLink}
//                                 </ul>
//                             </div>`;

//     logoutButton();

// }