
const Services = () => {
    return (
        <div>
            <header className="services-header">
                    <div>
                        <img src="/img/banner.jpg" alt="A propos de John Doe" className="mt-5 img-fluid"/>
                        <h1 className="mt-5">Mon offre de services</h1>
                        <p>Voici les prestations sur lesquelles je peux intervenir</p>
                            <hr className="mx-auto w-25 border border-3 border-primary opacity-100 rounded"/>
                    </div>
            </header>
            <main>
                <div className="container-fluid">
                    <div className="row justify-content-center m-1">
                            <div class="card col-12 col-md-4 services-card">
                                <div class="card-body text-center p-3">
                                    <div className="m-4">
                                        <i className="bi bi-brush text-primary fs-1"></i>
                                    </div>
                                    <h2 className="card-title">UX Design</h2>
                                    <p class="card-text">L'UX Design est une discipline qui consite à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant
                                        l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                                    </p>
                                </div>
                            </div>

                        <div class="card col-12 m- col-md-4 services-card">
                            <div class="card-body text-center p-3">
                                <div className="m-4">
                                    <i className="bi bi-code-slash text-primary fs-1 m-4"></i>
                                </div>
                                <h2 className="card-title">Développement web</h2>
                                <p class="card-text">Le développemment de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTLM, CSS, JavaScript, PHP, etc.) 
                                et des frameworks (Bootstrap, React, Angular, etc.)
                                </p>
                            </div>
                        </div>

                        <div class="card col-12 col-md-4 services-card">
                            <div class="card-body text-center p-3">
                                <div className="m-4">
                                    <i className="bi bi-search text-primary fs-1"></i>
                                </div>
                                <h2 className="card-title">Référencement</h2>
                                <p class="card-text">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche
                                (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>   
    )
}

export default Services;