import Image from "next/image";

//user defined
import FooterIcon from "./footerIcon";

const instagram = "/assets/icons/instagram.svg";
// const twitter = "/assets/icons/twitter.svg";
const github = "/assets/icons/github.svg";
const linkedin = "/assets/icons/linkedin.svg";
const companyLogo = "/assets/icons/tv.svg";

const footerIcons = [
  {
    name: "instagram",
    src: instagram,
    link: "https://www.instagram.com/annnmol",
  },
  // {
  //   name: "twitter",
  //   src: twitter,
  //   link: "https://twitter.com/annnmol",
  // },
  {
    name: "github",
    src: github,
    link: "https://www.github.com/annnmol",
  },
  {
    name: "linkedin",
    src: linkedin,
    link: "https://www.linkedin.com/in/anmoltanwar",
  },
];

const title = "NextMovies";
const year = new Date().getFullYear();
const copyRight = `©${title} ${year}`;

function Footer() {
  return (
    <footer className="flex justify-between items-center gap-2 flex-wrap bg-black sm:px-16 py-4 px-8">
      <p className="text-base font-bold text-white">{copyRight}</p>
      <Image
        src={companyLogo}
        alt={title}
        width={28}
        height={28}
        style={{ aspectRatio: "1/1" }}
        sizes="auto"
        className="object-contain"
      />
      <div className="flex items-center justify-between gap-6">
        {footerIcons.map((item, index: number) => (
          <FooterIcon
            icon={item.src}
            name={item.name}
            link={item.link}
            key={index}
          />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
