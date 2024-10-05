import "./proyects.css";

export const Proyects = () => {
  return (
    <ul className="card-group">
      <li className="card">
        <img className="card-image" src="/svg/css.svg" alt="css" />
        <p className="card__paragraph">
          CSS
          <div>
            <button className="repo-github__button">Github</button>
            <button className="repo-github__button">Github</button>
          </div>
        </p>
      </li>
    </ul>
  );
};
