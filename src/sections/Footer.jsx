const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 md:pb-6">
      <div className="text-[var(--color-white-500)] flex gap-2">
        <p>Alicia Pak - Full Stack Developer</p>
        <p>|</p>
        <p>Portfolio</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/AliciaPak25"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/pakalicia/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/linkedin.png"
              alt="linkedin"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>

      <p className="text-[var(--color-white-500)]">© 2025 Alicia Pak.</p>
    </footer>
  );
};

export default Footer;
