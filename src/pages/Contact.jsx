
const Contact = () => {
    return (
        <div>
            <div>
                <h1>Contact</h1>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            </div>
            <section>
                <h2>Formulaire de contact</h2>
                    <form action="index.html" method="post">
                        <div className="mb-2">
                            <label for="nom" className="visually-hidden">Votre nom</label>
                            <input type="text" className="form-control" id="nom" placeholder="Votre nom"/>
                        </div>
                        <div className="mb-2">
                            <label for="email" className="visually-hidden">Votre adresse email</label>
                            <input type="email" className="form-control" id="email" placeholder="Votre adresse email"/>
                        </div>
                        <div className="mb-2">
                            <label for="phone" className="visually-hidden">Votre numéro de téléphone</label>
                            <input type="tel" className="form-control" id="phone" placeholder="Votre numéro de téléphone"/>
                        </div>
                        <div className="mb-2">
                            <label for="nom" className="visually-hidden">Sujet</label>
                            <input type="text" className="form-control" id="" placeholder="Sujet"/>
                        </div>
                        <div className="mb-2">
                            <label for="message" className="visually-hidden">Votre message</label>
                            <textarea style={{ height: "500px"}} className="form-control" id="message" placeholder="Votre message" required></textarea>
                        </div>

                    </form>
                <h2>Mes coordonnées</h2>
            </section>
        </div>
    )
}

export default Contact;