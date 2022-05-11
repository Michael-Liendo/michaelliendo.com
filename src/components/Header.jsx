import Navbar from './Navbar';
import SocialMedia from './SocialMedia';

export default function Header() {
  return (
    <header className="h-30 bg-black">
      <div className="flex justify-between">
        <h1 className="ml-16 mt-5 text-5xl font-mono font-black text-white">
          Michael Liendo
        </h1>
        <div className="mr-16 mt-8">
          <Navbar />
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <aside className="ml-16 mt-3.5 font-sans font-bold text-lg text-white">
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
