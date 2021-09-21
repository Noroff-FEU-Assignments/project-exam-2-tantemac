import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";

export default function Booking() {
 return (
  <Layout>
   <Head />

   <div className="container">
    <h1>Bestill pianostemming</h1>
    <a>Privat</a>
    <a>Bedrift</a>
   </div>
  </Layout>
 );
}