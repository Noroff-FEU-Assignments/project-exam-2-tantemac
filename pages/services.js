import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Services(props) {

    console.log(props)
    
    return (
        <Layout>
            <Head title="Tenester"/>

            <div className="container">
                <h1>Tenester</h1>
                {props.services.map((service) => {
                return <h3 key={service.id}>{service.title}</h3>;
                })}
            </div>
        </Layout>
 );
}

export async function getStaticProps() {
    let services = [];

    try {
        const response = await axios.get(BASE_URL);
        console.log(response.data);
        services = response.data.data;
    } catch (error) {
        console.log(error);
    }

return {
    props: {
        services: services,
        }, 
    };
}