
const Home = () => {
    return (
        <div>
            <header className="home-header">
                <h1 className="">Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <button type="button" className="btn btn-danger px-4 mt-2">En savoir plus</button>
            </header>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>A propos</h3>
                                <div className="w-50">
                                    <hr className="border border-2 border-primary opacity-100 rounded" />
                                </div>
                                <img src="/img/john-doe-about.jpg" alt="A propos de John Doe" className="img-fluid"/>
                                <p className="mb-3 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                       
                                <h3>Mes compétences</h3>
                                <div className="w-50">
                                    <hr className="border border-2 border-primary opacity-100 rounded" />
                                </div>
                                <p className="mb-1">HTML5 90%</p>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style= {{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mb-1">CSS3 80%</p>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-info" role="progressbar" style= {{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mb-1">JAVASCRIPT 70%</p>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-warning" role="progressbar" style= {{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mb-1">PHP 60%</p>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-success" role="progressbar" style= {{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mb-1">REACT 50%</p>
                                <div className="progress mb-3">
                                    <div className="progress-bar" role="progressbar" style= {{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;