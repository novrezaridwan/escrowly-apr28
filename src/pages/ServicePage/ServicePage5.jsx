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

const ServicePage5 = () => (
    <>
        <Helmet>
            <title>Crypto Escrow for Digital Goods & Online Services | Escrowly.com</title>
            <meta name="description" content="Protect your crypto payments when buying or selling digital goods like software, e-books, subscriptions, or design services with Escrowly’s secure USDT & USDC escrow." />
            <meta name="keywords" content="crypto escrow for digital goods, escrow for online services, USDT digital escrow, USDC escrow service, secure digital product payment, SaaS escrow, software license escrow, e-book crypto escrow, design service escrow, subscription crypto escrow, digital marketplace escrow, crypto escrow platform, Escrowly escrow service" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="Escrowly.com – Secure Crypto Escrow for Digital Products" />
            <meta property="og:description" content="Avoid fraud and permanent crypto loss. Use Escrowly to safely exchange digital goods and services with stablecoin escrow and dispute resolution." />
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
                        { title: "Online Goods & Digital Items  ", url: "/secure-domain" },
                    ]}
                />  
                <section className="section-service-page">
                    <div className="container">
                        <SectionHeader 
                            label="Online Goods & Digital Items "
                            title="Online Goods & Digital Items with Escrowly"
                            className="centered"
                        />
                        <p className="service-page-description">In this digital-first economy, digital products and services have become an essential part of business operations as well as personal daily routines. The risks involved with crypto payment fraud and non-delivery and permanent loss of funds discourage many buyers and sellers from participating in digital transactions. Escrowly introduces a game-changing escrow solution with a native platform designed solely for secure stablecoin (USDT and USDC) transactions. Through Escrowly, buyers can protect their digital assets as well as downloadable software and SaaS subscriptions before both parties approve the purchases.</p>
                        <img className="service-page-image" src="/images/online-goods-digital-items01.jpg" alt="Online Goods & Digital Items with Escrowly" />
                        <div className="service-page-content row">
                            <div className="col col-left">
                                <h3>What Are Online Goods and Digital Items?</h3>
                                <p>Online goods and digital items describe all electronically delivered products and services that remain untouched by physical handling. These include:</p>
                                <ol>
                                    <li><strong>Buyer and Seller Agree on Terms</strong> – Both parties define transaction details, including delivery terms.</li>
                                    <li><strong>Buyer Sends Payment to Escrowly</strong> – Funds are securely held in escrow.</li>
                                    <li><strong>Seller Delivers the Item</strong> – The seller provides the goods or digital asset as per the agreement.</li>
                                    <li><strong>Buyer Confirms Receipt</strong> – The buyer verifies that the item meets expectations.</li>
                                    <li><strong>Escrowly Releases Payment to Seller</strong> – Once the buyer confirms, the seller receives the funds.</li>
                                </ol>
                                <h3>Why Use Escrowly for Online & Digital Transactions?</h3>
                                <ul>
                                    <li>Fraud Prevention – No payment is released until goods are received and verified.</li>
                                    <li>Chargeback Protection – Eliminates the risk of payment reversals common in digital sales.</li>
                                    <li>Buyer Security – Ensures that the digital item or online goods meet the agreed terms.</li>
                                    <li>Seller Confidence – Guarantees payment once delivery is confirmed.</li>
                                    <li>Versatile Transactions – Supports physical online goods and various digital assets like software, domains, and NFTs.</li>
                                    <li>Crypto Payments Accepted – Conduct transactions securely with cryptocurrency.</li>
                                </ul>
                                <p>With Escrowly, you can trade online goods and digital assets with complete confidence. Whether you're a freelancer, a digital entrepreneur, or an online business, our secure escrow service ensures every transaction is fair and transparent. Start your secure transaction now and experience the safest way to buy and sell online!</p>
                                
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

export default ServicePage5;