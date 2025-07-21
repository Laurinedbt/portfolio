import React from "react";

const Contact = () => {
    return (
        <div>
            <header className="contact-header">
                <div className="contact">
                    <h1>Contact</h1>
                    <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                     <hr className="border border-3 border-primary opacity-100 rounded" />
                </div>
            </header>
            <section className="contact-section">
                    <div className="container">
                        <div className="row section">
                            <div className="col-md-6">
                                <h2>Formulaire de contact</h2>
                                <div>
                                    <hr className="border border-2 border-primary opacity-100 rounded" />
                                </div>
                                <form action="index.html" method="post">
                                    <div className="mb-2">
                                        <label for="nom" className="visually-hidden">Votre nom</label>
                                        <input type="text" className="form-control" id="nom" placeholder="Votre nom" required/>
                                    </div>
                                    <div className="mb-2">
                                        <label for="email" className="visually-hidden">Votre adresse email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Votre adresse email" required/>
                                    </div>
                                    <div className="mb-2">
                                        <label for="phone" className="visually-hidden">Votre numéro de téléphone</label>
                                        <input type="tel" className="form-control" id="phone" placeholder="Votre numéro de téléphone" required/>
                                    </div>
                                    <div className="mb-2">
                                        <label for="subject" className="visually-hidden">Sujet</label>
                                        <input type="text" className="form-control" id="subject" placeholder="Sujet" required/>
                                    </div>
                                    <div className="mb-2">
                                        <label for="message" className="visually-hidden">Votre message</label>
                                        <textarea style={{ height: "500px"}} className="form-control" id="message" placeholder="Votre message" required></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <h2>Mes coordonnées</h2>
                                <div>
                                    <hr className="border border-2 border-primary opacity-100 rounded" />
                                <p>John Doe</p>
                                <ul>
                                    <li className="list-unstyled">40 rue Laure Diebold</li>
                                    <li className="list-unstyled">69009 Lyon, France</li>
                                    <li className="list-unstyled">10 20 30 40 50</li>
                                    <li className="list-unstyled">john.doe@gmail.com</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Contact;