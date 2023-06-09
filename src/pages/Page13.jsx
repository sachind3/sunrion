import { useState } from "react";
import Nav from "../components/Nav";

function Page13(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="screen" onClick={() => setShow(false)}>
      {props.children}
      <div className="flex">
        <img src="images/14/images/img1.png" alt="img" />
        <div>
          <img
            src="images/14/images/img2.png"
            alt="img"
            className="animated fadeInRight d-1"
          />
          <img
            src="images/14/images/img3.png"
            alt="img"
            className="animated fadeInRight d-2"
          />
        </div>
      </div>
      <div className="flex">
        <img
          src="images/14/images/img4.png"
          alt="img"
          className="animated fadeInRight d-3"
        />
        <div className="flex flex-wrap self-start">
          <img
            src="images/14/images/img5.png"
            alt="img"
            className="animated zoomIn d-4"
          />
          <img
            src="images/14/images/img6.png"
            alt="img"
            className="animated zoomIn d-5"
          />
          <img
            src="images/14/images/img7.png"
            alt="img"
            className="animated zoomIn d-6"
          />
          <img
            src="images/14/images/img8.png"
            alt="img"
            className="animated zoomIn d-7"
          />
          <img
            src="images/14/images/img9.png"
            alt="img"
            className="animated zoomIn d-8"
          />
        </div>
      </div>

      <div className={`refDiv ${show ? `show` : ""}`}>
        <div
          className="icon_ref"
          onClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
        ></div>
        <img src="images/14/images/ref.png" className="refImg" alt="img" />
      </div>
    </div>
  );
}
export default Nav(Page13);
