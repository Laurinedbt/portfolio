
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
                    <div className="row">
                        <div className="card p-0">
                            <img src="/img/portfolio/fresh-food.jpg" className="card-img-top" alt="Fruits et légumes"></img>
                            <div className="card-body text-center">
                                <h2 className="card-title">Fresh Food</h2>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="/" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p className="text-center">Site réalisé avec PHP et MySQL</p>
                            </div>
                            </div>


                    </div>
                </div>
            </main>
        </div>
    )
}

export default Portfolio;