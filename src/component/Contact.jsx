"use client";

import React, { useState } from "react";

const Contact = () => {
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
      // Submit directly from browser to Web3Forms API to ensure Cloudflare validation succeeds
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
    <section id="contact" className="py-16 bg-base-200 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent font-semibold text-xs uppercase tracking-wider mb-3">
            LET'S TALK
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
          <div className="lg:col-span-5 space-y-4">
            {/* Phone */}
            <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Phone</p>
                <a href="tel:+8801852249441" className="font-semibold text-base text-base-content hover:text-accent transition-colors">
                  +8801852249441
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Email</p>
                <a href="mailto:kawserswe@gmail.com" className="font-semibold text-base text-base-content hover:text-accent transition-colors">
                  kawserswe@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-base-content/60 font-semibold uppercase tracking-wider">WhatsApp</p>
                <a href="https://wa.me/8801852249441" target="_blank" rel="noopener noreferrer" className="font-semibold text-base text-base-content hover:text-accent transition-colors">
                  +8801852249441
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
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
                  className="w-10 h-10 rounded-full bg-base-100 border border-base-300 text-base-content hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/kawser-ahamad-09k/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-base-100 border border-base-300 text-base-content hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href="https://codeforces.com/profile/kawser0x"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codeforces"
                  className="w-10 h-10 rounded-full bg-base-100 border border-base-300 text-base-content hover:bg-accent hover:text-accent-content flex items-center justify-center transition-all shadow-sm font-bold text-xs">
                  CF
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
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
                      <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
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
