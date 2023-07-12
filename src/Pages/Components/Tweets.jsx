import React from "react";
import { LuForward } from "react-icons/lu";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineShareAlt,AiOutlineStar,AiTwotoneStar } from "react-icons/ai";
const Tweets = () => {
  return (
    <div className="tweets_posts">
      {[0, 3, 3, 2, 5, 43, 32].map((post, index) => (
        <div className="post pc_box_shadow">
          <div className="post_header ">
            <div className="poster">
              <img src={require("./user.png")} alt="" />
            </div>
            <div className="poster_details">
              <h3>MannyETH</h3>
              <p className="wallet">0x32....324af</p>
            </div>
            <div className="poster_credits">
              <h4>32</h4>
              <p>Credits</p>
            </div>
            <div className="follow_button">
              <button className="btn">Follow</button>
            </div>
          </div>
          <div className="post_content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolorem maxime aliquid alias, dignissimos dolorum impedit cum fuga
              laborum autem doloribus quod labore inventore odit ex provident
              quia accusamus esse.
            </p>
            <img src={require("./nft.png")} alt="" />
            <div className="has_tags">
              <span>#memetoken</span>
              <span>#0xFam</span>
            </div>
          </div>
          <div className="post_footer">
            <div className="actions">
              <div className="love">
                <span>
                  <MdOutlineFavoriteBorder />
                </span>
                <p>0</p>
              </div>
              <div className="share">
                <span>
                  <AiOutlineShareAlt />
                </span>
                <p>40</p>
              </div>
              <div className="re_post">
                <span>
                  <LuForward />
                </span>
                <p>34</p>
              </div>
            </div>
            <div className="stars">
              <AiTwotoneStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tweets;
