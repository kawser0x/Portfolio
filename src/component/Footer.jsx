const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-5 px-6 md:px-12 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center lg:pl-12">
          <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

          <div className="space-y-3 mb-8 text-neutral-content/80">
            <p className="flex items-center gap-2">📍 Sylhet, Bangladesh</p>
            <p className="flex items-center gap-2">📧 kawserswe@gmail.com</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">
              Find Me Online
            </h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/kawser0x"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kawser-ahamad-09k/"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover">
                LinkedIn
              </a>
              <a
                href="https://codeforces.com/profile/kawser0x"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover">
                Codeforces
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full bg-base-100 text-base-content"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full bg-base-100 text-base-content"
                required
              />
            </div>
            <textarea
              placeholder="Your Message..."
              className="textarea textarea-bordered w-full bg-base-100 text-base-content h-32"
              required></textarea>
            <button type="submit" className="btn btn-accent w-full md:w-auto">
              Submit Message
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center mt-5 border-t border-neutral-content/20 pt-1 text-neutral-content/60 text-sm">
        <p>&copy; {new Date().getFullYear()} Kawser. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
