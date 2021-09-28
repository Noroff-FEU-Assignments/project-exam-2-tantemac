import Link from "next/link";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";

export default function Booking() {
 return (
    <Layout>
        <Head title="Bestill pianostemming"/>
        <h1>Bestill pianostemming</h1>
        <Link href="/booking-private">
            <a>Privat</a>
        </Link>
        <Link href="/booking-public">
            <a>Bedrift</a>
        </Link>
    </Layout>
 );
}