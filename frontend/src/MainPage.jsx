import { useState } from "react";
import Menu from "./Navbar";
import FemaleLogo from "./images/FemaleLogo2.png";
import MaleLogo from "./images/MaleLogo1.png";
import { Link } from "react-router-dom";
function MainPage() {
  const [gender, updateGender] = useState("");
  return (
    <div style={{ background: "#F5E9E7", height: "100vh" }}>
      <Menu />
      <div style={{ position: "relative", display: "inline-block" }}>
        <div
          style={{
            fontSize: "36px",
            position: "relative",
            zIndex: "1",
            color: "#9F9A9A",
          }}
          className="normalfont"
        >
          Your Dream Wardrobe,
        </div>
        <div
          className="intrestingfont"
          style={{
            fontSize: "50px",
            color: "#EAB8CB",
            position: "absolute",
            top: "15px",
            left: "0",
            zIndex: "0",
          }}
        >
          One Swipe Away!
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "5%",
        }}
      >
        <Link to="/men" style={{ textDecoration: "none" }}>
      <div
        onClick={() => {
          updateGender("male");
          console.log(gender);
        }}
        style={{ background: "white", width: "30vw", height: "50vh" }}
      >
        <img height="90%" src={MaleLogo} alt="Male Logo" />
        <div style={{ fontWeight: "600" }}>Male</div>
      </div>
    </Link>
    <Link to="/women">
        <div
          onClick={() => {
            updateGender("female");
            console.log(gender );
          }}
          style={{ background: "white", width: "30vw", height: "50vh" }}
        >
          <img height="90%" src={FemaleLogo} />
          <div style={{ fontWeight: "600" }}>Female</div>
        </div>
        </Link>
      </div>
    </div>
  );
}
export default MainPage;
