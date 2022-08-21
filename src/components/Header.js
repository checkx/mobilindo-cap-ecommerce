import React, { useEffect, useState, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import { Collapse, NavLink, Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Container, } from "reactstrap";


const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = useCallback(async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  }, [user]);

  useEffect(() => {
    if (loading) return;
    if (user) {
      fetchUserName();
    }
  }, [loading, user, error, navigate, fetchUserName]);



  return (
    <>
      {/* <!-- header  --> */}
      <Container>
        <Navbar
          color="white"
          light expand="md"
        >
          <NavbarBrand href="/" className="ml-auto">
            <h3>MOBILINDO {user && `HALO, ${name.toLocaleUpperCase()}! `}</h3>
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
              <NavItem className="p-2 ml-auto">
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem className="p-2 ml-auto">
                <NavLink href="/Products">Product</NavLink>
              </NavItem>
              {user && (
                <NavItem className="p-2 ml-auto">
                  <NavLink href="/Cart">Cart</NavLink>
                </NavItem>
              )}

              {user ? (
                <NavItem className="ml-auto">
                  <NavLink href="/" onClick={logout}><button className="btn btn-outline-primary me-2" type="button">Logout</button></NavLink>
                </NavItem>
              ) : (
                <NavItem >
                  <NavLink href="/Login"><button className="btn btn-outline-primary me-2" type="button">Login</button></NavLink>
                </NavItem>

              )}
            </Collapse>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
