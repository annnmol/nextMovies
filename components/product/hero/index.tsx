import Image from "next/image";

//user defined
const companyLogo = "/assets/icons/tv.svg";
const bannerImage = "/assets/icons/anime.webp";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src={companyLogo}
          alt="nextMovies"
          width={100}
          height={100}
          className="object-contain"
          sizes="auto"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Epic Choices, <span className="red-gradient">Endless Movies</span> -
          nextMovies!
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image
          src={bannerImage}
          alt="banner"
          fill
          className="object-contain"
          sizes="auto"
        />
      </div>
    </header>
  );
}

export default Hero;
