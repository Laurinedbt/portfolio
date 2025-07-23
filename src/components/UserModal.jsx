import React from "react"

export default function UserModal({data}) {

    return(

        <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content bg-dark text-white">
                    <div className="modal-header">
                        <h5 className="modal-title" id="userModalLabel">Mon profil GitHub</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body pb-5 pt-5">
                        {data ? (
                            <div className="row align-items-center text-start">
                                <div className="col-12 col-md-7 img-fluid">
                                    <img src={data.avatar_url} alt={`Avatar de ${data.name}`} className="img-fluid"/>
                                </div>

                                <div className="col-12 pt-3 col-md-5">
                                    <p><i className="bi bi-person custom-icon-modal"></i><a href="https://github.com/github-john-doe" alt="John Doe GitHub" target="_blank" rel="noopener noreferrer">{data.name}</a></p>
                                    <hr></hr>
                                    <p><i className="bi bi-geo-alt custom-icon-modal"></i>{data.location}</p>
                                    <hr></hr>
                                    <p><i className="bi bi-card-text custom-icon-modal"></i>{data.bio}</p>
                                    <hr></hr>
                                    <p><i className="bi bi-box custom-icon-modal"></i>Repositories: {data.public_repos}</p>
                                    <hr></hr>
                                    <p><i className="bi bi-people custom-icon-modal"></i>Followers: {data.followers}</p>
                                    <hr></hr>
                                    <p><i className="bi bi-people custom-icon-modal"></i>Following: {data.following}</p>
                                </div>
                            </div>
                            ) : (
                                <p>Chargement...</p>
                        )}
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>

    )

}

