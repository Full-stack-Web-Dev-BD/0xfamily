import React from "react";

import { AiOutlineStar } from "react-icons/ai";
import LightProgressBar from "./LightProgressBar";

const CommunitiesUser = ({ users, keyword, progress }) => {
  return (
    <>
      {users.map((user, i) => (
        <div className="with_tag mb-4" key={i}>
          <div className="normal_user  f_user ac_box_shadow ">
            <div className="s_img">
              <img src="/images/user.png" alt="" />
              <div className="s_user_details text-left">
                <h5 style={{width:'inherit'}}> Azuki </h5>
                <p>432433 User / 432433 Holder</p>
                <LightProgressBar />
              </div>
            </div>
            <div className="s_following">
              <h5> {user.Following} </h5>
              <p>Following</p>
              <LightProgressBar />
            </div>
            <div className="s_follower">
              <h5> {user.Follower} </h5>
              <p>Follower</p>
              <LightProgressBar />
            </div>
            <div className="s_credits">
              <h5>{user.Credits}</h5>
              <p>Credits</p>
              <LightProgressBar />
            </div>
          </div>
          {keyword ? (
            <div className="su_footer">
              <div className="tags">
                {user.tags.map((tag, i) => (
                  <span> {tag} </span>
                ))}
              </div>
              <div className="su_right">
                <span className="claimed">
                  Claimed Credits: <span>3/5</span>
                </span>
                <span className="star">
                  <AiOutlineStar /> <AiOutlineStar />
                </span>
                <span className="view">
                  <button className=" btn">View</button>
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default CommunitiesUser;
