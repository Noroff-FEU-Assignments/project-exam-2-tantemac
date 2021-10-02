import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";

export default function Home() {
 return (
    <Layout>
        <Head />
        <div className="flex justify-center my-80">
            <div className="flex-col text-center font-heading">
                <p className="text-2xl sm:text-5xl md:text-7xl">Pianostemmar</p>
                <p className="text-xl sm:text-xl md:text-4xl">Søre Sunnmøre og Nordfjord</p>
            </div>
        </div>
    </Layout>
 );
}