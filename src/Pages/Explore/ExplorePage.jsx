import React from "react";
import LeftSidebar from "../Components/LeftSidebar";
import { AiOutlineStar } from "react-icons/ai";

const ExplorePage = () => {
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
                  for <b>0x.family</b>
                </p>
              </div>
              <button className="btn"> Switch</button>
            </div>
            <div className="feed_content hide_sc">
              <div className="active_user f_user ac_box_shadow ">
                <div className="s_img">
                  <img src="/images/user.png" alt="" />
                  <div className="s_user_details">
                    <h5>0x.family (All User) </h5>
                    <p>432433 Registered users </p>
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
                  <span>Tweets</span>
                  <span>Users</span>
                  <span className="new_followers">
                    New Followers
                    <div className="new">
                      <span>4</span>
                    </div>
                  </span>
                </div>
                <span>
                  Order by : <span className="fw_600">Credits</span>
                </span>
              </div>
              {users.map((user, i) => (
                <div className="with_tag mb-4" key={i}>
                  <div className="normal_user  f_user ac_box_shadow ">
                    <div className="s_img">
                      <img src="/images/user.png" alt="" />
                      <div className="s_user_details text-left">
                        <h5> MannyETH </h5>
                        <p>{"0x0342....304"} </p>
                      </div>
                    </div>
                    <div className="s_following">
                      <h5> {user.Following} </h5>
                      <p>Following</p>
                    </div>
                    <div className="s_follower">
                      <h5> {user.Follower} </h5>
                      <p>Follower</p>
                    </div>
                    <div className="s_credits">
                      <h5>{user.Credits}</h5>
                      <p>Credits</p>
                    </div>
                    <button className="follow_back btn">Follow Back</button>
                  </div>
                  <div className="su_footer">
                    <div className="tags">
                      {user.tags.map((tag, i) => (
                        <span> {tag} </span>
                      ))}
                    </div>
                    <div className="su_right">
                      <span className="claimed"> Claimed Credits: <span>3/5</span> </span>
                      <span className="star">
                        <AiOutlineStar /> <AiOutlineStar />
                      </span>
                      <span className="view">
                        <button className=" btn">View</button>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="right_sidebar" />
      </div>
    </div>
  );
};

export default ExplorePage;
