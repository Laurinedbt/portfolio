import React from "react";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          
          {/* Colonne 1 - Contact */}
          <div className="col-md-4 mb-4">
            <h3>John Doe</h3>
            <p className="mb-0">40 rue Laure Diebold</p>
            <p className="mb-0">69009 Lyon, France</p>
            <p className="mb-0"><a href="tel:1020304050">10 20 30 40 50</a></p>
            <p className="mb-0"><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
            <div className="mt-4">
                <a href="https://github.com/Laurinedbt/portfolio" target="_blank" rel="noopener noreferrer nofollow"><i className="bi bi-github"></i></a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer nofollow"><i className="bi bi-twitter"></i></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer nofollow"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
          
          {/* Colonne 2 - Liens */}
          <div className="col-md-4 mb-4">
            <h3>Liens utiles</h3>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Accueil</Link></li>
              <li><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
              <li><Link to="/portfolio" className="text-light text-decoration-none">Portfolio</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Me contacter</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">Mentions légales</Link></li>
            </ul>
          </div>
          
          {/* Colonne 3 - Dernières réalisations */}
          <div className="col-md-4 mb-4">
            <h3>Mes dernières réalisations</h3>
            <ul className="list-unstyled">
                <li><a href="/portfolio" className="text-light text-decoration-none">Fresh Food</a></li>
                <li><a href="/portfolio" className="text-light text-decoration-none">Restaurant Akira</a></li>
                <li><a href="/portfolio" className="text-light text-decoration-none">Espace bien-être</a></li>
                <li><a href="/portfolio" className="text-light text-decoration-none">SEO</a></li>
                <li><a href="/portfolio" className="text-light text-decoration-none">Création d'une API</a></li>
                <li><a href="/portfolio" className="text-light text-decoration-none">Maquette d'un site</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
