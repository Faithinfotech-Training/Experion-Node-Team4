import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright <a href="https://github.com/Faithinfotech-Training/Experion-Node-Team4"> Experion-Node-Team4</a>
      </MDBContainer>
    </div>
  </div>

);

export default Footer;
