import GithubIcon from '~icons/mdi/github.jsx';
import TwitterIcon from '~icons/mdi/twitter.jsx';
import LinkedIn from '~icons/mdi/linkedin.jsx';

export default function SocialMedia() {
  return (
    <>
      <ul className="flex py-4 mx-auto md:mx-0">
        <li className="mr-4">
          <a
            title="Github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Michael-Liendo"
            aria-label="Github"
          >
            <GithubIcon className="w-7 h-7" />
          </a>
        </li>
        <li className="mr-4">
          <a
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/michaelliendo/"
            aria-label="LinkedIn"
          >
            <LinkedIn className="w-7 h-7" style={{ color: '#0A66C2' }} />
          </a>
        </li>
        <li className="mr-4">
          <a
            title="Twitter"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/MichaelMLiendo"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-7 h-7" style={{ color: '#1DA1F2' }} />
          </a>
        </li>
      </ul>
      <div className="flex space-x-1 sm:space-x-4"></div>
    </>
  );
}
