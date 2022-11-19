import Image from 'next/image';
import Link from 'next/link';

import SocialsData from '../data/socials.json'


const SocialLink = ({
  link,
  image,
  imageAlt,
} : {
  link: string;
  image: string;
  imageAlt: string;
}) => {
  return (
    <Link href={link} className="socialsContainer__socialImage">
      <Image
        src={image}
        alt={imageAlt}
        width="20"
        height="20"
      />
    </Link>
  )
}


const SocialsBar = () => {
  const socials = SocialsData.social

  return (
    <div className="body__socialsContainer">
      {
        socials.map((social, index) => {
          return (
            <SocialLink
              key={index}
              link={social.link}
              image={social.image}
              imageAlt={social.imageAlt}
            />
          )
        })
      }
    </div>
  )
}

export default SocialsBar;