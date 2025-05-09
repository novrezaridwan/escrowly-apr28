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

const ServicePage8 = () => (
    <>
        <Helmet>
            <title>Crypto Escrow for Real Estate – Secure Property Deals with USDT & USDC | Escrowly.com</title>
            <meta name="description" content="Close property deals securely with Escrowly’s real estate crypto escrow platform. Use USDT or USDC for buying, selling, and renting real estate globally—fraud-free and instant." />
            <meta name="keywords" content="real estate crypto escrow, escrow for property sales, USDT real estate escrow, USDC escrow property, crypto escrow for land, rental deposit crypto escrow, real estate smart contract escrow, blockchain escrow for homes, escrowly real estate, international real estate crypto escrow, secure crypto property transactions" />
            <meta name="author" content="Escrowly Real Estate Crypto Team" />
            <meta property="og:title" content="Escrowly.com – Secure Crypto Escrow for Real Estate Transactions" />
            <meta property="og:description" content="Buy or sell property using stablecoins. Escrowly enables global real estate transactions with trusted crypto escrow using USDT or USDC." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div>
            <main className="main-content">
                <Breadcrumbs 
                    breadcrumbs={[
                        { title: "Home", url: "/" },
                        { title: "Escrowly Services", url: "/services" },
                        { title: "Real Estate Escrow", url: "/secure-domain" },
                    ]}
                />  
                <section className="section-service-page">
                    <div className="container">
                        <SectionHeader 
                            label="Real Estate Escrow"
                            title="Secure Real Estate Escrow with Crypto"
                            className="centered"
                        />
                        <p className="service-page-description">Buying or selling property has always been one of the largest financial transactions people make in their lifetime. Traditionally, real estate transactions involve banks, lawyers, and agents, but with the advent of blockchain technology, things are changing. Escrowly is leading this change as the first fully crypto-native escrow platform, offering a safe and reliable way to complete real estate transactions using Stablecoins like USDT and USDC.</p>
                        <img className="service-page-image" src="/images/real-estate-escrow-crypto-01.jpg" alt="Real Estate Escrow with Crypto Payment" />
                        <div className="service-page-content row">
                            <div className="col col-left">
                                <h3>What is Real Estate Escrow?</h3>
                                <p>A real estate escrow is a financial arrangement where a neutral third party, like Escrowly, holds and regulates the payment of funds required for a property transaction. It ensures that the buyer and seller fulfill their respective obligations before money changes hands.</p>
                                <p>With Escrowly’s blockchain escrow service, real estate buyers and sellers can complete deals without fear of fraud, payment delays, or manipulation. And since crypto payments are irreversible, using secure P2P crypto escrow is not just smart - it is necessary.</p>
                                <h3>Why Escrowly.com is a Game-Changer in Real Estate</h3>
                                <p>Escrowly is not just another digital platform; it is the pioneer of fully crypto-native escrow services. Unlike conventional services that regard crypto as an afterthought, Escrowly was built for crypto by crypto experts. Here is why that matters for your next property deal:</p>
                                <ol>
                                    <li><strong>Only USDT and USDC are accepted - no volatile cryptocurrencies</strong></li>
                                    <li><strong>Registered with FinCEN and compliant as a Money Services Business</strong></li>
                                    <li><strong>Lightning-fast fund releases upon contract fulfillment</strong></li>
                                    <li><strong>Designed for crypto escrow for businesses and individual clients</strong></li>
                                    <li><strong>Full support for escrow for real estate closings and land and property auctions</strong></li>
                                </ol>
                                <h3>Types of Real Estate Transactions Supported</h3>
                                <ul>
                                    <li>Fraud Protection – Payments are held securely and only released when all contractual conditions are satisfied.</li>
                                    <li>Secure Fund Holding – Escrowly acts as a trusted intermediary, keeping funds safe throughout the transaction process.</li>
                                    <li>Transparency & Trust – Buyers and sellers can confidently complete transactions without fear of disputes or scams.</li>
                                    <li>Legal & Contract Compliance – Escrowly ensures all documentation is properly processed, reducing the risk of legal complications.</li>
                                    <li>Crypto-Friendly Transactions – In addition to traditional payment methods, Escrowly supports cryptocurrency payments for modern and secure transactions.</li>
                                </ul>
                                <h3>Make Your Real Estate Transactions Hassle-Free with Escrowly</h3>
                                <p>Whether you’re purchasing a home, selling commercial property, or investing in real estate, Escrowly provides a seamless and secure process. With Escrowly, you can eliminate uncertainty and conduct your transaction with confidence. Get started today and experience a smarter way to buy and sell real estate!</p>
                                
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

export default ServicePage8;