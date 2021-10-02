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
        <form 
        onSubmit={handleSubmit(submit)}
        className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500 mt-2">
            {error&& (
                <div className="m-7 p-3 bg-red-700 text-white rounded">Ukjent brukernamn/passord</div>
            )}
            <input 
                name="username" 
                type="text" 
                placeholder="Brukarnamn" 
                {...register("username")}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500">                
            </input>
            <input 
                name="password" 
                type="password" 
                placeholder="Passord" 
                {...register("password")}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500">
            </input>
            <button className="bg-black bg-opacity-75 text-white p-2 my-4 mt-10 text-white w-full rounded hover:bg-opacity-50" type="submit">Logg inn</button>
        </form>
    )
}