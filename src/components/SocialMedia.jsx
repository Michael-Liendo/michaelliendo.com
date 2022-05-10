import Image from 'next/image';
import Link from 'next/link';

import Twitter from '../../public/images/social-media-icons/twitter.svg';
import Github from '../../public/images/social-media-icons/github.svg';
import Linkedin from '../../public/images/social-media-icons/linkedin.svg';
import StackOverflow from '../../public/images/social-media-icons/stack-overflow.svg';

export default function SocialMedia() {
  let height = '30';
  let width = '30';

  return (
    <div className="flex">
      <Link href="https://twitter.com/Michael__Liendo">
        <a className="p-3" target="_blank">
          <Image
            src={Twitter}
            alt="Michael Liendo's Twitter"
            height={height}
            width={width}
          />
        </a>
      </Link>
      <Link href="https://github.com/Michael-Liendo">
        <a className="p-3" target="_blank">
          <Image
            src={Github}
            alt="Michael Liendo's Github"
            height={height}
            width={width}
          />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/michaelliendo/">
        <a className="p-3" target="_blank">
          <Image
            src={Linkedin}
            alt="Michael Liendo's Linkedin"
            height={height}
            width={width}
          />
        </a>
      </Link>
      <Link href="https://stackoverflow.com/users/15587108/michael-liendo">
        <a className="p-3" target="_blank">
          <Image
            src={StackOverflow}
            alt="Michael Liendo's Stack Overflow"
            height={height}
            width={width}
          />
        </a>
      </Link>
    </div>
  );
}
