import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import BookingFormPrivate from "../components/layout/BookingFormPrivate";

export default function BookingPrivate() {
 return (
    <Layout>
        <Head title="Privatkunde"/>
        <h1 className="text-4xl text-center pt-10 pb-6">Bestill som privatkunde</h1>
        <BookingFormPrivate />
    </Layout>
 );
}