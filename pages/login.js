import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import LoginForm from "../components/layout/LoginForm";

export default function Login() {
 return (
    <Layout>
        <Head title="Logg inn"/>
            <h1>Logg inn</h1>
            <LoginForm />
    </Layout>
 );
}