import React from 'react';

const Product = ({product,addToLSHandler}) => {
    const {_id,picture,category,model,overview}=product || {}
    return (
        <>
        <div className="col">
            <div className="card h-100">
                <img src={picture} className="card-img-top w-75 p-2 d-block mx-auto" alt={category}/>
                <div className="card-body">
                    <h5 className="card-title">{model}</h5>
                    <p className="card-text">{overview.slice(0,95)+'.....'}</p>
                </div>
                <div className="card-footer">
                    <button 
                    className='btn btn-info text-light mx-auto d-block'
                    onClick={()=>addToLSHandler(_id)}
                    >Add To Cart</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Product;