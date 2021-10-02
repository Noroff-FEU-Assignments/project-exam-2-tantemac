import axios from "axios";
import { useForm } from "react-hook-form";
import { SERVICE_URL } from "../../constants/api";
import { useAuth } from "../utils/storage";
import { useState } from "react";
import { useRouter } from "next/router";
import DeleteButton from "./DeleteButton";


export default function EditForm ({orgService = {}, onSave}) {

    const [error, setError] = useState (false);
    const authToken = useAuth();
    const [service, setService] = useState(orgService);
    const router = useRouter();

    const onDelete = (id) => {
        console.log(id);
        axios.delete( `${SERVICE_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then(response => {
            console.log(response, "No er det sletta");
            router.push ("/services");
        }).catch(error => {
            console.error(error);
            setError(true);
        })
    }
    
    const { handleSubmit, register } = useForm({
        defaultValues: {
            title:service.title, 
            price:service.price,
            url:service.image,
            description:service.description
        }
    });

    const submit = (data) => { 
        console.log(data);
        setError(false);
        axios({
            method: service.id ? "PUT" : "POST",
            url: service.id
                ? `${SERVICE_URL}/${service.id}`
                : SERVICE_URL,
            data: {
                title: data.title, 
                price: data.price,
                image: data.url,
                description: data.description
            },
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then(response => {
            console.log(response);
            setService(response.data)
            if (typeof onSave === "function") {
                onSave(response.data);
            }
            router.push ("/services");
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
            
            <button type="submit" className="bg-black bg-opacity-75 text-white p-2 my-4 text-white w-full rounded hover:bg-opacity-50">Oppdater</button>
            {authToken&&(
                <DeleteButton onDelete={() => onDelete(service.id)}/>
             )}
        </form>
    )
}
