import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import SideMenu from "./SideMenu";
import HorizontalMenu from "./HorizontalMenu";
import { FaInstagramSquare, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CommanButton from "../../Componets/CommanButton/CommanButton";
import { MdKeyboardArrowDown } from "react-icons/md";


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
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  return (
    <>

<section className={`${styles?.topbar}`}>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-5 offset-lg-1">
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
      <div className="col-lg-3 my-auto">
        <div className={styles?.content}>
          <ul className={styles?.TopLinks}>
            <li> <FaTiktok className={styles?.social_icon} /></li>
            <li> <FaInstagramSquare className={styles?.social_icon} /> </li>
            <li> <FaXTwitter className={styles?.social_icon}/> </li>
            <li><FaSnapchatGhost className={styles?.social_icon} /></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 py-2">
        <CommanButton label="Login"/>
      </div>

      <div className="col-lg-1 py-2">
        <span><MdKeyboardArrowDown /></span>
      </div>
    </div>
  </div>  
</section>
      {size?.width !== undefined && size?.width >= 992 ? (
        <HorizontalMenu />
      ) : (
        <SideMenu />
      )}


    </>
  );
};
export default Navbar;
