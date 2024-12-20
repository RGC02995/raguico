import "./about-me.css";

export const AboutMe = () => {
  return (
    <>
      <div className="about-me">
        <img
          className="about-me__img"
          src="/AboutMeImg.png"
          alt="Imagen programador"
        />

        <div className="ref--doc__buttons">
          <button>
            <a href="">GitHub</a>
          </button>
          <button>
            <a href="">CV Download</a>
          </button>
        </div>

        <p className="about-me__text">
          <span className="about-me__text--black about-me__text--big">#</span>{" "}
          Mi nombre es Raúl, soy{" "}
          <span className="about-me__text--black">
            Desarrollador de Software Full Stack{" "}
          </span>
          amante de todas las tecnologías que engloban el desarrollo web, pero
          en particular del maravilloso mundo del Frontend {""}
          <span className="about-me__text--red">❤</span>, donde quiero seguir
          especializándome y poder aportar cada vez más valor donde quiera que
          esté 🚀.
        </p>

        <div className={`about-me__technologies fade-in`}>
          <img className="about-me__technologies-img" src="/svg/js.svg"></img>
          <img className="about-me__technologies-img" src="/svg/html.svg"></img>
          <img className="about-me__technologies-img" src="/svg/css.svg"></img>
          <img
            className="about-me__technologies-img"
            src="/svg/sass-svgrepo-com.svg"
          />
          <img className="about-me__technologies-img" src="/svg/nodejs.svg" />
          <img className="about-me__technologies-img" src="/svg/react.svg" />
          <img className="about-me__technologies-img" src="/svg/axios.svg" />
          <img
            className="about-me__technologies-img"
            src="/svg/bootstrap.svg"
          />
          <img className="about-me__technologies-img" src="/svg/redux.svg" />
        </div>
      </div>
    </>
  );
};
