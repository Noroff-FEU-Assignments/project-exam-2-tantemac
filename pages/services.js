import Head from "../components/layout/Head";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { SERVICE_URL } from "../constants/api";
import Image from "next/image";
import { useAuth } from "../components/utils/storage";
import DeleteButton from "../components/layout/DeleteButton";
import { useState } from "react";

const isValidImage = (url) => {
    return url.startsWith("/") || url.startsWith("http");
}

export default function Services({services}) {
    const authToken = useAuth();
    const [error, setError] = useState (false);

    return (
        <Layout>
            <Head title="Tenester"/>
            <h1 className="text-4xl text-center pt-10 pb-6">Tenester</h1>
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
                                    <button className="bg-yellow-600 p-2 rounded my-4 text-white w-full hover:bg-opacity-75">
                                        <Link href={`/edit/service/${service.id}`}>
                                            <a>Rediger</a>
                                        </Link>        
                                    </button>
                                )}
                            </div>;
                })}
                {authToken&&(
                    <Link href="/add">
                        <button className="bg-green-700 hover:bg-opacity-75 text-white text-lg rounded-lg">
                            <p className="text-8xl">+</p>
                            <p>Legg til ny teneste</p>
                        </button>
                    </Link>
                )}
            </div>
        </Layout>
 );
}  

export async function getStaticProps() {
    let services = [];

    try {
        const response = await axios.get(SERVICE_URL);
        console.log(response.data)

        services = response.data;
    } catch (error) {
        console.log(error);
        setError(true);
    }
    
return {
        props: {
            services: services,
        }, 
    };
}  