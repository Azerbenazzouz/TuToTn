import React from 'react'
import Img from "./welcome.jpg"
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div className="container-fluid shadow-sm p-3 mb-2 bg-body rounded">
            <div className="row">
                <div style={{
                            "display":"flex",
                            "flexDirection":"column",
                            "alignContent":"space-evenly",
                            "justifyContent":"center",
                        }} className="col-md-7 p-3 ps-4">

                    <h1 className="pb-3" style={{"fontSize":"50px","flex":"0.2"}}>Bienvenue à <span  className="text-warning pb-3">TuToTn</span> ,</h1>
                    <h1 style={{"fontSize":"40px","flex":"0.6"}}><span style={{"fontSize":"45px"}}  className="text-warning pb-3">N</span>ous sommes très heureux de choisir notre site, nous souhaitons que vous obteniez les meilleures informations de nos cours.</h1>
                    <div  style={{}}>
                        <div className="pt-3 d-flex" style={{"flex":"0.2","justifyContent":"center"}}>
                            <Link to="/identifier" className="btn btn-secondary me-2 p-3" >
                                <b><i className="bi bi-person-circle"></i> S'identifier</b>
                            </Link>
                            <Link to="/Creer" className="btn btn-primary p-3">
                                <b><i className="bi bi-person-plus"></i> Créer un compte</b>
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="col-md-5 p-3">
                    <img src={Img} className="img-fluid rounded " alt='' />
                </div>
            </div>
        </div>
    )
}

export default Welcome
