import GithubIcon from '~icons/mdi/github.jsx';
import TwitterIcon from '~icons/mdi/twitter.jsx';
import LinkedIn from '~icons/mdi/linkedin.jsx';

export default function SocialMedia() {
  return (
    <>
      <ul class="flex py-4 mx-auto md:mx-0">
        <li class="mr-4">
          <a
            title="Github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Michael-Liendo"
            aria-label="Github"
          >
            <GithubIcon style={{ fontSize: '1.5em' }} />
          </a>
        </li>
        <li class="mr-4">
          <a
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/michaelliendo/"
            aria-label="LinkedIn"
          >
            <LinkedIn style={{ fontSize: '1.5em', color: '#0A66C2' }} />
          </a>
        </li>
        <li class="mr-4">
          <a
            title="Twitter"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/MichaelMLiendo"
            aria-label="Twitter"
          >
            <TwitterIcon style={{ fontSize: '1.5em', color: '#1DA1F2' }} />
          </a>
        </li>
      </ul>
      <div className="flex space-x-1 sm:space-x-4"></div>
    </>
  );
}
