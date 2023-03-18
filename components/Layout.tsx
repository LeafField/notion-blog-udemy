import React from "react";
import Navbar from "./navbar/Navbar";

type Children = {
  children: React.ReactNode;
};

const Layout = ({ children }: Children) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
