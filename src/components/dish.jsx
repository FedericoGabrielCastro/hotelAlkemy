import React from 'react'

const Dish = ({image, title}) => {
  
    return (
        <div className="card mb-3 ml-3 mr-3 col-12 col-sm-5 col-md-12 col-lg-5 col-xl-5 bg-dark">
            <img className="card-img-top img-fluid" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h4 className="card-title"> {title} </h4>
                <p className="card-text">Some quick example text </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
    </div>
    )
}

export default Dish