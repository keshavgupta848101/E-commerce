import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/buniyadd";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{
                width: "10vmax",
                height: "10vmax",
                margin: "2vmax 0",
                objectFit: "contain",
              }}
              src="https://res.cloudinary.com/debo7pflq/image/upload/v1650646657/samples/people/buniadd/buniad_olxvxg.png"
              alt="LOGO"
            />
            <Typography>Buniyadd</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a wesbite made for Buniyadd by Samarth & Keshav. Lorem
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="#" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/buniyadd" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
