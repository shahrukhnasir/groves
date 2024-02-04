import React, { Component, useState } from "react";
import styles from "./navbar.module.css";
import { CaretRightOutlined } from "@ant-design/icons";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import CommanButton from "../../Componets/CommanButton/CommanButton";
import { useRouter } from "next/router";

const HorizontalMenu = () => {
  const router = useRouter();
  const [search, setsearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);

  const searchHandler = () => {
    setsearch(true);
  };
  const menuHandler = () => {
    setMenu(!menu);
    console.log("click ", menu);
  };
  const navigateHandler = (e, urlPath) => {
    e.preventDefault();
    router.push(urlPath);
  };
  const [dropDown, setDropDown] = useState(false);
  const dropDownHandler = () => {
    setDropDown(!dropDown);
  };


  const dropServiceHandler = () => {
    setDropDown(!dropDown);
    router.push({
      pathname: "/service",
    });
  };
  const dropShopHandler = () => {
    setDropDown(!dropDown);
    router.push({
      // pathname: "/shop",
      pathname: "https://us.fullscript.com/welcome/elysionhealth/signup?utm_medium=webreferral&utm_source=other&utm_campaign=abmwebbuttons_dark_200x200.svg&signup_source=website_buttons",
    });
  };


  const btn2 = (
    <>
      <div className={styles?.btnText}>Free </div>
      <div className={styles?.extraText}>Consultation</div>
    </>
  );
  const serviceMenu = [
    {
      id: 1,
      route: "/services",
      label: "Patient Portal",
    },
    {
      id: 1,
      route: "/services",
      label: "Patient Portal",
    },
  ];



  // const router = useRouter()
  const navigateTo = (routeId) => {
    // router.push(`/services/${routeId}`)
    router.push(
      {
        pathname: `/services/${routeId}`,
        query: routeId,
      },
      `/services/${routeId}`
    );
  }

  return (
    <>
      <div id={styles?.topMenuBarContainer} >
        <nav className="navbar navbar-expand-lg py-0" id={styles?.topHeader}>
          <div className="container p-0">
            <button
              // onClick={menuHandler}
              onClick={() => setActive(!active)}
              className="navbar-toggler shadow-none border-0"
              id={styles.toggleButton}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>{menu ? <RxCross1 /> : <CiMenuFries />}</span>
            </button>
            <div
              className={` ${styles.navToggle} collapse navbar-collapse`}
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                id={styles.resNav}
              >
                <li className="nav-item" id={styles?.navItem}>
                  <Link className="nav-link" href="/">
                    Dine with us
                  </Link>
                </li>
                
              
                <li className="nav-item" id={styles?.navItem}>
                  <Link className="nav-link" href="">
                    play your visit
                  </Link>
                </li>
                <li className="nav-item" id={styles?.navItem}>
                  <Link className="nav-link" href="">
                    events
                  </Link>
                </li>

                <li className="nav-item" id={styles?.navItem}>
                  <Link className="nav-link" href="">
                    view groves map
                  </Link>
                </li>
                <li className="nav-item" id={styles?.navItem}>
                  <Link className="nav-link" href="">
                    our story
                  </Link>
                </li>
                <li className="nav-item" id={styles?.navItem}>
                  <Link className="nav-link" href="">
                    contact us
                  </Link>
                </li>


                
              </ul>
            </div>
          </div>
        </nav>

       
      </div>
    </>
  );
};

export default HorizontalMenu;
