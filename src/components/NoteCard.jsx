import Image from 'next/image';
import Link from 'next/link';
import CalendarIcon from '~icons/mdi/calendar-month';

export default function NoteCard({ note }) {
  return (
    <li>
      <Link
        href={`/notes/${note.url}`}
        className="mb-4 md:mb-0 last-of-type:mb-0"
      >
        <figure className="rounded overflow-hidden pb-4 flex justify-center items-center h-[150px]">
          <Image alt={note.title} src={note.cover} height={250} width={250} />
        </figure>
        <header>
          <h3
            className="text-xl py-4 font-extrabold cursor-pointer hover:text-link hover:underline"
            role="link"
          >
            {note.title}
          </h3>
        </header>
        <main className="pb-4">
          <p>{note.description}</p>
        </main>
        <footer className="flex flex-col">
          <div className="flex mb-2">
            <span className="flex items-center mr-2">
              <figure className="mr-2">
                <CalendarIcon size={16} />
              </figure>
              <time className="text-sm mr-2" datetime={note.date.toString()}>
                {note.date}
              </time>
            </span>
          </div>
          <ul className="flex flex-wrap">
            {note.tags.map((tag, index) => (
              <li className="text-sm mr-2 mb-2 " key={index}>
                <span className="inline-block mr-1 rounded-full bg-light-background-alt dark:bg-dark-background-alt py-1 px-2">
                  {tag.name}
                </span>
              </li>
            ))}
          </ul>
        </footer>
      </Link>
    </li>
  );
}
