import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import BookingFormPublic from "../components/layout/BookingFormPublic";


export default function BookingPublic() {
 return (
    <Layout>
        <Head title="Bedriftskunde"/>
        <h1 className="text-4xl text-center pt-10 pb-6">Bestill som bedriftskunde</h1>
        <BookingFormPublic />
    </Layout>
 );
}