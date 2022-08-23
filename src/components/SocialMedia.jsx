import GithubBorder from './Icons/GithubBorder';
import Linkedin from './Icons/Linkedin';
import Twitter from './Icons/Twitter';

export default function SocialMedia() {
  return (
    <div className="flex flex-wrap flex-col items-center fixed bottom-0 right-1 opacity-50 md:right-12 md:opacity-100">
      <div className="mb-9">
        <div className="mb-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/michaelliendo/"
          >
            <Linkedin />
          </a>
        </div>
        <div className="mb-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/MichaelMLiendo"
          >
            <Twitter />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Michael-Liendo"
          >
            <GithubBorder />
          </a>
        </div>
      </div>
      <div className="bg-white w-0.5 h-56"></div>
    </div>
  );
}
