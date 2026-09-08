import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero bg-base-200 text-base-content py-4 px-2  flex items-center justify-center">
      <div className="hero-content text-center ">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-accent">KAWSER AHAMAD</span>
          </h1>
          <p className="py-6 text-base md:text-lg text-base-content/80 leading-relaxed">
            A Software Engineering student specializing in full-stack web
            development and competitive programming. I build clean, efficient
            applications—from robust command-line tools to modern web
            interfaces.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="btn btn-accent px-6">
              View My Work
            </Link>
            <a
              href="https://codeforces.com/profile/kawser0x"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-base-content/30 hover:border-accent hover:bg-accent hover:text-accent-content">
              My Codeforces
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
