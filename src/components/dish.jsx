import React from 'react'

const Dish = ({image, title, option, doThis}) => {
  
    return (
        <div className='container mt-3 col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6'>
            <div className="card bg-dark">
                <img className="img-fluid.max-width: 50% height: auto" src={image} alt="Card image cap"/>
                <div className="card-body text-white">
                    <p className="card-title "> {title} </p>
                    <button className="btn btn-sm btn-outline-secondary float-left"> ! </button>
                    <button className="btn btn-sm btn-outline-secondary float-right" onClick={doThis}> { option }</button>

                </div>
            </div>
        </div>
    )
}

export default Dish