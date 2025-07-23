import React from "react"

export default function UserModal({data}) {

    return(

        <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="userModalLabel">Mon profil GitHub</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                                
                            {data ? (
                        <>
                            <img src={data.avatar_url} alt={`Avatar de ${data.name}`} className="img-fluid rounded-circle mb-3" style={{ width: "120px", height: "120px", objectFit: "cover" }}/>
                            <p>{data.name}</p>
                            <p>{data.avatar_url}</p>
                            <p>{data.location}</p>
                            <p>{data.bio}</p>
                            <p>{data.public_repos}</p>
                            <p>{data.followers}</p>
                            <p>{data.following}</p>
                        </>
                            ) : (
                                
                               <p>Chargement</p>

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

