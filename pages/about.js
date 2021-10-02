import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Image from "next/image";

export default function About() {
 return (
    <Layout>
        <Head title="Om meg"/>
        <h1 className="text-4xl text-center pt-10 pb-6">Om meg</h1>
        <div className="flex flex-wrap justify-center">
            <Image src="/oystein.png" width="300" height="300" className="rounded-full shadow-lg"/>
            <div className="p-8 rounded-lg shadow-lg max-w-screen-sm m-4">
                <p>Namnet mitt er Øystein Eckhoff Holsvik, og eg er utdanna som pianostemmar og -teknikar i Newark on Trent, England.</p>
                <p>Eg har jobba som pianostemmar på Sunnmøre og i Nordfjord sidan 2015.</p>
                <p className="mt-2">Når eg ikkje stemmer piano og flygel reiser eg rundt som trubadur og bandmusikar.</p>
            </div>
        </div>
    </Layout>
 );
}