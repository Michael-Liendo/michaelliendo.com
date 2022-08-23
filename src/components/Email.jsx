export default function Email() {
  return (
    <div className="flex flex-wrap flex-col items-center fixed -left-20 md:-left-16 bottom-0 opacity-50 md:opacity-100">
      <div className="mb-28 -rotate-90">
        <a
          className="transition duration-200 hover:text-teal-300"
          href="mailto:contact@michaelliendo.com"
        >
          contact@michaelliendo.com
        </a>
      </div>
      <div className="bg-white w-0.5 h-40"></div>
    </div>
  );
}
