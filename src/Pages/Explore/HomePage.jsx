import React, { useState } from "react";
import JoinSteps from "../Components/JoinSteps";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

import "./home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [buttons, setbuttons] = useState([
    { title: "Web3 Enthusiast", class: false },
    { title: "NFT Collector", class: false },
    { title: "NFT Flipper", class: false },
    { title: "Buider", class: false },
    { title: "Content Creator", class: false },
    { title: "Degen", class: false },
    { title: "Day Trader", class: false },
    { title: "NFT Minter", class: false },
    { title: "Gem Spotter", class: false },
    { title: "Influencer", class: false },
    { title: "Artist", class: false },
    { title: "Developer", class: false },
    { title: "Airdrop Seeker", class: false },
    { title: "Crypto Investor", class: false },
    { title: "Meme Wizard", class: false },
  ]);
  const [activeStep, setactiveStep] = useState(0);
  return (
    <div className="home_wrap">
      <div className="container">
        <div className="home_page">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12"></div>
            <div className="home_title text-center row">
              <div className="col-md-8 offset-md-3">
                <img src="/images/logo.png" alt="logo" />
                <h1>Discover . Engage .connect.</h1>
                <p>
                  Filter Twitter content by web3 communities as nft collections
                  or tokens. Connect users that matters to you and gro your
                  network
                </p>
              </div>
            </div>
            <div className="mb-5 mt-5 w-100">
              <JoinSteps activeStep={activeStep} />
            </div>
            <div className="steps_content col-12">
              {activeStep == 0 ? (
                <div className="connect_twitter">
                  <div className="tj_button text-center col-12 mb-3">
                    <button onClick={(e) => setactiveStep(1)} className="btn">
                      <span className="mr-2">
                        <FiTwitter />
                      </span>
                      Connect Twitter
                    </button>
                  </div>
                  <div className="app_preview pc_box_shadow">
                    <div className="play">
                      <AiFillPlayCircle />
                    </div>
                    <img src="/images/preview.png" alt="app_preview" />
                  </div>
                </div>
              ) : activeStep == 1 ? (
                <div className="connect_wallet">
                  <div className="tj_button text-center col-12 mb-3">
                    <button onClick={(e) => setactiveStep(2)} className="btn">
                      <img
                        src="/images/wallet.png"
                        alt="wallet"
                        style={{ width: "20px", margin: "0 10px" }}
                      />
                      Connect Wallet
                    </button>
                  </div>
                  <div className="app_preview pc_box_shadow">
                    <div className="play">
                      <AiFillPlayCircle />
                    </div>
                    <img src="/images/preview.png" alt="app_preview" />
                  </div>
                </div>
              ) : activeStep == 2 ? (
                <div className="select_interest">
                  <div className="si_title text-center">
                    <h2>What kind of web3 user are you </h2>
                    <p>Select at least one box </p>
                  </div>
                  <div className="interest_buttons col-md-10 offset-md-1">
                    {buttons.map((interest, index) => (
                      <button
                        className={`btn ${interest.class ? "selected" : ""}`}
                        onClick={(e) => {
                          var upbuttons = [...buttons];
                          upbuttons[index].class = !upbuttons[index].class;
                          setbuttons(upbuttons);
                        }}
                      >
                        {" "}
                        {interest.title}{" "}
                      </button>
                    ))}
                  </div>
                  <div className="col-12 text-center">
                    <Link to={"/explore"}>
                      <button className="btn get_started">Get Started</button>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
