import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

// Formspree-endpoint: https://formspree.io/f/xdoyjnry

export default function BookingFormPrivate() {
    const [state, handleSubmit] = useForm("xdoyjnry");
  
    if (state.succeeded) {
      return <p className="m-7 p-3 bg-green-700 text-white rounded">Takk for di bestilling! Du høyrer frå meg snart.</p>;
    }
  
        const [fullname, setFullname] = useState("");
        const [phone, setPhone] = useState("");
        const [email, setEmail] = useState("");
        const [adress, setAdress] = useState("");
        const [zip, setZip] = useState("");
        const [city, setCity] = useState("");
        const [message, setMessage] = useState("");
  
    return (

        <form
        onSubmit={handleSubmit}
        className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">

        <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50">
            Fullt namn
                <span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
            type="text"
            value={fullname}
            onChange={(e) => {
                setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label
            htmlFor="phone"
            className="text-gray-500 font-light mt-8 dark:text-gray-50">
            Telefon
                <span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
            type="number"
            value={phone}
            onChange={(e) => {
                setPhone(e.target.value);
            }}
            name="phone"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />
    
        <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50">
            E-post
                <span className="text-red-500">*</span>
        </label>
        <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label
            htmlFor="adress"
            className="text-gray-500 font-light mt-4 dark:text-gray-50">
            Adresse
                <span className="text-red-500">*</span>
        </label>
        <input
            type="text"
            name="adress"
            value={adress}
            onChange={(e) => {
                setAdress(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label
            htmlFor="zip"
            className="text-gray-500 font-light mt-4 dark:text-gray-50">
            Postnummer
                <span className="text-red-500">*</span>
        </label>
        <input
            type="number"
            name="zip"
            value={zip}
            onChange={(e) => {
                setZip(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label
            htmlFor="city"
            className="text-gray-500 font-light mt-4 dark:text-gray-50">
            Stad
                <span className="text-red-500">*</span>
        </label>
        <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => {
                setCity(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />
        
        <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50">
            Melding
                <span className="text-red-500">*</span>
        </label>
        <textarea
            name="message"
            value={message}
            onChange={(e) => {
                setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500">
        </textarea>
        
        <div className="flex flex-row items-center justify-start">
            <button
                type="submit"
                className="px-10 mt-8 py-2 bg-black opacity-75 text-white rounded-md text-lg flex flex-row w-full items-center hover:bg-opacity-50">
                Bestill pianostemming
            </button>
        </div>
    </form>
    );
  }
  
