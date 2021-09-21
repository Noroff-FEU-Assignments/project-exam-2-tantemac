import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import Image from "next/image";

export default function Services({services}) {
    return (
        <Layout>
            <Head title="Tenester"/>

            <div className="container">
                <h1>Tenester</h1>
                {services.map((service) => {

                return <div key={service.id}>
                            <h3>{service.title}</h3>
                            <Image src={service.image} width={300} height={300} alt={service.title} />
                            <p>Pris: {service.price},-</p>
                            <p>{service.description}</p>
                        </div>;
                })}
            </div>
        </Layout>
 );
}  

export async function getStaticProps() {
    const response = await axios.get(BASE_URL);
    console.log(response.data)
return {
props: {
    services: response.data,
    }, 
};
}  