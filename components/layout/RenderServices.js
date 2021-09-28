import Image from "next/image";
import DeleteButton from "./DeleteButton";

export default function RenderServices({services}) {
    <>
<h1 className="text-5xl pt-10 pb-6">Tenester</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
            {services.map((service) => {

                return <div className="flex-1 max-w-xs p-4" key={service.id}>
                            <h3>{service.title}</h3>
                            {isValidImage(service.image)&&(
                                <Image className="serviceImage" src={service.image} width={100} height={100} alt={service.title} />
                            )}
                            <p>Pris: {service.price},-</p>
                            <p>{service.description}</p>
                            {authToken&&(
                                <DeleteButton onDelete={() => onDelete(service.id)}/>
                            )}
                            {authToken&&(
                                <button><a href="/edit">Endre</a></button>
                            )}

                        </div>;
                    })}
            </div>
    </>
}