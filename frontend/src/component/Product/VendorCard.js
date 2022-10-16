import React from "react";
import profilePng from "../../images/Profile.png";

const VendorCard = ({ Vendor }) => { 

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{Vendor.name}</p> 
      <i>{Vendor.phoneNo}</i> 
      <p>Offer</p>
      <div>
        <div>Price: ${Vendor.itemPrice}</div>        
        <span className="reviewCardComment">Details: {Vendor.Detail}</span>
      </div>      
    </div>
  );
};

export default VendorCard;
