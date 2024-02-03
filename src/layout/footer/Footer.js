import { useState } from "react";
import styles from "../footer/footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";
const Footer = () => {



	return (
		<>
			<div className={`${styles.footerContainer} container-fluid py-2`}>
				<div className="container" id={styles.container}>
					<div className="row">
						<div className="col-lg-4 px-0">
							<div className={styles.firstSection}>
								<Link href="/">
									<img
										src="../images/elysion-white-logo.png"
										className="img-fluid"
										alt="logo"
									/>
									<p className={styles.decs}>
										ELYSION
										Internal & Integrative Medicine
										Better Health Begins Here
									</p>
								</Link>

								<div className="">
									<span><Image src="/images/badge2.png"
										width={60}
										height={60}

									/></span>

									<span>
										<Image src="/images/badge.png"
											width={60}
											height={60}

										/>

									</span>
								</div>
							</div>
						</div>
						<div className="col-lg-2 px-0">
							<div className="">
								<div className={`${styles.secoundSection}`}>
									<h2 className={styles.QuikHeading}>Quick Links</h2>
									<ul className={`${styles.LinkSec} p-0`}>
										<li>
											<Link href="/" className={styles.footerLink}>
												{" "}
												Home{" "}
											</Link>
										</li>
										<li>
											<Link href="/about-us" className={styles.footerLink}>
												{" "}
												About Us{" "}
											</Link>
										</li>
										<li>
											<Link href="/service" className={styles.footerLink}>
												{" "}
												Service{" "}
											</Link>
										</li>
										<li>
											<Link href="/membership" className={styles.footerLink}>
												{" "}
												Membership{" "}
											</Link>
										</li>
										<li>
											<Link href="/faq" className={styles.footerLink}>
												{" "}
												FAQ's{" "}
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-2 px-0">
							<div className={`${styles.thirdSection}`}>
								<ul className={`${styles.LinkSec} p-0`}>
									<li>
										<Link href="/blogs" className={styles.footerLink}>
											{" "}
											Blogs{" "}
										</Link>
									</li>
									<li>
										<Link href="/termservice" className={styles.footerLink}>
											{" "}
											Terms of Service{" "}
										</Link>
									</li>
									<li>
										<Link href="/privacy-policy" className={styles.footerLink}>
											{" "}
											Privacy Policy
										</Link>
									</li>
									<li>
										<Link href="/contact-us" className={styles.footerLink}>
											{" "}
											Contact Us
										</Link>
									</li>

									<li>
										<Link href="/disclaimer" className={styles.footerLink}>
											{" "}
											Disclaimer
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 px-0">
							
							
						</div>

						<div className="col-lg-1 px-0">
							<div className="">
								<ul className={styles.iconsSection}>
									<li className="text-white">
										<div className={styles.rouded}>
											<Link target="_black" href="https://www.instagram.com/elysionhealth/?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr%C2%A0%C2%A0%C2%A0And">
												<FaInstagram  className={styles.icon} />
											</Link>
										</div>
									</li>

									<li className="text-white">
										<div className={styles.rouded}>
											<Link target="_black" href="https://www.facebook.com/elysionhealth?mibextid=LQQJ4d%20Can">
												<FaFacebookF className={styles.icon} />
											</Link>
											
										</div>
									</li>
									<li className="text-white">
										<div className={styles.rouded}>
											<Link target="_black" href="https://www.tiktok.com/@tlgibsonmatrix?_t=8iIqXf7JMvC&_r=1%C2%A0">
												<FaTiktok  className={styles.icon} />
											</Link>
										</div>
									</li>
									{/* <li className="text-white">
										<div className={styles.rouded}>
											<Link href="https://twitter.com/?lang=en">
												<FaTwitter className={styles.icon} />
											</Link>
										</div>
									</li>

									<li className="text-white">
										<div className={styles.rouded}>
											<Link href="">
												<FaMapMarkerAlt className={styles.icon} />
											</Link>
										</div>
									</li> */}
								</ul>
							</div>
						</div>
					</div>

					<hr className={styles.line} />

					<div className="text-center">
						<p className={styles.copyRight}>
							© 2023 Elysionn Health. All Right Reserved
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
