import * as React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          background: "#F5E9E7",
          width: "50vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ width: "50%"}} src={logo} />
      </div>
      <div style={{ background: "#F5E9E7", width: "50vw", height: "100vh" }}>
        {/* ading image of closet */}
        <div></div>
        {/* <div style={{display:"flex",justifyContent:"center",alignItems:"end"}}> */}
        <Link to={"/MainPage"}>
        <button
          style={{
            background: "#EAB8CB",
            border: "1px solid #E29CB7",
            position: "absolute",
            bottom: "0",
            marginBottom: "5%",
            justifyContent: "center",
            // marginLeft: "20%",
            height: "5%",
          }}
        
        >
          lets get started
        </button>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
}
export default LandingPage;
