import Image from 'next/image';
import Link from 'next/link';

export default function NoteCard({ note, view }) {
  return (
    <>
      {view === 1 ? (
        <Link
          title={note.title}
          className="transition md:flex my-10 md:my-0 md:col-span-full duration-300 hover:-translate-y-2"
          href={`/notes/${note.url}`}
          passHref
          id={note.id}
        >
          <div className="mr-10">
            {note.cover && (
              <Image
                className="rounded-lg w-[60vw] h-96 object-cover"
                src={note.cover}
                alt={note.title}
                width="600"
                height="600"
              />
            )}
          </div>
          <div>
            <p className="my-3 text-slate-400">{note.date}</p>
            <h2 className="text-2xl">{note.title}</h2>
            <div className="flex mt-1 mb-4">
              {note.tags.map((tag) => (
                <p className="mr-2 text-sky-600" key={tag.id}>
                  {tag.name}
                </p>
              ))}
            </div>
            <p className="text-lg text-slate-400">{note.description}</p>
          </div>
        </Link>
      ) : (
        <div className="transition my-10 md:my-0 duration-300 hover:-translate-y-2">
          <Link
            title={note.title}
            href={`/notes/${note.url}`}
            passHref
            id={note.id}
          >
            {note.cover && (
              <Image
                title={note.title}
                src={note.cover}
                className="rounded-lg object-cover"
                width="600"
                height="600"
                alt={note.description}
              />
            )}
            <p className="my-3 text-slate-400">{note.date}</p>
            <h2 className="text-2xl">{note.title}</h2>
            <div className="flex mt-1 mb-4">
              {note.tags.map((tag) => (
                <p className="mr-2 text-sky-600 " key={tag.id}>
                  {tag.name}
                </p>
              ))}
            </div>
            <p className="text-lg text-slate-400">{note.description}</p>
          </Link>
        </div>
      )}
    </>
  );
}
