import Translate from './Translate';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="w-full px-4 flex items-center justify-center">
        <div className="h-[70px] flex items-center justify-center">
          <small>
            Made with ❤️ by Michael Liendo &copy; {currentYear} | <Translate />
          </small>
        </div>
      </footer>
    </>
  );
}
