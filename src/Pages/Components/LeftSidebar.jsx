import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineSearch,AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import {MdOutlineGroups3} from 'react-icons/md'

const LeftSidebar = () => {
  return (
    <div className="left_sidebar hide_sc">
      <div className="logo_header">
        <span
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "rgb(173, 152, 125)",
            fontFamily: "cursive",
          }}
        >
          0x.Family
        </span>
      </div>
      <div className="left_sidebar_nav">
        <div className="left_sidebar_nav_items">
          <ul>
            <li className="active">
              <Link to="/">
                 <AiOutlineSearch/>  <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link to="/">
               <AiOutlineUser/> <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiOutlineMail/>  <span>Notifications</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <MdOutlineGroups3/> <span>Communities</span>
              </Link>
            </li>
            <li>
              <button className="tweet_btn btn btn-block ">Tweet</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="left_sidebar_footer">
        <div className="left_sidebar_footer_user_box">
          <div className="ls_user_image">
            <img src="/images/user.png" alt="" />
          </div>
          <div className="ls_user_details">
            <h5>Malcomx.eth</h5>
            <p>0x92.....sdf3</p>
          </div>
          <div className="ls_more">
            <i>...</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
