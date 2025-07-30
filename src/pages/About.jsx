import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Mentions légales</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <header className="about-header pb-5">
                    <div className="text-center pt-5">
                        <h1 className="pt-5 pb-2">Mentions légales</h1>
                            <hr className="mx-auto w-25 border border-3 border-primary opacity-100 rounded"/>
                    </div>
            </header>
            <main>
                <div className="container">
                    <div className="accordion" id="accordionExample">

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Editeur du site
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="johndoe-adress">John Doe</p>
                                    <address className="lh-1">
                                        <p><i className="bi bi-map me-1"></i>40 rue Laure Diebold</p>
                                        <p><i className="bi bi-geo-alt me-1"></i>69009 Lyon, France</p>
                                        <p><i className="bi bi-phone me-1"></i>10 20 30 40 50</p>
                                        <p><i className="bi bi-envelope-at me-1"></i>john.doe@gmail.com</p>
                                    </address>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hébergeur
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p><strong>alwaysdata</strong></p>
                                    <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                    <p><i className="bi bi-globe pe-2"></i><a href="https://www.alwaysdata.com/fr/" target="_blank" rel="noreferrer">www.alwaysdata.com</a></p>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               Crédits
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p><strong>Crédits</strong></p>
                                    <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr" target="_blank" rel="noreferrer">Centre Européen de formation</a></p>
                                    <p className="fst-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/" target="_blank" rel="noreferrer">Pixabay</a></p>
                                    <p className="fst-italic">La favicon de ce site a été fourni par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noreferrer">John Doe Icons erstellt von Freepik - Flaticon</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;