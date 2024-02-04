import React, { Component, useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { IoMdCart } from "react-icons/io";
import Link from "next/link";
import CommanButton from "../../Componets/CommanButton/CommanButton";
import { useRouter } from "next/router";
import { FaInstagramSquare, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const SideMenu = () => {
  const router = useRouter();

  const [active, setActive] = useState(false);
  const [canvas, setCanvas] = useState(false);

  const navigateHandler = (e, urlPath) => {
    e.preventDefault();
    router.push(urlPath);
    setCanvas(false);
  };
  return (
    <>
      {/* side menu start  */}
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Link href="/" onClick={(e) => navigateHandler(e, "/")}>
              {" "}
              <img
                src="./images/Groves_logo.png"
                alt="logo"
                className={styles.img}
              />
            </Link>

            <div className="row">
              <div className="col my-auto">
               
              </div>
             
            </div>

            <div onClick={() => setCanvas(true)}>
              <div
                className={active ? styles.activeHamburger : styles.hamburber}
              />
            </div>
          </div>
        </div>
        {/* {/ Mobile Header Start Here /} */}
        <div className={canvas ? "mobileheader active" : "mobileheader"}>
          <Link href="/" onClick={(e) => navigateHandler(e, "/")}>
            <div className={styles.logoBox}>
              <img
                src="/images/Groves_logo.png"
                alt="logo"
                className={styles.logoBox}
              />
            </div>
          </Link>
          <div className="inner-box">
            <div className="menu-inner">
              <div className="cancel">
                <button onClick={() => setCanvas(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
              <ul className="menus">
               
              
              
                <li className="menu-items">
                  <Link
                    href=""
                    className="menu-link"
                  >
                   Dine with us
                  </Link>
                </li>
                <li className="menu-items">
                  <Link
                    href=""
                    className="menu-link"
                  >
                   play your visit
                  </Link>
                </li>

                <li className="menu-items">
                  <Link
                    href=""
                    className="menu-link"
                  >
                   events
                  </Link>
                </li>
                <li className="menu-items">
                  <Link
                    href=""
                    className="menu-link"
                  >
                   view groves map
                  </Link>
                </li>

                <li className="menu-items">
                  <Link
                    href=""
                    className="menu-link"
                  >
                   our story
                  </Link>
                </li>
                <li className="menu-items">
                  <Link
                    href=""
                    className="menu-link"
                  >
                   contact us
                  </Link>
                </li>

                <li className="menu-items">
                  <Link
                    href=""
                  >
                    <CommanButton label="Login" />
                  </Link>
                </li>
                
              </ul>
              <ul className={styles?.TopLinks}>
            <li> <FaTiktok className={styles?.social_icon} /></li>
            <li> <FaInstagramSquare className={styles?.social_icon} /> </li>
            <li> <FaXTwitter className={styles?.social_icon}/> </li>
            <li><FaSnapchatGhost className={styles?.social_icon} /></li>
          </ul>
            </div>
          </div>
        </div>
        {/* {/ Mobile Header End Here /} */}
      </div>
    
      {/* side menu end  */}
    </>
  );
};

export default SideMenu;
