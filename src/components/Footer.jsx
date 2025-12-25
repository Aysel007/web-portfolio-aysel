const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center relative z-10">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-7">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Aysel007/">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/aysel_ghaz28/">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/aysel-ghazwan-74936b34b/">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://www.facebook.com/aysel.ghazwan">
          <i className="ri-facebook-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
