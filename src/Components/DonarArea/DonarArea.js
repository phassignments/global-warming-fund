import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Donor from "../Donor/Donor";

const DonarArea = () => {
  const [donors, setDonors] = useState([]);
  const [carts, setCarts] = useState([]);

  // fake data call

  useEffect(() => {
    fetch("./FakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setDonors(data);
      });
  }, []);

  const countDonar = (donor) => {
    const newDonor = [...carts, donor];
    setCarts(newDonor);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {donors.map((donor) => (
                <Donor key={donor.id} donor={donor} countDonor={countDonar}>
                  {" "}
                </Donor>
              ))}
            </div>
          </div>
          <div className="col-lg-3">
            <Cart carts={carts}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonarArea;
