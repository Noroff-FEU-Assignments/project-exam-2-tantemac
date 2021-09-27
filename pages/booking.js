import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";

export default function Booking() {
 return (
    <Layout>
        <Head title="Bestill pianostemming"/>
        <h1>Bestill pianostemming</h1>
        <a href="/booking-private">Privat</a>
        <a href="/booking-public">Bedrift</a>
    </Layout>
 );
}