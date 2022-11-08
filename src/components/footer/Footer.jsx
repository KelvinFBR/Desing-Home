export const Footer = () => {
  return (
    <footer className="w-full px-8 py-4 bg-[#001C41] flex items-center justify-between">
      <div>
        <a
          className="inline-block w-8 h-8 mx-2 transition-all hover:scale-110"
          href="https://www.linkedin.com/in/kelvin-f-baez-rodriguez-fullstack-dev/"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
            alt="Linkedin icon"
            className="w-full h-full"
          />
        </a>
        <a
          className="inline-block w-8 h-8 mx-2 transition-all hover:scale-110"
          href="https://github.com/KelvinFBR"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png"
            alt="Github icon"
            className="w-full h-full"
          />
        </a>
      </div>
      <p className="text-sky-100">
        Coded by{" "}
        <a
          className="font-bold text-sky-600 border-b-2 border-sky-600 transition-all hover:text-sky-500"
          href="https://kelvin-f-baez-rodriguez-frontend-dev.netlify.app/"
          target="_blank"
        >
          Kelvin F.
        </a>
      </p>
    </footer>
  );
};
