import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav-list-col-1">
          <li className="footer__nav-list-item">
            <a href="mailto:michaelirvinedesign@gmail.com">michaelirvinedesign@gmail.com</a>
          </li>
          <li className="footer__nav-list-item">
            <a href="tel:236-777-9321">236-777-9321</a>
          </li>
          <li className="footer__nav-list-item">
            <a href="#">Vancouver, Canada</a>
          </li>
        </ul>
        <ul className="footer__nav-list-col-2">
          <li className="footer__nav-list-item">
            <a href="https://github.com/MichaelIrvine">Github</a>
          </li>
          <li className="footer__nav-list-item">
            <a href="https://codepen.io/michaelirvine">Codepen</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
