import logoLightBg from "../assets/logo-dark-bg.jpg";

const LandingPageMessage = () => {
  return (
    <div className="flex flex-col m-auto items-center w-[50vw] gap-20 font-bold text-3xl text-center">
      <div>
        <a href="">
          <img
            className="h-[40vh] hover:shadow-2xl hover:shadow-neutral-600 shadow-2xl rounded-full shadow-neutral-400 transition-all duration-400 object-cover"
            src={logoLightBg}
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>
        🌟 We are crafting something extraordinary just for you. Stay tuned as
        we prepare to launch a world of innovation and excitement. Check back
        soon for the grand unveiling!
      </h1>
      <h1>🚀 Coming Soon: Infinity Toytronics! </h1>
    </div>
  );
};

export default LandingPageMessage;
