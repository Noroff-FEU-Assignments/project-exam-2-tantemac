import Head from "../../../components/layout/Head";
import Layout from "../../../components/layout/Layout";
import { ProtectedRoute } from "../../../components/layout/protectedRoute";
import EditForm from "../../../components/layout/EditForm";
import axios from "axios";
import { SERVICE_URL } from "../../../constants/api";

export default function Edit ({service}) {

    return (
        <Layout>
            <Head title="Rediger"/>
            <h1 className="hidden">Rediger teneste</h1>
            <ProtectedRoute> 
                <EditForm orgService={service}/>
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