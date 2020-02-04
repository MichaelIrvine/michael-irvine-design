import React from "react";

export default function info() {
  return (
    <div className="info _wrapper">
      <div className="info__column-01">
        <h3>Contact</h3>
        <p><a href="mailto:michaelirvinedesign@gmail.com">michaelirvinedesign@gmail.com</a></p>
        <p><a href="tel:236-777-9321">236-777-9321</a></p>
      </div>
      <div className="info__column-02">
        <p className="info__info-paragraph">
        Michael Irvine is based in Vancouver, Canada and works as a creative front end developer.
        Michael's experience and knowledge in graphic design and photography lends to a design driven approach to front end development.
        </p>
        <br />
        <p className="info__info-paragraph">
          Michael is currently available for hire and is open to remote or local positions, contract or full-time positions.
        </p>

      </div>
    </div>
  );
}
