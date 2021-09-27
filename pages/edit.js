import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { ProtectedRoute } from "../components/layout/ProtectedRoute";
import UpdateEntryForm from "../components/layout/UpdateEntryForm";

export default function Entry () {
    return (
        <>
            <Layout>
                <Head title="Logg inn"/>
                <ProtectedRoute> 
                    <UpdateEntryForm onSave={(service) => router.push(`/services/${service.id}`)} />
                </ProtectedRoute>
            </Layout>
        </>
    )
}

