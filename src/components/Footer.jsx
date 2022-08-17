export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="flex mx-10 my-8 md:mx-24">
      <h5>
        <a
          href="https://michaelliendo.com"
          className="transition text-gray-400 duration-300 hover:text-slate-50"
        >
          Michael Liendo
        </a>{' '}
        &copy; {year}
      </h5>
    </div>
  );
}
