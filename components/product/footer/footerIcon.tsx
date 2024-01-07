import Image from "next/image";
import Link from "next/link";

interface FooterIconProps {
  icon: string;
  link: string;
  name: string;
}

function FooterIcon({ icon, link, name }: FooterIconProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={icon}
        alt={name}
        width={28}
        height={28}
        className="object-contain"
        style={{ aspectRatio: "1/1" }}
      />
    </Link>
  );
}

export default FooterIcon;
