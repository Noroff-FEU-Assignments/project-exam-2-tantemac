import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import LoginForm from "../components/layout/LoginForm";

export default function Login() {
 return (
    <Layout>
        <Head title="Logg inn"/>
            <h1 className="text-4xl text-center pt-10 pb-6">Logg inn</h1>
            <LoginForm />
    </Layout>
 );
}