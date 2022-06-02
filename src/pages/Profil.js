import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import UpdateProfil from "../components/Profil/UpdateProfil";

export default function Profil() {
  const uid = useContext(UidContext);
  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div classNmae="img-container">
            <img
              src="./img/log.jpg"
              width="550px"
              height="550px"
              alt="img-log"
            />
          </div>
        </div>
      )}
    </div>
  );
}
