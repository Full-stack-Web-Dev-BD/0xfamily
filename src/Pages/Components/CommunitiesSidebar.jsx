import React from "react";

const CommunitiesSidebar = () => {
  const data = [
    "Select one community to filter tweets from holders of the selected collection",
    "Interact with users and content you are interested in to gain engagement credits from the user you are interacting with",
    " You will gain one credit for each intection performed (like, retweet, reply, follow)",
    "Credits are related to the community you are browsing. it mens that if you are interacting with tweets and users in the BAYC community, your credits will be valid only in that community ",
    "If another user interact with your content will gain one credit from you (if you have any) for each interaction performed (like, retweet, reply, follow)",
    "If you interact with a user with 0 credits you will not gain any credit. The same if another user interact with you and you have 0 credits",
    "If another user interact with your content will gain one credit from you (if you have any) for each interaction performed (like, retweet, reply, follow)",
    "If you interact with a user with 0 credits you will not gain any credit. The same if another user interact with you and you have 0 credits",
    "If another user interact with your content will gain one credit from you (if you have any) for each interaction performed (like, retweet, reply, follow)",
    "If you interact with a user with 0 credits you will not gain any credit. The same if another user interact with you and you have 0 credits",
  ];
  return (
    <div>
      <div className="c_title">
        <h3>How it works </h3>
      </div>
      <div className="help">
        {data.map((item, index) => (
          <div className="helpItem" key={index}>
            <div className=" sl">
              <h5>{index + 1}</h5>
            </div>
            <div className="pc_box_shadow p">
              <p>{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitiesSidebar;
