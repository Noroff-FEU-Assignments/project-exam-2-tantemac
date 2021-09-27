import Link from "next/link";

export default function Layout({ children }) {
 return (
  <>
   <nav>
        <Link href="/">
            <a>Heim</a>
        </Link>
        <Link href="/about">
            <a>Om meg</a>
        </Link>
        <Link href="/services">
            <a>Tenester</a>
        </Link>
        <Link href="/questions">
            <a>Spørsmål og svar</a>
        </Link>
        <Link href="/booking">
            <a>Bestill pianostemming</a>
        </Link>
        <Link href="/login">
            <a>Logg inn</a>
        </Link>
   </nav>

   <div className="container mx-auto">{children}</div>

   <footer className="py-10 mt-10 bg-current">
      <p className="text-gray-50 text-center">© Øystein Eckhoff Holsvik</p>
   </footer>
  </>
 );
}