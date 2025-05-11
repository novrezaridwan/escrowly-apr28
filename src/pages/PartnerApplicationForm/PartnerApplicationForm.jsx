import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Input from "../../components/Input/Input";
import DropdownCustom from "../../components/DropdownCustom/DropdownCustom";
import Textarea from "../../components/Textarea/Textarea";
import Datepicker from "../../components/Datepicker/Datepicker";
import "./PartnerApplicationForm.scss";
import imgAustralia from "../../assets/country/australia.svg";
import imgCanada from "../../assets/country/canada.svg";
import imgChina from "../../assets/country/china.svg";

const dataPosition = [
  {
    id: 1,
    label: "Manager",
  },
  {
    id: 2,
    label: "Supervisor",
  },
  {
    id: 3,
    label: "Marketing",
  },
];

const dataCountry = [
  {
    id: 1,
    label: "Australia",
    img: imgAustralia,
  },
  {
    id: 2,
    label: "Canada",
    img: imgCanada,
  },
  {
    id: 3,
    label: "China",
    img: imgChina,
  },
];

const dataIndustry = [
  {
    id: 1,
    label: "Technology",
  },
  {
    id: 2,
    label: "Hospital",
  },
  {
    id: 3,
    label: "Energy",
  },
];

const dataJobLevel = [
  {
    id: 1,
    label: "Standard",
  },
  {
    id: 2,
    label: "Medium",
  },
  {
    id: 3,
    label: "Expert",
  },
];

const PartnersInquiry = () => (
  <>
    <Helmet>
      <title>Best Crypto Escrow - Escrowly</title>
      <meta
        name="description"
        content="Secure your crypto transactions with Escrowly, the trusted escrow service for crypto traders."
      />
      <meta
        name="keywords"
        content="secure crypto escrow, secure transactions, Escrowly, Bitcoin escrow, Ethereum escrow, crypto escrow service, smart contract escrow, blockchain escrow service, crypto escrow for businesses, USDT escrow service, escrow wallet for crypto, secure P2P crypto escrow, escrow for digital items, escrow for domain names, escrow for real estate"
      />
      <meta name="author" content="Escrowly Crypto Escrow Team" />
      <meta
        property="og:title"
        content="Escrowly – Buy & Sell Online Safely with Crypto"
      />
      <meta
        property="og:description"
        content="Buy and sell online with confidence using Escrowly. Our secure crypto escrow service ensures safe transactions for digital goods, services, and high-value assets."
      />
      <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
      <meta property="og:url" content="https://escrowly.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <div>
      <main className="main-content">
        <Breadcrumbs
          breadcrumbs={[
            { title: "Home", url: "/" },
            { title: "Partners", url: "/our-partners" },
            { title: "Partners Application Form", url: "/partners-inquiry" },
          ]}
        />

        <section className="section custom-class">
          <div className="tag">Partner's Application Form</div>
          <h2>Partner Application Form</h2>
          <p>
            Become an Escrowly partner and offer trusted crypto escrow services.
          </p>
          <div className="card">
            <h6>Personal Details</h6>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-row gap-4 flex-wrap">
                <div className="flex flex-1 flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    First Name
                  </label>
                  <Input type="text" placeholder="First Name" />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Last Name
                  </label>
                  <Input type="text" placeholder="Last Name" />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Your Position
                  </label>
                  <DropdownCustom
                    users={dataPosition}
                    placeholder="Select Your Position"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4 flex-wrap">
                <div className="flex flex-1 flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Job Level
                  </label>
                  <DropdownCustom
                    users={dataJobLevel}
                    placeholder="Select Job Level"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Business Email Address
                  </label>
                  <Input type="email" placeholder="example@domain.com" />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Business Phone Number
                  </label>
                  <Input type="number" placeholder="+1 (302) 444-8419" />
                </div>
              </div>
            </div>
            <h6>Company Details</h6>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-row gap-4 flex-wrap">
                <div className="flex flex-1 flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Company Name
                  </label>
                  <Input type="text" placeholder="e.g Business Inc" />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Your Industry
                  </label>
                  <DropdownCustom
                    users={dataIndustry}
                    placeholder="Select Industry"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Country/Region
                  </label>
                  <DropdownCustom
                    users={dataCountry}
                    placeholder="Select Country/Region"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4 flex-wrap">
                <div className="flex flex-1 flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Date of Establishment
                  </label>
                  <Datepicker />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Your Company Website
                  </label>
                  <Input type="text" placeholder=" http://www." />
                </div>
              </div>
            </div>
            <h6>Tell us about your Partnership Proposal</h6>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-primary">
                Your Inquiry
              </label>
              <Textarea type="text" placeholder="Your Message" />
            </div>
            <div className="flex gap-2 mt-4 custom-checkbox">
              <input type="checkbox" id="privacypolicy" name="privacypolicy" />
              <label for="privacypolicy">
                By clicking 'Submit', you agree to be contacted by Escrowly
                about partnership opportunities and accept our{" "}
                <a href="https://www.gogle.com">Privacy policy.</a>
              </label>
            </div>
            <button className="btn-submit">Submit</button>
          </div>
        </section>
      </main>
    </div>
  </>
);

export default PartnersInquiry;
