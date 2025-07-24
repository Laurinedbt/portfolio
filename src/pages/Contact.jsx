import React from "react";

const Contact = () => {
    return (
        <div>
            <header className="contact-header p-4">
                <div>
                    <h1 className="contact-h1">Contact</h1>
                    <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <div className="d-flex justify-content-center">
                        <hr className="border border-3 border-primary opacity-100 rounded w-50"/>
                    </div>
                </div>
            </header>
            <section>
                    <div className="container">
                        <div className="row section">
                            <div className="col-12 col-md-6 ps-0">
                                <h2>Formulaire de contact</h2>
                                <div>
                                    <hr className="border border-2 border-primary opacity-100 rounded contact-hr" />
                                </div>
                                <form>
                                    <div className="mb-2">
                                        <label htmlFor="nom" className="visually-hidden">Votre nom</label>
                                        <input type="text" className="form-control" id="nom" placeholder="Votre nom" required/>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className="visually-hidden">Votre adresse email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Votre adresse email" required/>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="phone" className="visually-hidden">Votre numéro de téléphone</label>
                                        <input type="tel" className="form-control" id="phone" placeholder="Votre numéro de téléphone" required/>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="subject" className="visually-hidden">Sujet</label>
                                        <input type="text" className="form-control" id="subject" placeholder="Sujet" required/>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="message" className="visually-hidden">Votre message</label>
                                        <textarea style={{ height: "400px"}} className="form-control" id="message" placeholder="Votre message" required></textarea>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary mt-2" type="submit">Envoyer</button>
                                    </div>
                                </form>
                            </div>

                            <div className="col-12 col-md-6">
                                <h2 className="mt-4 mt-md-0">Mes coordonnées</h2>
                                <div>
                                    <hr className="border border-2 border-primary opacity-100 rounded contact-hr" />
                                    <p className="johndoe-adress">John Doe</p>
                                    <address className="lh-1">
                                        <p><i className="bi bi-map me-1"></i>40 rue Laure Diebold</p>
                                        <p><i className="bi bi-geo-alt me-1"></i>69009 Lyon, France</p>
                                        <p><i class="bi bi-phone me-1"></i>10 20 30 40 50</p>
                                        <p><i class="bi bi-envelope-at me-1"></i>john.doe@gmail.com</p>
                                    </address>
                                    <div className="ratio ratio-4x3">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540993!2d4.796403976643224!3d45.77866571240161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1753375344188!5m2!1sfr!2sfr" title="Google Map" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Contact;