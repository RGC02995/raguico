import lista from "../../../data/proyectsData.json";

export const Card = () => {
  return (
    <ul className="card-group">
      {lista.proyectos.map((proyecto) => {
        if (
          proyecto.nombre &&
          proyecto.urlGit &&
          proyecto.urlProyecto &&
          proyecto.img
        ) {
          return (
            <li key={proyecto.nombre} className="card">
              <img
                className="card-image"
                src={proyecto.img}
                alt="imageProyect"
              />
              <div className="footer-card__div">
                <p className="card__paragraph">
                  {proyecto.nombre}
                  <div>
                    <button className="repo-github__button">
                      <a href={proyecto.urlGit}>Github</a>
                    </button>
                    <button className="repo-github__button">
                      <a href={proyecto.urlProyecto}>Page</a>
                    </button>
                  </div>
                </p>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
};
