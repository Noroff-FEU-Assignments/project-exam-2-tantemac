import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import AddForm from "../components/layout/AddForm";

export default function Add () {
    return (
        <>
            <Layout>
                <Head title="Rediger"/>
                <h1 className="hidden">Legg til teneste</h1>
                <AddForm />
            </Layout>
        </>
    )
}