import React from 'react'

function Features() {
  return (
    <div className="shadow-sm p-3 mb-2 bg-body rounded">
        <div className="container px-4 py-5 " id="icon-grid">
            <center>
                <h2 className="pb-2 ">Fonctionnalités</h2>
            </center>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
            
                <div className="col d-flex align-items-start">
                    <i className="bi bi-shield-check flex-shrink-0 me-3" style={{"width":"1em","fontSize":"1.75em"}}></i>
                    <div>
                        <h4 className="fw-bold mb-0"><span className="text-warning">S</span>écurité</h4>
                        <p>Notre site Web assure la sécurité de vos données personnelles.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start">
                    <i className="bi bi-person-hearts flex-shrink-0 me-3" style={{"width":"1em","fontSize":"1.75em"}}></i>
                    <div>
                    <h4 className="fw-bold mb-0"><span className="text-warning">P</span>opulaire</h4>
                    <p>Notre site Web a un large et grand public.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start">
                    <i className="bi bi-hourglass-split flex-shrink-0 me-3" style={{"width":"1em","fontSize":"1.75em"}}></i>
                    <div>
                    <h4 className="fw-bold mb-0"><span className="text-warning">R</span>apide</h4>
                    <p>Notre site Web assure la rapidité et l’efficacité de l’information.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features