import { useRenderComponent } from "../../hooks/useRenderComponent";
import "../../pages/pages.css";

export const Technologies = () => {
  const { isVisible } = useRenderComponent();

  return (
    <div
      className={`about-flex-wrap-technology background-technologies ${
        isVisible && "fadeIn"
      }`}
    >
      <img className="svg-style" src="../../public/svg/js.svg"></img>
      <img className="svg-style" src="../../public/svg/html.svg"></img>
      <img className="svg-style" src="../../public/svg/css.svg"></img>
      <img className="svg-style" src="../../public/svg/sass-svgrepo-com.svg" />
      <img className="svg-style" src="../../public/svg/nodejs.svg" />
      <img className="svg-style" src="../../public/svg/react.svg" />
    </div>
  );
};
