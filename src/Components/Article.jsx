import React from "react";

function Article() {
  return (
    <article className="col l4 m6 s12">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src="./assets/img/card1.jpg"
            alt="Foto de Libreta"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator">
            Post Title
            <i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title">
            Post Title <i className="material-icons right">close</i>
          </span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            nihil?
          </p>
          <a
            className="btn-flat waves-effect waves-teal teal lighten-5 right"
            href="post.html"
          >
            Ir
          </a>
        </div>
      </div>
    </article>
  );
}

export default Article;
