import axios from "axios";
import { useForm } from "react-hook-form";
import { SERVICE_URL } from "../../constants/api";
import { useAuth } from "../utils/storage";
import { useState } from "react";
import DeleteButton from "./DeleteButton";


export default function EditForm ({orgService = {}, onSave}) {

    const [error, setError] = useState (false);
    const authToken = useAuth();
    const [service, setService] = useState(orgService);

    const onDelete = (id) => {
        console.log(id);
        axios.delete( `${SERVICE_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then(response => {
            console.log(response, "No er det sletta");
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
        }).catch(error => {
            console.error(error);
            setError(true);
        })
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            {error&& (
                <div className="m-7 p-3 bg-red-700 text-white rounded">Du må fylle ut alle felta. Med unntak av bilete.</div>
            )}
            <div>
                <input type="text" placeholder="Tittel" {...register("title")}></input>
            </div>
            <div>
                <input type="text" placeholder="Pris" {...register("price")}></input>
            </div>
            <div>
                <input type="text" placeholder="Bilde-url" {...register("url")}></input>
            </div>
            <div>
                <textarea placeholder="Beskrivelse" {...register("description")}></textarea>
            </div>
            <button type="submit" className="bg-green-700 text-white p-2 my-4 text-white w-full rounded hover:bg-opacity-75">Oppdater</button>
            {authToken&&(
                <DeleteButton onDelete={() => onDelete(service.id)}/>
             )}
        </form>
    )
}
