import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../actions/user.action";
import { UidContext } from "../AppContext";
import { isEmpty } from "../Utils";

export default function FollowHandler({ idToFollow, type }) {
  const userData = useSelector((state) => state.userReducer);
  const [isFollowed, setIsFollowed] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(userData._id, idToFollow));
    setIsFollowed(true);
  };
  const handleUnfollow = () => {
    dispatch(unfollowUser(userData._id, idToFollow));
    setIsFollowed(false);
  };
  useEffect(() => {
    if (!isEmpty(userData.following)) {
      if (userData.following.includes(idToFollow)) {
        setIsFollowed(true);
      } else setIsFollowed(false);
    }
  }, [userData, idToFollow]);

  return (
    <>
      {isFollowed ? (
        <span onClick={handleUnfollow}>
          {type === "suggestion" ? (
            <button className="unfollow-btn"> Abonné</button>
          ) : null}
          {type === "card" && uid ? (
            <img src="./img/icons/checked.svg" alt="checked" />
          ) : null}
        </span>
      ) : (
        <span onClick={handleFollow}>
          {type === "suggestion" ? (
            <button className="follow-btn"> Suivre</button>
          ) : null}
          {type === "card" && uid ? (
            <img src="./img/icons/check.svg" alt="check" />
          ) : null}
        </span>
      )}
    </>
  );
}
