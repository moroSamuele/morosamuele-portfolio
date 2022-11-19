import Link from "next/link";

import SocialsBar from "./SocialsBar";


const TopBottomBar = () => {
  return (
    <>
      <Link href="/" className="body__mainLogo">
          morosamuele
      </Link>

      <SocialsBar />
    </>
  )
}

export default TopBottomBar;