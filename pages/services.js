import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { SERVICE_URL } from "../constants/api";
import Image from "next/image";
import { useAuth } from "../components/utils/auth";
import DeleteButton from "../components/layout/DeleteButton";
import { useState } from "react";
import { useRouter } from "next/router";

const isValidImage = (url) => {
    return url.startsWith("/") || url.startsWith("http");
}

export default function Services({services}) {
    const authToken = useAuth();
    const [error, setError] = useState (false);
    const router = useRouter;

    const onDelete = (id) => {
        console.log(id);
        axios.delete( `${SERVICE_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then(response => {
            console.log(response);
            router.reload();
        }).catch(error => {
            console.error(error);
            setError(true);
        })
    }
    return (
        <Layout>
            <Head title="Tenester"/>
            <h1 className="text-5xl pt-10 pb-6">Tenester</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
            {services.map((service) => {

                return <div className="flex-1 max-w-xs p-4" key={service.id}>
                            <h3>{service.title}</h3>
                            {isValidImage(service.image)&&(
                                <Image className="serviceImage" src={service.image} width={100} height={100} alt={service.title} />
                            )}
                            <p>Pris: {service.price},-</p>
                            <p>{service.description}</p>
                            {authToken&&(
                                <DeleteButton onDelete={() => onDelete(service.id)}/>
                            )}
                            {authToken&&(
                                <button><a href="/edit">Endre</a></button>
                            )}

                        </div>;
                })}
            </div>
        </Layout>
 );
}  

export async function getStaticProps() {
    const response = await axios.get(SERVICE_URL);
    console.log(response.data)
return {
props: {
    services: response.data,
    }, 
};
}  