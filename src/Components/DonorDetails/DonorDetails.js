import React from 'react';
import "./DonorDetails.css"

const DonorDetails = (props) => {
    console.log(props.cart)
    const {name, img ,netWorth} = props.cart
 
    return (
        <div>
            <div className="donor-details d-flex ">
                <img className="cart-img" src={img} alt="" />
                <div className = "ms-2">
                <h6 > {name}</h6>
                <p>Worth:{netWorth}</p>
                </div>
            </div>
        </div>
    );
};

export default DonorDetails;