import React from "react";
import { NavLink as Link } from "react-router-dom";
import useUser from "../hooks/useUser";
const NavBar = (props) => {
  const { isLogged } = useUser();

  let handleEvent = (event) => {
    const elem = event.target;
    if (
      elem.classList.contains("active") &&
      props.pathname === elem.getAttribute("href")
    ) {
      event.preventDefault();
    }
  };

  console.log("Render NAV", props.isLogged);
  let listOfLinks;
  if (isLogged) {
    listOfLinks = [
      <Link
        key="0"
        activeClassName="active"
        exact
        onClick={handleEvent}
        title="Turnos"
        to="/"
      >
        Turnos
      </Link>,
      <Link
        key="1"
        activeClassName="active"
        onClick={handleEvent}
        title="Pacientes"
        to="/pacientes"
      >
        Pacientes
      </Link>,
      <Link
        key="2"
        activeClassName="active"
        onClick={handleEvent}
        title="Obras Sociales"
        to="/obras-sociales"
      >
        Obras Sociales
      </Link>,
    ];
  } else {
    listOfLinks = [
      <Link
        key="0"
        activeClassName="active"
        exact
        onClick={handleEvent}
        title="Ingresar"
        to="/"
      >
        Ingresar
      </Link>,
    ];
  }
  return (
    <nav>
      <div className="container">{listOfLinks}</div>
    </nav>
  );
};

export default NavBar;
