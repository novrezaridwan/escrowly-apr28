import React from "react";
import { Helmet } from "react-helmet-async";
import "./ServicePage.scss";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { Navigation, Scrollbar, Grid } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Button from "../../components/Button/Button";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Innovate from "../../sections/Innovate/Innovate";

const ServicePage3 = () => (
    <>
        <Helmet>
            <title>Motor Vehicle Escrow with Crypto | Escrowly.com</title>
            <meta name="description" content="Buy or sell cars, motorcycles, or luxury vehicles securely with USDT or USDC using Escrowly – the world’s first fully crypto-native vehicle escrow platform." />
            <meta name="keywords" content="motor vehicle escrow, car escrow, crypto car transactions, USDT vehicle escrow, USDC auto escrow, motorcycle escrow crypto, luxury vehicle escrow, secure car buying crypto, blockchain escrow for vehicles, Escrowly, FinCEN registered escrow" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="Escrowly – Secure Crypto Escrow for Cars and Vehicles" />
            <meta property="og:description" content="Make car deals safe and borderless. Escrowly lets you buy or sell motor vehicles using stablecoins with full protection and smart contract security." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div>
            <main className="main-content">
                <Breadcrumbs 
                    breadcrumbs={[
                        { title: "Home", url: "/" },
                        { title: "Escrowly Services", url: "/escrowly-services" },
                        { title: "Motor Vehicle Escrow  ", url: "/secure-domain" },
                    ]}
                />  
                <section className="section-service-page">
                    <div className="container">
                        <SectionHeader 
                            label="Motor Vehicle Escrow "
                            title="Secure Your Vehicle Purchase with Escrowly’s Motor Vehicle Escrow Service"
                            className="centered"
                        />
                        <p className="service-page-description">When making large purchases or sales online, ensuring the security of the transaction is crucial. In the case of cryptocurrency deals, the risk is even higher due to the irreversible nature of crypto transactions and the potential for fraud. This is where our General Escrow Services come in.</p>
                        <img className="service-page-image" src="/images/service-page-3.jpg" alt="" />
                        <div className="service-page-content row">
                            <div className="col col-left">
                                <h3>Why You Need Protection When Buying a Used Car Online</h3>
                                <p>Many used cars may appear to be in excellent condition, but hidden mechanical issues could cost you more than the vehicle itself. A personal inspection might not be enough, and hiring a mechanic before purchase isn't always feasible. Moreover, shipping concerns add another layer of risk—what if the car arrives in a different condition than advertised? Without proper buyer protection, securing a refund can be nearly impossible.</p>
                                <h6>How Escrowly Eliminates Fraud in 5 Simple Steps</h6>
                                <p>Escrowly ensures that buyers only release funds once they receive the exact vehicle they paid for. If the car doesn’t meet expectations, you can return it and get a full refund. Here’s how it works:</p>
                                <ol>
                                    <li><strong>Buyer and Seller Agree on Terms</strong> – Both parties establish the conditions of the transaction, including payment, shipping, and inspection period.</li>
                                    <li><strong>Buyer Deposits Funds with Escrowly</strong> – The buyer submits the payment using cryptocurrency or other approved methods into our secure escrow account.</li>
                                    <li><strong>Seller Ships the Vehicle</strong> – Once Escrowly verifies the funds, the seller ships the car and provides tracking details.</li>
                                    <li><strong>Buyer Inspects the Vehicle</strong> – Upon delivery, the buyer has a predetermined inspection period to ensure the car matches the agreed conditions.</li>
                                    <li><strong>Escrowly Releases Payment to Seller</strong> – If the buyer approves the vehicle, Escrowly transfers the funds to the seller. If issues arise, the buyer can return the vehicle for a refund.</li>
                                </ol>

                                <h6>Lease Only</h6>

                                <ul>
                                    <li>0.02% of the domain’s value (minimum $200) × holding period (in months).</li>
                                </ul>

                                <h3>Protect Yourself Against Automotive Fraud</h3>
                                <p>To minimize the risk of fraud, follow these steps:</p>
                                <ul>
                                    <li>Check Seller Reviews: Many online marketplaces offer seller ratings and customer feedback. Read reviews to identify reputable sellers and avoid potential scams.</li>
                                    <li>Use Secure Payment Methods: Not all payment providers offer buyer protection. Unlike traditional methods like PayPal, which may not cover disputes for vehicle purchases, Escrowly ensures funds are securely held until both parties fulfill their obligations.</li>
                                    <li>Utilize a Trusted Escrow Service: Escrowly eliminates fraud by holding funds securely and allowing buyers to set inspection conditions. If the vehicle fails inspection, the buyer gets their money back.</li>
                                </ul>
                                <h3>Additional Motor Vehicle Services for Peace of Mind</h3>
                                <h6>For Buyers</h6>
                                <ul>
                                    <li>Confidence that the car is exactly as described.</li>
                                    <li>Full refund if the vehicle does not meet the agreed-upon conditions.</li>
                                    <li>Secure cryptocurrency transactions, eliminating the risk of fraud.</li>
                                </ul>
                                <h6>For Sellers</h6>
                                <ul>
                                    <li>Assurance that the buyer’s payment is secured before shipping the vehicle.</li>
                                    <li>Protection against fraudulent checks and chargebacks.</li>
                                    <li>Fast, transparent transactions without unnecessary risks.</li>
                                </ul>

                                <h3>Low Fees, Maximum Security</h3>
                                <p>Escrowly offers a cost-effective escrow service that can be paid by the buyer, seller, or split between both parties.</p>

                                <h3>Get Complete Confidence in Your Vehicle Transactions</h3>
                                <p>Buying and selling a vehicle online involves large sums of money, making fraud prevention critical. Escrowly’s secure, transparent 5-step process ensures both buyers and sellers get exactly what was agreed upon. With additional services like Lien Payoff and Title Collection, Escrowly makes your car transaction smoother and more secure.</p>

                                <Button 
                                    url="#get-started"
                                    text="Get Started Now"
                                    icon="/img/btn-arrow-right.svg"
                                    delay={0}
                                    className="btn btn-primary"
                                />  
                            </div>
                            <div className="col col-right">
                                <h4>Other Services</h4>
                                <Button 
                                    url="#get-started"
                                    text="All Services"
                                    icon="/img/btn-arrow-right-dark.svg"
                                    delay={0}
                                    className="btn btn-link-dark"
                                />  
                                
                                <div className="service-page-carousel-wrapper">
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: { opacity: 1, transition: { duration: 0.6, delay: 0.8 } }
                                        }}
                                    >
                                        <Swiper
                                            // onSwiper={handleSwiper}
                                            speed={1000}
                                            loop={true} 
                                            // slidesPerView="auto"
                                            modules={[Navigation, Scrollbar, Grid]}
                                            scrollbar={{
                                                hide: false,
                                                dragSize: 250
                                            }}
                                            breakpoints={{
                                                320: { 
                                                    spaceBetween: 12,
                                                    slidesPerView: "auto",  
                                                    grid: {
                                                        rows: 1,  
                                                        fill: "row"
                                                    },
                                                    scrollbar:{
                                                        hide: false,
                                                        dragSize: 101
                                                    }
                                                }, 
                                                768: { 
                                                    spaceBetween: 0,
                                                    slidesPerView: 1, 
                                                    loop: true,
                                                    loopAddBlankSlides: true,
                                                    loopAdditionalSlides: 4,
                                                    grid: {
                                                        rows: 3, 
                                                    },
                                                    scrollbar:{
                                                        hide: true,
                                                        dragSize: 250
                                                    }
                                                }
                                            }}
                                        >
                                            <SwiperSlide style={{ width: 'auto' }}>
                                                <ServiceCard
                                                    icon="/img/icon-hiw-3.svg"
                                                    title="General Escrow Services "
                                                    text="Secure transactions for goods, services, and contracts with full protection"
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide style={{ width: 'auto' }}>
                                                <ServiceCard
                                                    icon="/img/icon-hiw-3.svg"
                                                    title="Domain Name Escrow"
                                                    text="Ensure a safe and smooth transfer of domain ownership with escrow protection"
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide style={{ width: 'auto' }}>
                                                <ServiceCard
                                                    icon="/img/icon-hiw-3.svg"
                                                    title="Motor Vehicle Escrow "
                                                    text="Buy or sell vehicles confidently with funds securely held until transfer"
                                                />
                                            </SwiperSlide>
                                        </Swiper>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Innovate/>
            </main>
        </div>
    </>
);

export default ServicePage3;