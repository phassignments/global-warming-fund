import React from "react";
import "./Donar.css";

const Donor = (props) => {
  const { name, age, img, donate, residence, founder } = props.donor;

  //  donor details in cart
  return (
    <div className="p-2 ">
      <div className="col  ">
        <div className="card h-100 cart-details">
          <div className="img-area">
            <img src={img} className="card-img-top donor-img" alt="..." />
          </div>

          <div className="card-body">
            <h5> Name : {name}</h5>
            <h6>Founder : {founder}</h6>

            <h6>Age: {age}</h6>
            <small className="">Residence : {residence}</small>
            <h6>Net Worth: {netWorth}</h6>
            <h6>Donation : $ {donate}</h6>
            <p className="card-text">{otherAssets.slice(0, 24)}</p>
            <button
              onClick={() => props.countDonor(props.donor)}
              className="btn btn-danger"
            >
              {" "}
              <i className="fas fa-donate btn-icon"></i>Donate
            </button>
            <div className="d-flex justify-content-center align-items-center mt-3 social-icon">
              <i class="fab fa-facebook facebook-icon me-3"></i>
              <i class="fab fa-linkedin-in me-3 linkedin-icon"></i>
              <i class="fab fa-instagram instagram-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donor;
