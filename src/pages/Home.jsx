
const Home = () => {
    return (
        <div>
            <header>

            </header>
            <main>
                <section>
                    <h3>Mes compétences</h3>
                    <p>HTML5 90%</p>
                    <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style= {{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>CSS3 80%</p>
                    <div className="progress">
                        <div className="progress-bar bg-info" role="progressbar" style= {{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>JAVASCRIPT 70%</p>
                    <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style= {{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>PHP 60%</p>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style= {{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>REACT 50%</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style= {{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;