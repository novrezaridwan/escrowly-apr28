import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const AMLKYCPolicy = () => (
    <>
        <Helmet>
            <title>AML & KYC Policy – Escrowly Crypto Escrow Compliance</title>
            <meta name="description" content="Read Escrowly's AML and KYC Policy. Learn how we prevent fraud, money laundering, and financial crimes with secure identity verification and compliance protocols." />
            <meta name="keywords" content="AML policy, KYC policy, Escrowly compliance, crypto AML regulations, KYC verification crypto, secure crypto escrow, anti-money laundering, crypto identity check, beneficial ownership, PEPs, FATF high-risk countries, crypto compliance policy, blockchain due diligence" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="AML & KYC Policy – Escrowly Crypto Escrow Compliance" />
            <meta property="og:description" content="Escrowly's AML/KYC Policy outlines how we verify identities and monitor transactions to fight fraud and financial crimes. Stay compliant and secure with crypto escrow." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div>
            <main className="main-content">
                <Breadcrumbs 
                    breadcrumbs={[
                        { title: "Home", url: "/" },
                        { title: "Privacy", url: "/privacy-policy" },
                        { title: "AML & KYC Policy", url: "/aml-kyc-policy" },
                    ]}
                />
                
                <section className="section-blog-article">
                    <div className="container">
                        <h1>AML & KYC Policy</h1>
                        <div className="post-meta">
                            <ul className="post-categories">
                                <li>Finance & Security</li>
                            </ul>
                            <span className="post-date">31st March 2024</span>
                            <div className="span time-to-read"><img src="/img/icon-time.svg" alt="" />7 min read</div>
                        </div>
                        <div className="blog-article-content">
                            <h3>1. Introduction</h3>
                            <p>Welcome to Escrowly.com. We, at Escrowly, are a group of people who have been working on online transactions, who believe in secure crypto transactions and to do so we have adapted a complete AML and KYC policy to stop fraud, laundering, and financial crimes This policy is applicable to all our customers and users of our Escrowly platform.</p>
                            <h3>2. Why is compliance with AML and KYC important?</h3>
                            <p>The purpose of AML/KYC legislation is to forbid unlawful activities such as money laundering, identity theft, fraud, terrorist financing, and other financial crimes. By verifying client identities and keeping an eye on transactions, we contribute to the creation of a safe and secure ecosystem for all end users.</p>
                            <h3>3. Identity Checking (KYC Conditions)</h3>
                            <p>Before using our crypto escrow services, every Escrowly client base that exceeds the threshold amount must finish our KYC verification process. This comprises:</p>
                            <h4>Individual Users</h4>
                            <ol>
                                <li>1. Date of Birth</li>
                                <li>2. Government-Issued Identification (passport, driver's license, or national ID)</li>
                                <li>3. Proof of Address (utility bill, bank statement, or official document, no more than three months old)</li>
                                <li>4. Selfie Verification (a live photo or video with the submitted ID)</li>
                                <li>5. Full Name (matching government-issued ID)</li>
                            </ol>
                            <h4>Businesses or companies</h4>
                            <ol>
                                <li>1. List of Beneficial Owners & Directors (together with their KYC information)</li>
                                <li>2. Legal Entity Type (LLC, Corporation, etc)</li>
                                <li>3. Business Address Verification</li>
                                <li>4. Articles of Incorporation or Business License</li>
                            </ol>
                            <h3>4. EDD, or Enhanced Due Diligence</h3>
                            <p>Some clients could need Enhanced Due Diligence (EDD) because they are deemed high-risk. This pertains to:</p>
                            <ol>
                                <li>1. People who are politically exposed (PEPs) and users from high-risk countries (as determined by FATF)</li>
                                <li>2. Deals worth more than $10,000</li>
                                <li>3. Clients who made complex or unusual transactions</li>
                            </ol>
                            <p>Additional verification procedures, such a video call, the submission of more documents, or continuing transaction evaluations, might be included in EDD.</p>
                            <blockquote>At Escrowly, we prioritize security and transparency in digital transactions. By leveraging cutting-edge escrow technology, we protect buyers and sellers from fraud, ensuring every payment is safe, verified, and reliable. Join us in building a more secure digital economy</blockquote>
                            <p>Escrowly provides a seamless and transparent way to conduct financial transactions, ensuring that funds are held securely until both parties fulfill their agreed-upon terms. By integrating an escrow system with cryptocurrency, we make digital payments safer, more efficient, and more reliable.</p>
                            <h4>Benefits of Using Escrowly</h4>
                            <p>Escrowly offers a reliable and secure platform for businesses and individuals engaged in online transactions. By utilizing advanced technologies and best practices, Escrowly ensures that all parties involved in a transaction can have peace of mind. Here’s how Escrowly protects your interests:</p>
                            <ul>
                                <li>Fraud Prevention: Ensures that payments are only processed when conditions are met.</li>
                                <li>Secure Crypto Transactions: Reduces the risks of scams in the volatile crypto market.</li>
                                <li>Trust & Transparency: Builds confidence between buyers and sellers, fostering long-term business relationships.</li>
                                <li>Global Reach: Allows businesses and freelancers to operate securely across international borders.</li>
                                <li>Automated Process: Simplifies complex transactions with a user-friendly system.</li>
                            </ul>
                            <h6>Future-Proof Your Transactions with Escrowly</h6>
                            <p>As digital transactions continue to evolve, businesses and individuals need a secure and reliable payment system that adapts to changing financial landscapes. Escrowly is committed to providing the highest level of security for cryptocurrency transactions, ensuring that your payments are protected every step of the way.</p>
                            <p>Ready to safeguard your digital transactions? Explore Escrowly today and experience the future of secure online payments.</p>
                        </div>
                    </div>
                </section> 
            </main>
        </div>
    </>
);

export default AMLKYCPolicy;