import React from "react";
import {AiOutlineStar} from 'react-icons/ai'
const Gainers = ({ users }) => {
  return (
    <>
      {users.map((user, i) => (
        <div className="with_tag mb-4" key={i}>
          <div className="normal_user  f_user ac_box_shadow ">
            <div className="s_img">
              <img src="/images/user.png" alt="" />
              <div className="s_user_details text-left">
                <h5> BannyETH </h5>
                <p>{"0x0342....304"} </p>
              </div>
            </div>
            <div className="s_credits">
              <h5>{user.Credits}</h5>
              <p>Credits</p>
            </div>
            <div className="star">
              <h5> <AiOutlineStar/> </h5>
              <p>3/20</p>
            </div>
            <button className="follow_back btn">Follow </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Gainers;
