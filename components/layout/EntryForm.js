import axios from "axios";
import { useForm } from "react-hook-form";
import { SERVICE_URL } from "../../constants/api";
import { setJWT, useAuth } from "../utils/auth";
import { useState } from "react";
import { useRouter } from "next/router";

export default function EntryForm () {

    const [error, setError] = useState (false);
    const authToken = useAuth();

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
            console.log(response);
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
            <button type="submit">Lagre</button>
        </form>
    )
}