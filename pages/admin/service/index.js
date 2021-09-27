import router from "next/router";
import Head from "../../../components/layout/Head";
import Layout from "../../../components/layout/Layout";
import { ProtectedRoute } from "../../../components/layout/protectedRoute";
import UpdateEntryForm from "../../../components/layout/UpdateEntryForm";

export default function Entry () {
    return (
        <Layout>
            <ProtectedRoute> 
                <UpdateEntryForm onSave={(service) => router.push(`/admin/service/${service.id}`)} />
            </ProtectedRoute>
        </Layout>
    )
}