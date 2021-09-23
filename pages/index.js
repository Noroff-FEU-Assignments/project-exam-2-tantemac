import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";

export default function Home() {
 return (
    <Layout>
        <Head />
        <div className="circle">
            <p>Pianostemmar</p>
            <p>Søre Sunnmøre og Nordfjord</p>
        </div>
    </Layout>
 );
}