import Link from "next/link";


const ModernButton = ({
  link = '#contactMe',
  text = 'Contact me'
} : {
  link?: string;
  text?: string;
}) => {
  return (
    <div className="modernButton__button">
      <Link href={link}>
        {text}
      </Link>
    </div>
  )
}

export default ModernButton;