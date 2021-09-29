export default function DeleteButton({onDelete}) {
    return <button className="bg-red-700 text-white p-2 my-1 text-white w-full rounded hover:bg-opacity-75" type="button" onClick={onDelete}>Slett</button>
}