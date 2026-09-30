"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { HiOutlineMail, HiOutlineChevronUp } from "react-icons/hi";

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
              className="w-9 h-9 rounded-full bg-base-100 border border-base-300 hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all text-lg">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kawser-ahamad-09k/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-base-100 border border-base-300 hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all text-lg">
              <FaLinkedin />
            </a>
            <a
              href="https://codeforces.com/profile/kawser0x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codeforces"
              className="w-9 h-9 rounded-full bg-base-100 border border-base-300 hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all text-base">
              <SiCodeforces />
            </a>
            <a
              href="mailto:kawserswe@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-base-100 border border-base-300 hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all text-lg">
              <HiOutlineMail />
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
        <p className="justify-center">&copy; {new Date().getFullYear()} Kawser Ahamad. All rights reserved.</p>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="btn btn-accent btn-circle btn-sm shadow hover:scale-105 transition-transform flex items-center justify-center text-base">
          <HiOutlineChevronUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
