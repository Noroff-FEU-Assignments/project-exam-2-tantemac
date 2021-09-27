import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import { ProtectedRoute } from "../../components/layout/protectedRoute";

export default function Admin() {
 return (
    <Layout>
        <ProtectedRoute>
        <Head title="Admin"/>
        <h1>Administrer pianostemmar.no</h1>
        </ProtectedRoute>
    </Layout>
 );
}