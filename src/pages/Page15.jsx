import { useState } from "react";
import Nav from "../components/Nav";

function Page15(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="screen" onClick={() => setShow(false)}>
      {props.children}
      <div className="flex">
        <img src="images/16/images/img1.png" alt="img" />
        <div>
          <img
            src="images/16/images/img2.png"
            alt="img"
            className="animated fadeInRight d-1"
          />
          <img
            src="images/16/images/img3.png"
            alt="img"
            className="animated fadeInRight d-2"
          />
        </div>
      </div>
      <img
        src="images/16/images/img4.png"
        alt="img"
        className="animated fadeInRight d-3"
      />
      <div className="flex">
        <div className="flex flex-col">
          <img
            src="images/16/images/img5.png"
            alt="img"
            className="animated fadeInRight d-4"
          />
          <img
            src="images/16/images/img6.png"
            alt="img"
            className="animated fadeInRight d-5"
          />
          <img
            src="images/16/images/img7.png"
            alt="img"
            className="animated fadeInRight d-6"
          />
          <img
            src="images/16/images/img8.png"
            alt="img"
            className="animated fadeInRight d-7"
          />
        </div>
        <div className="flex flex-col">
          <img
            src="images/16/images/img9.png"
            alt="img"
            className="animated fadeInRight d-8"
          />
          <div className="flex">
            <div>
              <img
                src="images/16/images/img10.png"
                alt="img"
                className="animated fadeInRight d-9"
              />
              <img
                src="images/16/images/img11.png"
                alt="img"
                className="animated fadeInRight d-10"
              />
            </div>
            <img
              src="images/16/images/img12.png"
              alt="img"
              className="animated zoomIn d-10"
            />
          </div>
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
        <img src="images/16/images/ref.png" className="refImg" alt="img" />
      </div>
    </div>
  );
}
export default Nav(Page15);
