import Link from "next/link";

async function getNotes() {
    const response = await fetch('http://127.0.0.1:8090/api/collections/notes/records', { cache: 'no-store' });
    const data = await response.json();
    return data?.items as any[];
}

export default async function NotesPages() {
    const notes = await getNotes();
    // console.log(notes);

    return(
        <div>
            <h1>Notes</h1>
            <div>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />
                })}
            </div>
        </div>
    );
}

function Note({ note } : any) {
    const { id, title } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
            </div>
        </Link>

    )
}