import Translate from './Translate';

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="flex justify-between mx-10 my-8 md:mx-24">
      <footer>
        <a
          title="Michael Liendo"
          href="https://michaelliendo.com"
          className="transition text-gray-400 duration-300 hover:text-slate-50"
        >
          Michael Liendo
        </a>{' '}
        &copy; {year}
      </footer>
      <div className="hidden md:block">
        <Translate />
      </div>
    </div>
  );
}
