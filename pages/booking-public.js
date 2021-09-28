import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import BookingFormPublic from "../components/layout/BookingFormPublic";


export default function BookingPublic() {
 return (
    <Layout>
        <Head title="Bedriftskunde"/>
        <h1>Bestill som bedriftskunde</h1>
        <BookingFormPublic />
    </Layout>
 );
}