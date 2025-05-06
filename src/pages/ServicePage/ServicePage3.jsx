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
                            label="Motor Vehicle Escrow"
                            title="Motor Vehicle Escrow from Escrowly.com"
                            className="centered"
                        />
                        <p className="service-page-description">The experience of buying your dream car and selling a collector’s vehicle should be exciting rather than full of stress. Conventional motor vehicle trades suffer from fundamental problems which include payment fraud, difficulties in title transfer difficulties, and inadequate communication between sellers and buyers. Crypto escrow services act as the solution to resolve these risks.</p>
                        <img className="service-page-image" src="/images/motor-vehicle-escrow-1.jpg" alt="Motor Vehicle Escrow" />
                        <div className="service-page-content row">
                            <div className="col col-left">
                                <h3>Buying and Selling Cars Shouldn’t Be Risky</h3>
                                <p>The Escrowly platform stands as the first complete crypto-native escrow solution which offers vehicle deals that combine transparency with speed and resistance to fraud. Our platform accepts only USDC and USDT, to provide stable peer-to-peer vehicle transactions that are completely secure across the world. The blockchain escrow service from Escrowly provides complete protection to all parties throughout the sale process regardless of the vehicles involved including sedans, luxury SUVs or motorcycles.</p>
                                <h3>Why Use Crypto Escrow for Car Transactions?</h3>
                                <p>The process of vehicle transactions carries substantial risks to both buyers and sellers. Crypto payments speed up transactions and create worldwide accessibility but become non-reversible transactions when escrow services are not utilized. A secure crypto escrow system for vehicle transactions functions as the key transformation in this buying process. The benefits of using Escrowly include:</p>
                                <ul>
                                    <li><strong>Buyer and Seller Agree on Terms</strong> – Both parties establish the conditions of the transaction, including payment, shipping, and inspection period.</li>
                                    <li><strong>Buyer Deposits Funds with Escrowly</strong> – The buyer submits the payment using cryptocurrency or other approved methods into our secure escrow account.</li>
                                    <li><strong>Seller Ships the Vehicle</strong> – Once Escrowly verifies the funds, the seller ships the car and provides tracking details.</li>
                                    <li><strong>Buyer Inspects the Vehicle</strong> – Upon delivery, the buyer has a predetermined inspection period to ensure the car matches the agreed conditions.</li>
                                    <li><strong>Escrowly Releases Payment to Seller</strong> – If the buyer approves the vehicle, Escrowly transfers the funds to the seller. If issues arise, the buyer can return the vehicle for a refund.</li>
                                </ul>

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