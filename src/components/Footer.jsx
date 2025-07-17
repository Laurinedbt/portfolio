import React from "react";

function Footer () {
    return (
        <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          
          {/* Colonne 1 - Contact */}
          <div className="col-md-4 mb-4">
            <p>John Doe</p>
            <p className="mb-0">40 rue Laure Diebold</p>
            <p className="mb-0">69009 Lyon, France</p>
            <p className="mb-0"><a href="tel:1020304050">10 20 30 40 50</a></p>
            <p className="mb-0"><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
          </div>
          
          {/* Colonne 2 - Liens */}
          <div className="col-md-4 mb-4">
            <p>Liens utiles</p>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Accueil</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">Portfolio</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Me contacter</a></li>
              <li><a href="/about" className="text-light text-decoration-none">Mentions légales</a></li>
            </ul>
          </div>
          
          {/* Colonne 3 - Dernières réalisations */}
          <div className="col-md-4 mb-4">
            <p>Mes dernières réalisations</p>
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
