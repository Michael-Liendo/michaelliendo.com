import GithubBorder from './Icons/GithubBorder';
import Linkedin from './Icons/Linkedin';
import Twitter from './Icons/Twitter';

export default function SocialMedia() {
  return (
    <div className="flex flex-wrap flex-col items-center fixed bottom-0 right-1 opacity-50 md:right-12 md:opacity-100">
      <div className="mb-9">
        <div className="mb-5 transition duration-300 hover:-translate-y-1">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/michaelliendo/"
            aria-label="Linkedin"
          >
            <Linkedin />
          </a>
        </div>
        <div className="mb-4 transition duration-300 hover:-translate-y-1">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/MichaelMLiendo"
            aria-label="Twitter"
          >
            <Twitter />
          </a>
        </div>
        <div className="transition duration-300 hover:-translate-y-1">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Michael-Liendo"
            aria-label="Github"
          >
            <GithubBorder />
          </a>
        </div>
      </div>
      <div className="bg-white w-0.5 h-56"></div>
    </div>
  );
}
