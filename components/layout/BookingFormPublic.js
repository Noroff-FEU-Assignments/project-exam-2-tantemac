import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

 // Formspree-endpoint: https://formspree.io/f/meqvdjyj

 export default function BookingFormPublic() {
    const [state, handleSubmit] = useForm("meqvdjyj");
  
    if (state.succeeded) {
      return <p>Takk for di bestilling!</p>;
    }
  
    const [fullname, setFullname] = useState("");
        const [orgnum, setOrgnum] = useState("");
        const [contact, setContact] = useState("");
        const [phone, setPhone] = useState("");
        const [email, setEmail] = useState("");
        const [adress, setAdress] = useState("");
        const [zip, setZip] = useState("");
        const [city, setCity] = useState("");
        const [message, setMessage] = useState("");
      
        return (
            <form
                onSubmit={handleSubmit}
                className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
            >
      
                <label
                    htmlFor="fullname"
                    className="text-gray-500 font-light mt-8 dark:text-gray-50"
                >
                Namn<span className="text-red-500 dark:text-gray-50">*</span>
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
                    htmlFor="orgnum"
                    className="text-gray-500 font-light mt-8 dark:text-gray-50"
                >
                Org.nr.<span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <input
                    type="text"
                    value={orgnum}
                    onChange={(e) => {
                        setOrgnum(e.target.value);
                    }}
                    name="orgnum"
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                />
    
    
                <label
                    htmlFor="contact"
                    className="text-gray-500 font-light mt-8 dark:text-gray-50"
                >
                Kontaktperson<span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => {
                        setContact(e.target.value);
                    }}
                    name="contact"
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                />
    
    
                <label
                    htmlFor="phone"
                    className="text-gray-500 font-light mt-8 dark:text-gray-50"
                >
                Telefon<span className="text-red-500 dark:text-gray-50">*</span>
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
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                E-post<span className="text-red-500">*</span>
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
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                Adresse<span className="text-red-500">*</span>
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
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                Postnummer<span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="zip"
                    value={zip}
                    onChange={(e) => {
                        setZip(e.target.value);
                    }}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                />
    
    
                <label
                    htmlFor="city"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                Stad<span className="text-red-500">*</span>
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
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                Melding<span className="text-red-500">*</span>
                </label>
                <textarea
                    name="message"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                ></textarea>
                
                <div className="flex flex-row items-center justify-start">
                    <button
                        type="submit"
                        className="px-10 mt-8 py-2 bg-red text-gray-500 rounded-md text-lg flex flex-row items-center"
                    >
                    Bestill
                    </button>
                </div>
            </form>
        );
    }

// export default function BookingFormPublic() {
//     const [fullname, setFullname] = useState("");
//     const [orgnum, setOrgnum] = useState("");
//     const [contact, setContact] = useState("");
//     const [phone, setPhone] = useState("");
//     const [email, setEmail] = useState("");
//     const [adress, setAdress] = useState("");
//     const [zip, setZip] = useState("");
//     const [city, setCity] = useState("");
//     const [message, setMessage] = useState("");
  
//     return (
//         <form
//             // onSubmit={handleSubmit}
//             className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
//         >
  
//             <label
//                 htmlFor="fullname"
//                 className="text-gray-500 font-light mt-8 dark:text-gray-50"
//             >
//             Namn<span className="text-red-500 dark:text-gray-50">*</span>
//             </label>
//             <input
//                 type="text"
//                 value={fullname}
//                 onChange={(e) => {
//                     setFullname(e.target.value);
//                 }}
//                 name="fullname"
//                 className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//             />


//             <label
//                 htmlFor="orgnum"
//                 className="text-gray-500 font-light mt-8 dark:text-gray-50"
//             >
//             Org.nr.<span className="text-red-500 dark:text-gray-50">*</span>
//             </label>
//             <input
//                 type="text"
//                 value={orgnum}
//                 onChange={(e) => {
//                     setOrgnum(e.target.value);
//                 }}
//                 name="orgnum"
//                 className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//             />


//             <label
//                 htmlFor="contact"
//                 className="text-gray-500 font-light mt-8 dark:text-gray-50"
//             >
//             Kontaktperson<span className="text-red-500 dark:text-gray-50">*</span>
//             </label>
//             <input
//                 type="text"
//                 value={contact}
//                 onChange={(e) => {
//                     setContact(e.target.value);
//                 }}
//                 name="contact"
//                 className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//             />


//             <label
//                 htmlFor="phone"
//                 className="text-gray-500 font-light mt-8 dark:text-gray-50"
//             >
//             Telefon<span className="text-red-500 dark:text-gray-50">*</span>
//             </label>
//             <input
//                 type="number"
//                 value={phone}
//                 onChange={(e) => {
//                     setPhone(e.target.value);
//                 }}
//                 name="phone"
//                 className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//             />
           
  
//             <label
//                 htmlFor="email"
//                 className="text-gray-500 font-light mt-4 dark:text-gray-50"
//             >
//             E-post<span className="text-red-500">*</span>
//             </label>
//             <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => {
//                     setEmail(e.target.value);
//                 }}
//                 className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//             />


//             <label
//                 htmlFor="adress"
//                 className="text-gray-500 font-light mt-4 dark:text-gray-50"
//             >
//             Adresse<span className="text-red-500">*</span>
//             </label>
//             <input
//                 type="text"
//                 name="adress"
//                 value={adress}
//                 onChange={(e) => {
//                     setAdress(e.target.value);
//                 }}
//                 className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//             />

//             <label
//                 htmlFor="zip"
//                 className="text-gray-500 font-light mt-4 dark:text-gray-50"
//             >
//             Postnummer<span className="text-red-500">*</span>
//             </label>
//             <input
//                 type="text"
//                 name="zip"
//                 value={zip}
//                 onChange={(e) => {
//                     setZip(e.target.value);
//                 }}
//                 className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//             />


//             <label
//                 htmlFor="city"
//                 className="text-gray-500 font-light mt-4 dark:text-gray-50"
//             >
//             Stad<span className="text-red-500">*</span>
//             </label>
//             <input
//                 type="text"
//                 name="city"
//                 value={city}
//                 onChange={(e) => {
//                     setCity(e.target.value);
//                 }}
//                 className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//             />
           

//             <label
//                 htmlFor="message"
//                 className="text-gray-500 font-light mt-4 dark:text-gray-50"
//             >
//             Melding<span className="text-red-500">*</span>
//             </label>
//             <textarea
//                 name="message"
//                 value={message}
//                 onChange={(e) => {
//                     setMessage(e.target.value);
//                 }}
//                 className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//             ></textarea>
            
//             <div className="flex flex-row items-center justify-start">
//                 <button
//                     type="submit"
//                     className="px-10 mt-8 py-2 bg-red text-gray-500 rounded-md text-lg flex flex-row items-center"
//                 >
//                 Bestill
//                 </button>
//             </div>
//         </form>
//     )
// }