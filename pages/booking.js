import Link from "next/link";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";

export default function Booking() {
 return (
    <Layout>
        <Head title="Bestill pianostemming"/>
        <h1 className="text-4xl text-center pt-10 pb-6">Bestill pianostemming</h1>
        <div className="flex flex-col justify-center m-8 space-x-reverse md:flex-row md:space-x-4">
        <Link href="/booking-private">
            <a className="p-8 mt-8 bg-black bg-opacity-75 text-white text-center text-xl rounded-lg focus:ring-4 focus:ring-black focus:ring-opacity-75 hover:bg-opacity-50 w-2/4 md:mr-10">Privatkunde</a>
        </Link>
        <Link href="/booking-public">
            <a className="p-8 mt-8 bg-black bg-opacity-75 text-white text-center text-xl rounded-lg focus:ring-4 focus:ring-black focus:ring-opacity-75 hover:bg-opacity-50 w-2/4 md:ml-10">Bedriftkunde</a>
        </Link>
        </div>
    </Layout>
 );
}