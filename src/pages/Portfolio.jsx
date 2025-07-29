
const Portfolio = () => {
    return (
        <div>
            <header className="services-header">
                    <div>
                        <img src="/img/banner.jpg" alt="A propos de John Doe" className="mt-5 img-fluid"/>
                        <h1 className="mt-5">Portfolio</h1>
                        <p>Voici quelques-unes de mes réalisations</p>
                            <hr className="mx-auto w-25 border border-3 border-primary opacity-100 rounded"/>
                    </div>
            </header>
            <main>
                <div className="container-fluid">
                    <div className="row justify-content-center m-1">

                        {/* CARD FRESH FOOD */}
                        <div className="col-12 col-md-4">
                            <div className="card p-0">
                                <img src="/img/portfolio/fresh-food.jpg" className="card-img-top" alt="Fruits et légumes"></img>
                                <div className="card-body text-center">
                                    <h2 className="card-title">Fresh Food</h2>
                                    <p className="card-text">Site de vente de produits frais en ligne</p>
                                    <a href="/" className="btn btn-primary">Voir le site</a>
                                </div>
                                <div className="card-footer d-flex justify-content-center align-items-center">
                                    <p className="m-0">Site réalisé avec PHP et MySQL</p>
                                </div>
                            </div>
                        </div>

                            {/* CARD RESTAURANT AKIRA */}
                        <div className="col-12 col-md-4">
                            <div className="card p-0">
                                <img src="/img/portfolio/restaurant-japonais.jpg" className="card-img-top" alt="Sushis et makis"></img>
                                <div className="card-body text-center">
                                    <h2 className="card-title">Restaurant Akira</h2>
                                    <p className="card-text">Site de vente de produits frais en ligne</p>
                                    <a href="/" className="btn btn-primary">Voir le site</a>
                                </div>
                                <div className="card-footer d-flex justify-content-center align-items-center">
                                    <p className="m-0">Site réalisé avec WordPress</p>
                                </div>
                            </div>
                        </div>

                            {/* CARD ESPACE BIEN-ETRE */}
                        <div className="col-12 col-md-4">
                            <div className="card p-0">
                                <img src="/img/portfolio/espace-bien-etre.jpg" className="card-img-top" alt="Fruits et légumes"></img>
                                <div className="card-body text-center">
                                    <h2 className="card-title">Espace bien-être</h2>
                                    <p className="card-text">Site de vente de produits frais en ligne</p>
                                    <a href="/" className="btn btn-primary">Voir le site</a>
                                </div>
                                <div className="card-footer d-flex justify-content-center align-items-center">
                                    <p className="m-0">Site réalisé avec LARAVEL</p>
                                </div>
                            </div>
                        </div>

                            {/* CARD SEO */}
                        <div className="col-12 col-md-4">
                            <div className="card p-0">
                                <img src="/img/portfolio/seo.jpg" className="card-img-top" alt="Fruits et légumes"></img>
                                <div className="card-body text-center">
                                    <h2 className="card-title">SEO</h2>
                                    <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
                                    <a href="/" className="btn btn-primary">Voir le site</a>
                                </div>
                                <div className="card-footer d-flex justify-content-center align-items-center">
                                    <p className="m-0">Utilisation des outils SEO</p>
                                </div>
                            </div>
                        </div>

                            {/* CARD CREATION D'UNE API */}
                        <div className="col-12 col-md-4">
                            <div className="card p-0">
                                <img src="/img/portfolio/coder.jpg" className="card-img-top" alt="Fruits et légumes"></img>
                                <div className="card-body text-center">
                                    <h2 className="card-title">Création d'une API</h2>
                                    <p className="card-text">Création d'une API RESTFULL publique</p>
                                    <a href="/" className="btn btn-primary">Voir le site</a>
                                </div>
                                <div className="card-footer d-flex justify-content-center align-items-center">
                                    <p className="m-0">PHP - SYMFONY</p>
                                </div>
                            </div>
                        </div>

                            {/* CARD MAQUETTE D'UN SITE WEB */}
                        <div className="col-12 col-md-4">
                            <div className="card p-0">
                                <img src="/img/portfolio/screens.jpg" className="card-img-top" alt="Fruits et légumes"></img>
                                <div className="card-body text-center">
                                    <h2 className="card-title">Maquette d'un site web</h2>
                                    <p className="card-text">Création du prototype d'un site</p>
                                    <a href="/" className="btn btn-primary">Voir le site</a>
                                </div>
                                <div className="card-footer d-flex justify-content-center align-items-center">
                                    <p className="m-0">Réalisé avec FIGMA</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Portfolio;