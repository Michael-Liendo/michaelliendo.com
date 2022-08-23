import GithubBorder from './Icons/GithubBorder';
import Linkedin from './Icons/Linkedin';
import Twitter from './Icons/Twitter';

export default function SocialMedia() {
  return (
    <div className="flex flex-wrap flex-col items-center fixed bottom-0 right-12">
      <div className="mb-9">
        <div className="mb-5">
          <a href="https://www.linkedin.com/in/michaelliendo/">
            <Linkedin />
          </a>
        </div>
        <div className="mb-4">
          <a href="https://twitter.com/MichaelMLiendo">
            <Twitter />
          </a>
        </div>
        <div>
          <a href="https://github.com/Michael-Liendo">
            <GithubBorder />
          </a>
        </div>
      </div>
      <div className="bg-white w-0.5 h-56"></div>
    </div>
  );
}
