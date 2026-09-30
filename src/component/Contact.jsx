"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact Message from ${formData.name}`,
          message: formData.message,
          from_name: "Kawser Portfolio",
        }),
      });

      const data = await res.json();

      if (data.success || res.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully to Kawser's inbox.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        type: "error",
        message: "Failed to send message. Please check your network connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 bg-base-200 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transform transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent font-semibold text-xs uppercase tracking-wider mb-3">
            LET&apos;S TALK
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-base-content/70 max-w-xl mx-auto text-base">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Socials */}
          <div
            className={`lg:col-span-5 space-y-4 transform transition-all duration-700 ease-out delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            {/* Phone */}
            <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm flex items-center gap-4 hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0 text-2xl">
                <HiOutlinePhone />
              </div>
              <div>
                <p className="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Phone</p>
                <a href="tel:+8801852249441" className="font-semibold text-base text-base-content hover:text-accent transition-colors">
                  +8801852249441
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm flex items-center gap-4 hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0 text-2xl">
                <HiOutlineMail />
              </div>
              <div>
                <p className="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Email</p>
                <a href="mailto:kawserswe@gmail.com" className="font-semibold text-base text-base-content hover:text-accent transition-colors">
                  kawserswe@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm flex items-center gap-4 hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0 text-2xl">
                <FaWhatsapp className="text-emerald-500" />
              </div>
              <div>
                <p className="text-xs text-base-content/60 font-semibold uppercase tracking-wider">WhatsApp</p>
                <a href="https://wa.me/8801852249441" target="_blank" rel="noopener noreferrer" className="font-semibold text-base text-base-content hover:text-accent transition-colors">
                  +8801852249441
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm flex items-center gap-4 hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0 text-2xl">
                <HiOutlineLocationMarker />
              </div>
              <div>
                <p className="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Location</p>
                <p className="font-semibold text-base text-base-content">Sylhet, Bangladesh</p>
              </div>
            </div>

            {/* Find Me On */}
            <div className="pt-2">
              <p className="text-sm font-semibold mb-3">Find me on</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/kawser0x"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full bg-base-100 border border-base-300 text-base-content hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all shadow-sm text-xl">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/kawser-ahamad-09k/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-base-100 border border-base-300 text-base-content hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all shadow-sm text-xl">
                  <FaLinkedin />
                </a>
                <a
                  href="https://codeforces.com/profile/kawser0x"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codeforces"
                  className="w-10 h-10 rounded-full bg-base-100 border border-base-300 text-base-content hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all shadow-sm text-lg">
                  <SiCodeforces />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className={`lg:col-span-7 transform transition-all duration-700 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <div className="bg-base-100 p-8 md:p-10 rounded-3xl shadow-xl border border-base-300">
              {status && (
                <div className="alert alert-success text-success-content mb-6 text-sm font-medium rounded-xl">
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-base-content">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Kawser Ahamad"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-base-100 text-base-content focus:input-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-base-content">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="kawser@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-base-100 text-base-content focus:input-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-base-content">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Let's work together"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-base-100 text-base-content focus:input-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-base-content">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full bg-base-100 text-base-content h-36 focus:textarea-accent"
                    required></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-accent w-full rounded-full text-accent-content font-bold shadow-lg hover:shadow-accent/40 text-base flex items-center justify-center gap-2 py-3">
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
