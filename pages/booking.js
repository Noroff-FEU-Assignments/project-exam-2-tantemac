import Link from "next/link";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";

export default function Booking() {
 return (
    <Layout>
        <Head title="Bestill pianostemming"/>
        <h1 className="text-4xl text-center pt-10 pb-6">Bestill pianostemming</h1>
        <div className="flex flex-col justify-center m-8 md:flex-row md:space-x-4 space-x-reverse">
        <Link href="/booking-private">
            <a className="p-8 mr-10 bg-green-700 text-white text-center text-xl rounded-lg focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 w-2/4">Privat</a>
        </Link>
        <Link href="/booking-public">
            <a className="p-8 ml-10 bg-yellow-600 text-white text-center text-xl rounded-lg focus:ring-4 focus:ring-yellow-600 focus:ring-opacity-50 w-2/4">Bedrift</a>
        </Link>
        </div>
    </Layout>
 );
}