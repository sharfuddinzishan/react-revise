import React from 'react';

const OrderReview = ({product,removeFromLSHandler}) => {
    const {_id,picture,model,quantity}=product
    return (
        <>
        <div className="card mb-3" style={{maxWidth: '740px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={picture} className="img-fluid rounded-start" alt={model}/>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h5 className="card-title">{model}</h5>
                        <p className="card-text">Quanity: {quantity}</p>
                    </div>
                </div>
                <div className="col-md-4 text-end p-3">
                    <p className="card-text">
                        <small className="text-muted">
                            <button className='btn btn-sm btn-warning' onClick={()=>removeFromLSHandler(_id)}>X</button>
                        </small>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default OrderReview;