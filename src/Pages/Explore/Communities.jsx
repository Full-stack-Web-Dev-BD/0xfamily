import React, { useState } from "react";
import LeftSidebar from "../Components/LeftSidebar"; 
import { HiOutlineFolderAdd } from "react-icons/hi";
import CommunitiesSidebar from "../Components/CommunitiesSidebar";
import LightProgressBar from "../Components/LightProgressBar";
import CommunitiesUser from "../Components/CommunitisUser";

const Communities = () => {
  const tags = ["NFT Collector", "Design", "Artist"]; 
  const users = [
    {
      "0x.family": "User1",
      "Registered users": 432433,
      Following: 43,
      Follower: 23,
      Credits: 65,
      tags: [tags[0], tags[1], tags[2]],
    }, 
  ]; 
 const  cmUsers= 
  [
    {
      "0x.family": "User1",
      "Registered users": 432433,
      Following: 43,
      Follower: 23,
      Credits: 65,
      tags: [tags[0], tags[1], tags[2]],
    },
    {
      "0x.family": "User1",
      "Registered users": 432433,
      Following: 43,
      Follower: 23,
      Credits: 65,
      tags: [tags[0], tags[1], tags[2]],
    },
    {
      "0x.family": "User1",
      "Registered users": 432433,
      Following: 43,
      Follower: 23,
      Credits: 65,
      tags: [tags[0], tags[1], tags[2]],
    },
    {
      "0x.family": "User1",
      "Registered users": 432433,
      Following: 43,
      Follower: 23,
      Credits: 65,
      tags: [tags[0], tags[1], tags[2]],
    },
    {
      "0x.family": "User1",
      "Registered users": 432433,
      Following: 43,
      Follower: 23,
      Credits: 65,
      tags: [tags[0], tags[1], tags[2]],
    },
    {
      "0x.family": "User1",
      "Registered users": 432433,
      Following: 43,
      Follower: 23,
      Credits: 65,
      tags: [tags[0], tags[1], tags[2]],
    },
    {
      "0x.family": "User1",
      "Registered users": 432433,
      Following: 43,
      Follower: 23,
      Credits: 65,
      tags: [tags[0], tags[1], tags[2]],
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
                <h4>Filter by Community</h4>
              </div>
              <button className="btn">
                <span className="mx-1">
                  <HiOutlineFolderAdd />
                </span>
                Request
              </button>
            </div>
            <div className="feed_content hide_sc">
              <CommunitiesUser progress={true} users={users} />
              <div className="active_user f_user ac_box_shadow ">
                <div className="s_img">
                  <img src="/images/user.png" alt="" />
                  <div className="s_user_details">
                    <h5>Bored Ape Yacht Club </h5>
                    <p>432433 User / 432433 Holder </p>
                    <LightProgressBar/>
                  </div>
                </div>
                <div className="s_following">
                  <h5>43</h5>
                  <p>Following</p>
                  <LightProgressBar/>
                </div>
                <div className="s_follower">
                  <h5>23</h5>
                  <p>Follower</p>
                  <LightProgressBar/>
                </div>
                <div className="s_credits">
                  <h5>65</h5>
                  <p>Credits</p>
                  <LightProgressBar/>
                </div>
              </div> 
              <div className=" mt-5"> 
              <CommunitiesUser users={cmUsers} />
              </div>
            </div>
          </section>
        </div>
        <div className="right_sidebar">
          <CommunitiesSidebar />
        </div>
      </div>
    </div>
  );
};

export default Communities;
