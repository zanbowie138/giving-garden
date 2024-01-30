export default function Tag(name: string) {
    return (
        <>
            <span className="text-white text-sm text-center bg-gray-400 rounded-lg fit-content w-min p-2 text-nowrap m-1">{name}</span>
        </>
    );
}