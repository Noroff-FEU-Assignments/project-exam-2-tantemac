import Head from "../../../components/layout/Head";
import Layout from "../../../components/layout/Layout";
import { ProtectedRoute } from "../../../components/layout/protectedRoute";
import UpdateEntryForm from "../../../components/layout/UpdateEntryForm";
import axios from "axios";
import { SERVICE_URL } from "../../../constants/api";

export default function Entry ({service}) {

    return (
        <Layout>
            <ProtectedRoute> 
                <UpdateEntryForm orgService={service}/>
            </ProtectedRoute>
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const response = await axios.get(`${SERVICE_URL}/${params.id}`);
    console.log(response.data)
return {
props: {
    service: response.data,
    }, 
};
}  

export async function getStaticPaths() {
    const response = await axios.get(SERVICE_URL);
    const paths = response.data.map(service => {
        return {
            params: {
                id: service.id + ""
            }
        }
    });
    return {
        paths, 
        fallback:true
    };
}  