import React from "react";
import { Outlet, useLocation } from "react-router";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {!isHomePage && <NavBar />}
      <Outlet />
      {!isHomePage && <Footer />}
    </>
  );
}

// useLocation() permite saber qual página está carregada.
// Se for a Homepage ("/"), o Header e Footer não aparecem.
// Em todas as outras páginas, o Header e Footer continuam a aparecer normalmente.
