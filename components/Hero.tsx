import Image from "next/image";

import PatternRings from "./PatternRings";
import ModernButton from "./ModernButton";



const Hero = () => {
  return (
    <section className="body__mainContent">
      <div className="mainContent__profileContent">
        <PatternRings />
        <div className="mainContent__profileImage">
        <Image
            src="/images/image-profile-desktop.webp"
            alt="Here I am"
            fill={true}
            className="profileImage__desktopImage"
          />
          <Image
            src="/images/image-profile-tablet.webp"
            alt="Here I am"
            fill={true}
            className="profileImage__tableImage"
          />
          <Image
            src="/images/image-profile-mobile.webp"
            alt="Here I am"
            fill={true}
            className="profileImage__mobileImage"
          />
        </div>
        <Image
          src="/images/patterns/pattern-circle.svg"
          alt="Pattern circle"
          width="129"
          height="129"
          className="profileContent__patternCircle"
        />
      </div>
      <div className="mainContent__profileInfos">
        <h1>Nice to meet you! I'm Moro Samuele</h1>
        <p>Based in Sandrigo (VI) - Italy, I'm a Full-stack developer passionate about Javascript framework like React/NextJS and about building gorgeous web apps that users love.</p>
        <ModernButton />
      </div>
    </section>
  )
}

export default Hero;