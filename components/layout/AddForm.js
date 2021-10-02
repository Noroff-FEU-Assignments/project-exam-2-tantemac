import axios from "axios";
import { useForm } from "react-hook-form";
import { SERVICE_URL } from "../../constants/api";
import { useAuth } from "../utils/storage";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddForm () {

    const [error, setError] = useState (false);
    const authToken = useAuth();
    const router = useRouter();

    const { handleSubmit, register } = useForm();

    const submit = (data) => { 
        console.log(data);
        setError(false);
        axios.post( SERVICE_URL, {
            title: data.title, 
            price: data.price,
            image: data.url,
            description: data.description
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then(response => {
            router.push ("/services");
            console.log(response);
        }).catch(error => {
            console.error(error);
            setError(true);
        })
    }

    return (
        <form 
            onSubmit={handleSubmit(submit)}
            className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500 mt-10">
            {error&& (
                <div className="m-7 p-3 bg-red-700 text-white rounded">Du må fylle ut alle felta. Med unntak av bilete.</div>
            )}
                <label htmlFor="title" className="text-gray-500 font-light mt-8 dark:text-gray-50">Tittel
                    <span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <input 
                    type="text" 
                    placeholder="Tittel" 
                    {...register("title")}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500">
                </input>

                <label htmlFor="price" className="text-gray-500 font-light mt-8 dark:text-gray-50">Pris
                    <span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <input 
                    type="text" 
                    placeholder="Pris" 
                    {...register("price")}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500">
                </input>
                
                <label htmlFor="url" className="text-gray-500 font-light mt-8 dark:text-gray-50">Bilde-URL</label>
                <input 
                    type="text" 
                    placeholder="Bilde-url" 
                    {...register("url")}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500">
                </input>
                
                <label htmlFor="description" className="text-gray-500 font-light mt-8 dark:text-gray-50">Beskrivelse
                    <span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <textarea 
                    placeholder="Beskrivelse" 
                    {...register("description")}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500 h-80 md:h-40">
                </textarea>
           
            <button className="bg-black bg-opacity-75 text-white p-2 my-4 text-white w-full rounded hover:bg-opacity-50" type="submit">Legg til</button>
        </form>
    )
}
