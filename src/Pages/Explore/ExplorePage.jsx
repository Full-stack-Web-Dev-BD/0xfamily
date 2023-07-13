import React, { useState } from "react";
import LeftSidebar from "../Components/LeftSidebar";
import Users from "../Components/Users";
import Tweets from "../Components/Tweets";
import Followers from "../Components/Followers";
import UserFollowerRightSidebar from "../Components/UserFollowerRightSidebar";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import TweetRightSidebar from "../Components/TweetRightSidebar";

const ExplorePage = () => {
  const tags = ["NFT Collector", "Design", "Artist"];
  const [activeTab, setactiveTab] = useState(0);
  const users = [
    {
      "0x.family": "User1",
      "Registered users": 432433,
      Following: 43,
      Follower: 23,
      Credits: 65,
      tags: [tags[0], tags[1], tags[2]],
    },
    {
      "0x.family": "User2",
      "Registered users": 786542,
      Following: 19,
      Follower: 42,
      Credits: 91,
      tags: [tags[2]],
    },
    {
      "0x.family": "User3",
      "Registered users": 295733,
      Following: 57,
      Follower: 13,
      Credits: 38,
      tags: [tags[0], tags[1]],
    },
    {
      "0x.family": "User4",
      "Registered users": 192837,
      Following: 39,
      Follower: 58,
      Credits: 77,
      tags: [tags[1]],
    },
    {
      "0x.family": "User5",
      "Registered users": 548923,
      Following: 71,
      Follower: 27,
      Credits: 83,
      tags: [tags[0]],
    },
    {
      "0x.family": "User6",
      "Registered users": 372819,
      Following: 14,
      Follower: 31,
      Credits: 45,
      tags: [tags[2]],
    },
    {
      "0x.family": "User7",
      "Registered users": 625491,
      Following: 25,
      Follower: 47,
      Credits: 62,
      tags: [tags[0], tags[1]],
    },
    {
      "0x.family": "User8",
      "Registered users": 479856,
      Following: 36,
      Follower: 19,
      Credits: 74,
      tags: [tags[1]],
    },
    {
      "0x.family": "User9",
      "Registered users": 924753,
      Following: 52,
      Follower: 65,
      Credits: 57,
      tags: [tags[2]],
    },
    {
      "0x.family": "User10",
      "Registered users": 365892,
      Following: 48,
      Follower: 21,
      Credits: 83,
      tags: [tags[0]],
    },
  ];
  const feedContentTab = [
    { title: "Tweets", active: false },
    { title: "Users", active: false },
    { title: "New Followers", active: true, class: "" },
  ];
  const rightSidebarItem = [
    {
      title: "Filter for user type ",
      for: "Bored Ape Yacht Club",
      progress: [
        {
          class: "p_active",
          amount: 32413,
          title: "NFT Collectors",
          value: 50,
        },
        { amount: 32413, title: "NFT Flippers", value: 65 },
        { amount: 32413, title: "Builders", value: 60 },
        { amount: 32413, title: "Artists", value: 50 },
        { amount: 32413, title: "Degens", value: 30 },
      ],
    },
    {
      title: "Filter for followers count ",
      for: "Bored Ape Yacht Club",
      progress: [
        {
          amount: 32413,
          title: "NFT Collectors",
          value: 50,
        },
        { amount: 32413, title: "0-500", value: 65, class: "p_active" },
        { amount: 32413, title: "500-5k", value: 60 },
        { amount: 32413, title: "5k-50k", value: 50 },
        { amount: 32413, title: "50k-500k", value: 30 },
        { amount: 32413, title: "500k+", value: 30 },
      ],
    },
    {
      title: "Filter for Engagement rate ",
      for: "Bored Ape Yacht Club",
      progress: [
        {
          amount: 32413,
          title: "NFT Collectors",
          value: 50,
        },
        { amount: 32413, title: "0-10", value: 65, class: "p_active" },
        { amount: 32413, title: "10-50", value: 60 },
        { amount: 32413, title: "50-100", value: 50 },
        { amount: 32413, title: "100-500", value: 30 },
        { amount: 32413, title: "500+", value: 30 },
      ],
    },
  ];

  const rightSidebarItemTweets = [
    {
      title: "Tranding Hashtags ",
      for: "Bored Ape Yacht Club",
      progress: [
        {
          class: "p_active",
          amount: 32413,
          title: "#airdrop",
          value: 50,
        },
        { amount: 32413, title: "#web3", value: 65 },
        { amount: 32413, title: "#NFT", value: 60 },
        { amount: 32413, title: "#memeToken", value: 50 },
        { amount: 32413, title: "#pepe", value: 30 },
      ],
    },
  ];
  return (
    <div className="container-fluid">
      <div className="x_family_dashboard">
        <LeftSidebar />
        <div className="main_content">
          <section className="explore_feed">
            <div className="feed_header">
              <div className="feed_title">
                <h4>Feed</h4>
              </div>
              <div className="feed_sub_title">
                <p>
                  for <b>Bored Ape Yacht Club</b>
                </p>
              </div>
              <button className="btn">
                {" "}
                <span>
                  <HiOutlineSwitchHorizontal />
                </span>{" "}
                Switch{" "}
              </button>
            </div>
            <div className="feed_content hide_sc">
              <div className="active_user f_user ac_box_shadow ">
                <div className="s_img">
                  <img src="/images/user.png" alt="" />
                  <div className="s_user_details">
                    <h5>Bored Ape Yacht Club </h5>
                    <p>432433 User / 432433 Holder </p>
                  </div>
                </div>
                <div className="s_following">
                  <h5>43</h5>
                  <p>Following</p>
                </div>
                <div className="s_follower">
                  <h5>23</h5>
                  <p>Follower</p>
                </div>
                <div className="s_credits">
                  <h5>65</h5>
                  <p>Credits</p>
                </div>
              </div>
              <div className="feed_content_nav">
                <div className="fc_left">
                  {feedContentTab.map((tab, index) => (
                    <>
                      {tab.title == "New Followers" ? (
                        <span
                          onClick={(e) => setactiveTab(index)}
                          className={`new_followers cp ${
                            activeTab == index ? "active_tab" : ""
                          } `}
                        >
                          New Followers
                          <div className="new">
                            <span>4</span>
                          </div>
                        </span>
                      ) : (
                        <span
                          onClick={(e) => setactiveTab(index)}
                          className={`cp ${
                            activeTab == index ? "active_tab" : ""
                          } `}
                        >
                          {tab.title}
                        </span>
                      )}
                    </>
                  ))}
                </div>
                {activeTab !== 0 ? (
                  <span>
                    Order by : <span className="fw_600">Credits</span>
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="users_tab_content">
                {activeTab === 0 ? (
                  <Tweets />
                ) : activeTab === 1 ? (
                  <Users keyword={true} users={users} />
                ) : activeTab === 2 ? (
                  <Followers users={users} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </section>
        </div>
        <div className="right_sidebar">
          <div className="search">
            <input
              type="text"
              className="form-control"
              placeholder="Search in 0x. family  tweets"
            />
          </div>
          {activeTab == 0 ? (
            <TweetRightSidebar rightSidebarItem={rightSidebarItemTweets} />
          ) : (
            <UserFollowerRightSidebar rightSidebarItem={rightSidebarItem} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
