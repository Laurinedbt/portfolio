import React from "react"

export default function UserModal({data}) {

    return(

        <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content bg-dark text-white">
                    <div className="modal-header">
                        <h5 className="modal-title" id="userModalLabel">Mon profil GitHub</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {data ? (
                            <div className="row align-items-center text-start">
                                {/* Avatar à gauche (desktop) ou en haut (mobile) */}
                                <div className="col-12 col-md-4 mb-3 mb-md-0 img-fluid">
                                    <img src={data.avatar_url} alt={`Avatar de ${data.name}`} className="img-fluid"/>
                                </div>

                                {/* Infos à droite (desktop) ou en dessous (mobile) */}
                                <div className="col-12 col-md-8">
                                    <p><i className="bi bi-person"></i>{data.name}</p>
                                    <p><i className="bi bi-geo-alt"></i>{data.location}</p>
                                    <p><i className="bi bi-card-text"></i>{data.bio}</p>
                                    <p><i className="bi bi-box"></i>Repositories: {data.public_repos}</p>
                                    <p><i className="bi bi-people"></i>Followers: {data.followers}</p>
                                    <p><i className="bi bi-people"></i>Following: {data.following}</p>
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

