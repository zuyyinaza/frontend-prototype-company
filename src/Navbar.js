import { useState } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="navbar">
      <div className="title">Company</div>
      <div className="nav">
        <div className="about" onMouseOver={() => setShowDropdown(true)} onMouseOut={() => setShowDropdown(false)}>
          <button>ABOUT</button>
          <div className="dropdown" hidden={!showDropdown}>
            <button>HISTORY</button>
            <button>VISION MISSION</button>
          </div>
        </div>
        <button>OUR WORK</button>
        <button>OUR TEAM</button>
        <button>CONTACT</button>
      </div>
    </div>
  );
}
