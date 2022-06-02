import React, { useEffect, useState } from "react";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes";
import axios from "axios";
import { getUser } from "./actions/user.action";
import { useDispatch } from "react-redux";

export default function App() {
  const [uid, SetUid] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}jwtid`,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        SetUid(res.data);
      })
      .catch((err) => {
        console.log("No token Bro !! ");
        console.log(err);
      });
    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);
  return (
    <UidContext.Provider value={uid}>
      {" "}
      <Routes />{" "}
    </UidContext.Provider>
  );
}
