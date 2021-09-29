import axios from "axios";
import { useForm } from "react-hook-form";
import { SERVICE_URL } from "../../constants/api";
import { setJWT, useAuth } from "../utils/storage";
import { useState } from "react";

export default function AddForm () {

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
            <button className="bg-green-700 text-white p-2 my-4 text-white w-full rounded hover:bg-opacity-75" type="submit">Legg til</button>
        </form>
    )
}