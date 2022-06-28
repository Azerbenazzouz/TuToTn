import React from 'react'

function Galerie() {
    const Imgs=[
        "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?cs=srgb&dl=pexels-pixabay-301926.jpg&fm=jpg",
        "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg",
        "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?cs=srgb&dl=pexels-pixabay-256417.jpg&fm=jpg"
    ]
    return (
        <div className="container p-5 mt-0 shadow-sm mb-2 bg-body rounded">
            <center>
                <h2 className="pb-5 ">Galerie</h2>
            </center>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Imgs[0]} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Imgs[1]} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Imgs[2]} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Galerie
