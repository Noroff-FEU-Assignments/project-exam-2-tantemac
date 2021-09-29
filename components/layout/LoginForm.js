import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import { AUTH_URL } from "../../constants/api";
import { setJWT } from "../utils/storage";


export default function LoginForm () {

    const [error, setError] = useState (false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();

    const submit = (data) => { 
        console.log(data);
        setError(false);
        axios.post( AUTH_URL, {
            identifier: data.username, 
            password: data.password
        }).then(response => {
            console.log(response);
            setJWT(response.data.jwt);
            router.push ("/services");
        }).catch(error => {
            console.error(error);
            setError(true);
        })
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            {error&& (
                <div>Ukjent brukernamn/passord</div>
            )}
            <div>
                <input type="text" placeholder="Brukarnamn" {...register("username")}></input>
            </div>
            <div>
                <input type="password" placeholder="Passord" {...register("password")}></input>
            </div>
            <button type="submit">Logg inn</button>
        </form>
    )
}

// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useRouter } from "next/router"; 

// function LoginForm() {

//     const {
//       register,
//       handleSubmit,
//       formState: { errors },
//     } = useForm();

//     const router = useRouter();
  
//     const url = "http://localhost:1337/auth/local";
  
//     async function onSubmit(data) {
//       console.log(data);
//       try {
//         const response = await axios.post(url, data);
//         console.log("response", response.data);

//         window.localStorage.setItem("auth", JSON.stringify(response.data)); 

//         if (response.data) {
//             router.push("/admin");
//         }

//       } catch (error) {
//         console.log("error", error);
//       }
//     }
  
//     return (
//       <div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <input
//                 className="loginInput"
//                 name="identifier"
//                 placeholder="Username"
//                 {...register("identifier")}
//             />
//           </div>
//           <div>
//             <input
//                 className="loginInput"
//                 name="password"
//                 placeholder="Password"
//                 {...register("password")}
//                 type="password"
//             />
//           </div>
//           <button>Login</button>
//         </form>
//       </div>
//     );
//   }
  
//   export default LoginForm; 