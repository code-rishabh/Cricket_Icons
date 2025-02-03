import logo from "/cricket-icons-logo.jpg";

const LandingPageMessage = () => {
  return (
    <div className=" h-screen flex flex-col py-10 m-auto items-center w-[50vw] gap-10 font-bold text-3xl text-center">
      <div>
        <a href="">
          <img
            className=" size-96 hover:scale-110 rounded-full transition-all duration-400 object-cover"
            src={logo}
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>
      🏏 We are Polishing Our Bat and Pads! Cricket Icons is in the final innings of development.
      </h1>
      <h1>🏆 Get ready for the big reveal soon!</h1>
    </div>
  );
};

export default LandingPageMessage;
