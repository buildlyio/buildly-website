import React, { useState } from "react";
import NavbarContainer from "./../NavbarContainer";
import { Link } from "./../../util/router.js";
import { useAuth } from "./../../util/auth.js";
import "./styles.scss";

function Navbar(props) {
  const auth = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div>
            <Link to="/">
              <img src={props.logo} alt="Logo" width="200"/>
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <Link className="navbar-item">
              <Link className="navbar-item" to="/core">
                Core
              </Link>
              <Link className="navbar-item" to="/mesh">
                Mesh
              </Link>
              <Link className="navbar-item" to="/users">
                Users
              </Link>
              <Link className="navbar-item" to="/templates">
                Templates
              </Link>
              <Link className="navbar-item" to="/designer">
                Designer
              </Link>
            </Link>
            <Link className="navbar-item" to="">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
