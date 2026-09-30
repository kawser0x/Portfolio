"use client";

import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-base-200 text-base-content py-8 px-4 md:px-8 border-t border-base-300 relative mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-6">
        {/* Column 1: Brand & Bio */}
        <div>
          <h3 className="text-xl font-bold">
            <span className="text-accent">KAWSER</span> AHAMAD
          </h3>
          <p className="text-base-content/70 text-sm mt-2 leading-relaxed">
            I build fast, clean, and impactful web applications turning ideas into reality, one perfect pixel and line of code at a time.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2 mt-4">
            <a
              href="https://github.com/kawser0x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-base-100 border border-base-300 hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/kawser-ahamad-09k/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-base-100 border border-base-300 hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://codeforces.com/profile/kawser0x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codeforces"
              className="w-9 h-9 rounded-full bg-base-100 border border-base-300 hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all font-bold text-xs">
              CF
            </a>
            <a
              href="mailto:kawserswe@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-base-100 border border-base-300 hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/60 mb-3">
            QUICK LINKS
          </h4>
          <ul className="space-y-1.5 text-sm text-base-content/80">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            </li>
            <li>
              <Link href="/skills" className="hover:text-accent transition-colors">Skills</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Get in Touch */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/60 mb-3">
            GET IN TOUCH
          </h4>
          <ul className="space-y-1.5 text-sm text-base-content/80">
            <li>
              <a href="mailto:kawserswe@gmail.com" className="hover:text-accent transition-colors">
                kawserswe@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+8801852249441" className="hover:text-accent transition-colors">
                +8801852249441
              </a>
            </li>
            <li className="text-base-content/70">Sylhet, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar & Scroll To Top */}
      <div className="max-w-6xl mx-auto pt-4 border-t border-base-300 flex justify-between items-center text-xs text-base-content/60">
        <p>&copy; {new Date().getFullYear()} Kawser Ahamad. All rights reserved.</p>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="btn btn-accent btn-circle btn-sm shadow hover:scale-105 transition-transform">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
