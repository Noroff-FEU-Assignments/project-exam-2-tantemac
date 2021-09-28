import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import BookingFormPrivate from "../components/layout/BookingFormPrivate";

export default function BookingPrivate() {
 return (
    <Layout>
        <Head title="Privatkunde"/>
        <h1>Bestill som privatkunde</h1>
        <BookingFormPrivate />
    </Layout>
 );
}