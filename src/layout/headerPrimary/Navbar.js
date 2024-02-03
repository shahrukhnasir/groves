import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import SideMenu from "./SideMenu";
import HorizontalMenu from "./HorizontalMenu";
import { FaInstagram, FaInstagramSquare, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CommanButton from "../../Componets/CommanButton/CommanButton";


const Navbar = () => {
  const [search, setsearch] = useState(false);

  const size = useWindowSize();;



  // Hook
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  return (
    <>

      <div className={`${styles?.topbar}  bg-transparet`}>
        <div className="row">
          <div class="col-lg-5 offset-lg-1">
            <Link href="/" legacyBehavior>
              <a className="navbar-brand" id={styles?.logo} href="/">
                <Image
                  src="/images/Groves_logo.png"
                  alt="Picture of the author"
                  width={165}
                  height={100}
                  className="img-fluid"
                />
              </a>
            </Link>
          </div>
          <div className="col-lg-3">
            <div className={styles?.content}>
              <ul className={styles?.TopLinks}>
                <li> <FaTiktok /></li>
                <li> <FaInstagramSquare /> </li>
                <li> <FaXTwitter /> </li>
                <li><FaSnapchatGhost /></li>
                

              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <CommanButton label="Login"/>
            </div>
        </div>
      </div>


      {size?.width !== undefined && size?.width >= 992 ? (
        <HorizontalMenu />
      ) : (
        <SideMenu />
      )}

      {!search == true ? (
        ""
      ) : (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  <img src="/images/logo.svg" alt="Picture of the author" />
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  type="text"
                  placeholder="Search..."
                  className={styles.inputField}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
