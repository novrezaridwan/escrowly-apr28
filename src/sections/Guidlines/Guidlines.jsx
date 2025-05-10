import React, { useState } from 'react';
import "./Guidlines.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GuideCard from '../../components/GuideCard/GuideCard';
import Button from '../../components/Button/Button';
// import Button from "../../components/Button/Button";

const Guidlines = () => { 
    const [activeTab, setActiveTab] = useState('tab1');

  return (
    <section className="section section-guidlines">
        <div className="container">
            <div className="row xs-direction-column guidlines-header">
                <div className="col">
                    <SectionHeader 
                        label="Guidelines"
                        title="Escrowly Guidelines for Secure Transactions"
                        className=""
                    />
                </div>
                <div className="col">
                    <p>In an effort to make every transaction on Escrowly safe and easy, we have laid out clear guidelines for buyers, sellers, and brokers. By doing things such as setting clear terms, confirming the identities of all participants in a transaction, and putting in place inspection periods, you contribute to upholding the integrity, transparency, and trust upon which our crypto-native platform is based.</p>
                </div>
            </div>
            
            <div className="tabs">
                <div className="tab-buttons">
                    <button
                        onClick={() => setActiveTab('tab1')}
                        className={activeTab === 'tab1' ? 'active' : ''}
                    >
                    Buyer Guide
                    </button>
                    <button
                        onClick={() => setActiveTab('tab2')}
                        className={activeTab === 'tab2' ? 'active' : ''}
                    >
                    Seller Guide
                    </button>
                    <button
                        onClick={() => setActiveTab('tab3')}
                        className={activeTab === 'tab3' ? 'active' : ''}
                    >
                    Broker Guide
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'tab1' && (
                        <div className="tab-content-wrapper">
                            <GuideCard
                                icon="/img/guide-icon-1.svg"
                                imgSrc={["/images/guide-image-1.jpg", "/images/guide-image-2.jpg"]}
                                title="Buyer Guide"
                                subtitle="Buy with Confidence"
                                text="Escrowly enables buyers to trade safely using its secure crypto escrow service. Your funds are safe in escrow while you wait to receive and accept the product or service, which gives you peace of mind throughout the process."
                                type="image"
                            />
                            <GuideCard
                                icon="/img/guide-icon-2.svg"
                                imgSrc={["/images/guide-image-3.jpg"]}
                                title="Inspect and Confirm Satisfaction"
                                subtitle="Verify and Confirm Quality"
                                text="Escrowly gives you time to examine your purchase before disbursing funds. During this period, use this opportunity to ensure that the goods or services are as per your expectations. Approve payment only when you are more than satisfied with the quality being delivered."
                                type="image"
                            />
                        </div>
                    )}
                    {activeTab === 'tab2' && (
                        <div className="tab-content-wrapper">
                            <GuideCard
                                icon="/img/guide-icon-1.svg"
                                imgSrc={["/images/buyer_image2.avif", "/images/buyer_image.avif"]}
                                title="Seller Guide"
                                subtitle="Sell with Confidence"
                                text="Securely set aside the agreed payment amount on Escrowly. This guarantees that both parties are committed to the transaction and provides peace of mind, knowing that the funds are safely held until the conditions are met"
                                type="image"
                            />
                            <GuideCard
                                icon="/img/guide-icon-2.svg"
                                imgSrc={["/images/guide-image-3.jpg"]}
                                title="Inspect and Confirm Satisfaction"
                                subtitle="Verify and Confirm Quality"
                                text="Once you receive the product or service, carefully inspect it to ensure it meets the agreed-upon standards. Only after confirming that everything is satisfactory, the payment is released to the seller, ensuring both parties are protected"
                                type="image"
                            />
                        </div>
                    )}
                    {activeTab === 'tab3' && (
                        <div className="tab-content-wrapper">
                            <GuideCard
                                icon="/img/guide-icon-1.svg"
                                imgSrc={["/images/Broker_image.avif", "/images/Broker_image2.avif"]}
                                title="Broker Guide"
                                subtitle="Facilitates and safeguards deals"
                                text="Securely set aside the agreed payment amount on Escrowly. This guarantees that both parties are committed to the transaction and provides peace of mind, knowing that the funds are safely held until the conditions are met"
                                type="image"
                            />
                            <GuideCard
                                icon="/img/guide-icon-2.svg"
                                imgSrc={["/images/guide-image-3.jpg"]}
                                title="Inspect and Confirm Satisfaction"
                                subtitle="Verify and Confirm Quality"
                                text="Once you receive the product or service, carefully inspect it to ensure it meets the agreed-upon standards. Only after confirming that everything is satisfactory, the payment is released to the seller, ensuring both parties are protected"
                                type="image"
                            />
                        </div>
                    )}
                </div>
            </div>
            <Button 
                url="#get-started"
                text="Get Started"
                icon="/img/btn-arrow-right.svg"
                delay={0}
                className="btn btn-primary"
            />  
        </div>
    </section> 
  );
};

export default Guidlines;
