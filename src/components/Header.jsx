import Navbar from './Navbar';
import SocialMedia from './SocialMedia';

export default function Header() {
  return (
    <header className="h-30 bg-black">
      <div className="flex justify-between">
        <h1 className="ml-4 mt-5 text-3xl font-mono font-black text-white lg:ml-16 sm:text-5xl">
          Michael Liendo
        </h1>
        <div className="mr-16 mt-8">
          <Navbar />
        </div>
      </div>
      <div className="lg:flex lg:justify-between lg:mt-5">
        <aside className="block ml-4 my-3.5 font-sans font-bold text-xs text-white lg:ml-16 lg:text-lg">
          Frontend Developer 👨🏻‍💻 mostly working with Javascript and web
          technologies like React.
        </aside>
        <div className="mr-16">
          <SocialMedia />
        </div>
      </div>
    </header>
  );
}
