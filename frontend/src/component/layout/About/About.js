import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      {/* <div></div>
      <div className="aboutSectionGradient"></div> */}
      <div className="aboutSectionContainer">
        <Typography component="h1">About Dockerize E-Commerce</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="../../../public/Profile.png"
              alt=""
            />
            <Typography>Malik M Hashim</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              Dockerize E-Commerce Website is shopping website where Online Transaction, Role Base Access, Automatic Mail verification, Vendor Management etc has done.
              The major functionalities of this website is to handle SEO, AWS and Dockerize this website.     
            </span>
            <h3>Contact us: +92 331 5576075</h3>           
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
