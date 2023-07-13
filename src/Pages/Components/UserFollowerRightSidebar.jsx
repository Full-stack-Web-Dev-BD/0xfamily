import React from 'react'

const UserFollowerRightSidebar = ({rightSidebarItem}) => {
  return (
    
    <div className="filter_area hide_sc ">
    {rightSidebarItem.map((sItem, index) => (
      <div className="filter mb-5 for_user">
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
  </div>
  )
}

export default UserFollowerRightSidebar