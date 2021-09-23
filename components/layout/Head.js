import NextHead from "next/head";

export default function Head({ title = "" }) {
 return (
    <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
            {title}
            {title ? " | " : ""}Pianostemmar.no
        </title>
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
 );
}