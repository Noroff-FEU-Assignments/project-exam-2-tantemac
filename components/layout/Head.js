import NextHead from "next/head";

export default function Head({ title = "" }) {
 return (
    <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
            {title}
            {title ? " | " : ""}Pianostemmar.no
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Roboto:wght@300&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
  </NextHead>
 );
}
