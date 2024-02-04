import { useState } from "react";
import styles from "../footer/footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaInstagramSquare, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {



	return (
		<>
			<div className={`${styles.footerContainer} container-fluid py-2`}>
				<div className="container" id={styles.container}>
					<div className="row">
						<div className="col-lg-6 px-0">
							<div className={styles.firstSection}>


								<p className={styles.decs}>Join us for an	</p>
								<p className={styles.decs}>unforgettable experience
								</p>



							</div>
						</div>
						<div className="col-lg-6 px-0">
							<div className="">
								<div className={`${styles.secoundSection}`}>
									<h2 className={styles.QuikHeading}>DONWLOAD  THE GROVES APP</h2>

									<Image src="/images/play_store.png" width={250} height={50} />
								</div>
							</div>
						</div>
						<div className="col-lg-3 px-0">
							<div className={`${styles.thirdSection}`}>
								<ul className={`${styles.LinkSec} p-0`}>

									<li>
										<Link href="/blogs" className={styles.footerLink}>
											Location
										</Link>
									</li>	<li>
										<Link href="/blogs" className={styles.footerLink}>
											{" "}
											Al-Hizam Park{" "}
										</Link>
									</li>
									<li>
										<Link href="" className={styles.footerLink}>
											Al-Semairi, Yanbu Al Bahr 46455
										</Link>
									</li>
									<li>
										<Link href="" className={styles.footerLink}>
											Riyah Saudi Arabia
										</Link>
									</li>



								</ul>
							</div>
						</div>

						<div className="col-lg-3 px-0">
							<div className={`${styles.thirdSection}`}>
								<ul className={`${styles.LinkSec} p-0`}>

									<li>
										<Link href="/blogs" className={styles.footerLink}>
											Working Hours
										</Link>
									</li>	<li>
										<Link href="/blogs" className={styles.footerLink}>
											{" "}
											Al-Hizam Park{" "}
										</Link>
									</li>
									<li>
										<Link href="" className={styles.footerLink}>
											Al-Semairi, Yanbu Al Bahr 46455
										</Link>
									</li>
									<li>
										<Link href="" className={styles.footerLink}>
											Riyah Saudi Arabia
										</Link>
									</li>



								</ul>
							</div>
						</div>

						<div className="col-lg-3 px-0">
							<div className={`${styles.thirdSection}`}>
								<ul className={`${styles.LinkSec} p-0`}>

									<li>
										<Link href="/blogs" className={styles.footerLink}>
											Guest Service call
										</Link>
									</li>	<li>
										<Link href="/blogs" className={styles.footerLink}>
											{" "}
											Al-Hizam Park{" "}
										</Link>
									</li>
									<li>
										<Link href="" className={styles.footerLink}>
											Al-Semairi, Yanbu Al Bahr 46455
										</Link>
									</li>
									<li>
										<Link href="" className={styles.footerLink}>
											Riyah Saudi Arabia
										</Link>
									</li>



								</ul>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-8 px-0">
							<div>


								<img
									src="/images/Groves_logo.png"
									className="img-fluid py-3"
									alt="logo"
								/>
							</div>
							<div className="row">
								<div className="col-3">
									<p className={styles.copyRight}>
										Term and Conditions
									</p>

								</div>

								<div className="col-2">
									<p className={styles.copyRight}>
										Privacy Policy
									</p>
								</div>

								<div className="col-4">
									<p className={styles.copyRight}>
										© 2023 The Groves for Entertainment
									</p>
								</div>
							</div>

						</div>
						<div className="col-lg-4">
							<div className={styles?.iconsSection}>
								<ul className={styles?.TopLinks}>
									<li> <FaTiktok className={styles?.icon} /></li>
									<li> <FaInstagramSquare className={styles?.icon} /> </li>
									<li> <FaXTwitter className={styles?.icon} /> </li>
									<li><FaSnapchatGhost className={styles?.icon} /></li>
								</ul>
							</div>

							<div className="text-end">

								
							<img
									src="/images/visa.png"
									className="img-fluid me-5"
									alt="logo"
								/>
							</div>
						</div>


					</div>

				</div>
			</div>
		</>
	);
};

export default Footer;
