import React from "react";
import buttonSpin from "../../assets/Globeframe.gif";

const Loader = () => {
  return (
    <>
      <div>
        <img
          src={buttonSpin}
          style={{ height: "25px", filter: "invert(100%)" }}
        />
      </div>
    </>
  );
};

export default Loader;
