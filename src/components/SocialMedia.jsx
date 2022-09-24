import GithubBorder from './Icons/GithubBorder';
import Linkedin from './Icons/Linkedin';
import Twitter from './Icons/Twitter';

export default function SocialMedia() {
  return (
    <div>
      <div className="mt-10 md:mt-0 md:flex md:flex-wrap md:flex-col md:items-center md:fixed md:bottom-0 md:right-4 md:opacity-100">
        <div className="flex md:block mb-9">
          <div className="mr-4 md:mb-5 transition duration-300 hover:-translate-y-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/michaelliendo/"
              aria-label="Linkedin"
            >
              <Linkedin />
            </a>
          </div>
          <div className="mr-4 md:mb-4 transition duration-300 hover:-translate-y-1">
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
        <div className="hidden md:block bg-white w-0.5 h-56"></div>
      </div>
      <div className="hidden md:block">
        <div className="flex">
          <div className="mr-4 transition duration-300 hover:-translate-y-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/michaelliendo/"
              aria-label="Linkedin"
            >
              <Linkedin />
            </a>
          </div>
          <div className="mr-4 transition duration-300 hover:-translate-y-1">
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
      </div>
    </div>
  );
}
