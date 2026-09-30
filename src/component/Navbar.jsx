"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Scroll spy section tracking on home page
    const handleScroll = () => {
      if (pathname === "/") {
        const sections = ["hero", "about", "skills", "projects", "contact"];
        const scrollPosition = window.scrollY + 200;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const navItems = [
    { name: "Home", href: "/", sectionId: "hero" },
    { name: "About", href: "/about", sectionId: "about" },
    { name: "Skills", href: "/skills", sectionId: "skills" },
    { name: "Projects", href: "/projects", sectionId: "projects" },
    { name: "Contact", href: "/contact", sectionId: "contact" },
  ];

  const checkIsActive = (item) => {
    if (pathname === "/") {
      if (activeSection) {
        return activeSection === item.sectionId;
      }
      return item.href === "/";
    }
    return pathname === item.href;
  };

  const navLinks = (
    <>
      {navItems.map((item) => {
        const isActive = checkIsActive(item);
        return (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`transition-all font-semibold rounded-lg px-3 py-2 ${
                isActive
                  ? "text-accent font-bold bg-accent/10 shadow-sm"
                  : "text-base-content/80 hover:text-accent hover:bg-base-200"
              }`}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </>
  );

  return (
    <div className="navbar bg-base-100/90 backdrop-blur-md border-b border-base-300 shadow-sm fixed top-0 z-50 w-full px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-base-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-50 mt-3 w-52 p-2 shadow-xl border border-base-300">
            {navLinks}
          </ul>
        </div>

        {/* Dynamic Code-Style Brand Logo: { K } */}
        <Link
          href="/"
          className="btn btn-ghost text-xl font-mono group flex items-center gap-1 hover:bg-transparent px-2">
          <span className="text-accent font-bold group-hover:-translate-x-0.5 transition-transform">
            &#123;
          </span>
          <span className="font-extrabold text-base-content group-hover:text-accent transition-colors">
            K
          </span>
          <span className="text-accent font-bold group-hover:translate-x-0.5 transition-transform">
            &#125;
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="btn btn-ghost btn-circle text-base-content hover:bg-base-200 transition-all"
            title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}>
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-warning animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        )}

        {/* Hire Me Button */}
        <Link href="/contact" className="btn btn-accent shadow-md hover:shadow-accent/40">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
