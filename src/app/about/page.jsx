import Image from "next/image";
import kawser from "../../../public/kawser.jpg";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="py-3 bg-base-200 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-2 w-full">
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="mt-4 text-base-content/70">
            Get to know the developer behind the code.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-2 bg-accent opacity-20 rounded-full blur-xl group-hover:opacity-40 transition duration-500"></div>

              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-accent shadow-2xl relative overflow-hidden transform group-hover:scale-105 transition duration-500">
                <Image
                  src={kawser}
                  alt="Kawser"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 16rem, 20rem"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 bg-base-100 shadow-xl rounded-3xl p-8 md:p-12 border border-base-300">
            <div className="space-y-6 text-lg text-base-content/90 leading-relaxed">
              <p>
                👋 Hi, I am Kawser. I am a{" "}
                <strong>Software Engineering student</strong> with a deep
                passion for building systems that solve real-world problems.
                While I am currently diving deep into the modern web ecosystem
                with the MERN stack and Next.js, my foundation is built on core
                computer science principles.
              </p>
              <p>
                ⚡ When I am not designing responsive UIs, you can usually find
                me sharpening my algorithmic problem-solving skills through
                competitive programming, often writing{" "}
                <strong>C++ solutions for Codeforces challenges</strong>. I love
                the thrill of optimizing a piece of code to run just a fraction
                of a second faster.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="btn btn-accent px-8 rounded-full shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all">
                Let's Connect
              </a>
              <a
                href="/projects"
                className="btn btn-outline btn-accent px-8 rounded-full hover:-translate-y-1 transition-all">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
