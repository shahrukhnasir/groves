import React, { useState } from "react";
import Image from "next/image";
import styles from "../HeroSection/HeroSection.module.css";
import Link from "next/link";
import CommanButton from "../../../Componets/CommanButton/CommanButton";
function HeroSection() {
  const btn2 = (
    <>
      <div className={styles?.btnText}>Book an Appointment</div>
      <div className={styles?.extraText}>Appointment</div>
    </>
  );
  return (

    <>
      <section id={styles.mainHeroContainer}>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-5 offset-lg-1 my-auto"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.heroHeading}>
                <h1 className={styles.mainHeading}>
                  <div className={styles.mainHeadingInner}>The new
                  </div>

                  <div className={styles.HeadingSm}>era of luxury</div>
                </h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <CommanButton
                  showArrow={true}
                  className={styles.heroButton}
                  label="Book reservation now"
                />

              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className={styles.HeroImageContainer}>
                <div className={styles.HeroImage}>
                  {/* <Image
                      src={lady}
                      alt="Picture of the author"
                      // width={700}
                      // height={700}
                      quality={100}
                      sizes="100vw"
                      style={{
                        objectFit: 'cover',
                      }}
                    /> */}



                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className={`${styles.modal} modal fade`}
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content" id={styles.modal}>
              <div className="modal-header border-0">
               
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <video loop autoPlay muted className={styles.modalVideo}>
                  <source src="./video/health-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default HeroSection;
