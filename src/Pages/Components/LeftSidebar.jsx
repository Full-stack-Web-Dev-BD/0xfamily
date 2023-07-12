import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { MdOutlineGroups3 } from "react-icons/md";

const LeftSidebar = () => {
  const [activeSidebar, setActiveSidebar] = useState(0);
  const [sideBarItems, setsideBarItems] = useState([
    {
      title: "Explore",
      icon: <AiOutlineSearch />,
    },
    {
      title: "Profile",
      icon: <AiOutlineUser />,
    },

    {
      title: "Notifications",
      icon: <AiOutlineMail />,
    },
    {
      title: "Communities",
      icon: <MdOutlineGroups3 />,
    },
  ]);
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
            {sideBarItems.map((item, index) => (
              <li  className={ activeSidebar==index ? "active":''} key={index}>
                <Link onClick={e=>setActiveSidebar(index)} to={`/${item.title.toLocaleLowerCase()}`}>
                  <AiOutlineSearch /> <span> {item.title} </span>
                </Link>
              </li>
            ))}
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
