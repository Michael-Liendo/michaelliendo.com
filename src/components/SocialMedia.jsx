import GithubIcon from '~icons/mdi/github.jsx';
import TwitterIcon from '~icons/mdi/twitter.jsx';
import Linkedin from '~icons/mdi/linkedin';

export default function SocialMedia() {
  return (
    <div className="flex space-x-1 sm:space-x-4">
      <a
        title="Linkedin"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/michaelliendo/"
        aria-label="Linkedin"
      >
        <Linkedin style={{ fontSize: '1.5em', color: '#0A66C2' }} />
      </a>
      <a
        title="Twitter"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/MichaelMLiendo"
        aria-label="Twitter"
      >
        <TwitterIcon style={{ fontSize: '1.5em', color: '#1DA1F2' }} />
      </a>
      <a
        title="Github"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Michael-Liendo"
        aria-label="Github"
      >
        <GithubIcon style={{ fontSize: '1.5em' }} />
      </a>
    </div>
  );
}
