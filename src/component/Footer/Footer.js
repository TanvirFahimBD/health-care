import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* info & address area */}
          <div className="col">
            <h5>Med. Health</h5>
            <ul className="list-unstyled">
              <li>234-452-1532</li>
              <li>med.health@gmail.com</li>
              <li>17 Street Khulna</li>
              <li>Khulna, Bangladesh</li>
            </ul>
          </div>

          {/* contact us area*/}
          <div className="col">
            <h5>CONTACT US</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Groups</a>
              </li>
              <li>
                <a href="#">Meet</a>
              </li>
              <li>
                <a href="#">Event</a>
              </li>
            </ul>
          </div>

          {/* social links area */}
          <div className="col">
            <h5>SOCIAL LINKS</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>

          {/* inbox area */}
          <div className="col">
            <h5>Inbox Us</h5>
            <br />
            <input type="email" />
            <button className="btn-msg">Send</button>
          </div>
        </div>
        <hr />

        {/* copyright area */}
        <div className="row">
          <p id="copyright" className="col-sm">
            &copy; {new Date().getFullYear()} Med. Health | All rights reserved
            | Terms of services | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
