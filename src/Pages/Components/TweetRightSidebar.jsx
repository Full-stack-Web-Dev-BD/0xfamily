import React from "react";
import Gainers from "./Gainers";

const TweetRightSidebar = ({ rightSidebarItem }) => {
  const users = [
    {
      "0x.family": "User1",
      "Registered users": 432433,
      star: 43,
      Credits: 65,
    },
    {
      "0x.family": "User2",
      "Registered users": 786542,
      star: 19,
      Credits: 91,
    },
    {
      "0x.family": "User3",
      "Registered users": 295733,
      star: 57,
      Credits: 38,
    },
    {
      "0x.family": "User4",
      "Registered users": 192837,
      star: 39,
      Credits: 77,
    },
    {
      "0x.family": "User5",
      "Registered users": 548923,
      star: 71,
      Credits: 83,
    },
    {
      "0x.family": "User6",
      "Registered users": 372819,
      star: 14,
      Credits: 45,
    },
    {
      "0x.family": "User7",
      "Registered users": 625491,
      star: 25,
      Credits: 62,
    },
    {
      "0x.family": "User8",
      "Registered users": 479856,
      star: 36,
      Credits: 74,
    },
    {
      "0x.family": "User9",
      "Registered users": 924753,
      star: 52,
      Credits: 57,
    },
    {
      "0x.family": "User10",
      "Registered users": 365892,
      star: 48,
      Credits: 83,
    },
  ];
  return (
    <div>
      <div className="filter_area hide_sc ">
        {rightSidebarItem.map((sItem, index) => (
          <div className="filter mb-5 for_user mb-5">
            <h3> {sItem.title} </h3>
            <p>
              for <span> {sItem.for} </span>
            </p>
            <div className="progress_bar">
              {sItem.progress.map((item, i) => (
                <div
                  className={` progress pc_box_shadow  mb-2 ${item.class}`}
                  key={i}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${item.value}%` }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span> {item.amount} </span>
                  </div>
                  <span> {item.title} </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="">
          <div className="filter mb-5 for_user">
            <h3> Top Daily Gainers </h3>
            <p>
              for <span> Bored Ape Yacht Club </span>
            </p>
          </div>
          <div className="gainers">
            <Gainers users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetRightSidebar;
