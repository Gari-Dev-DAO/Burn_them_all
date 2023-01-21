import React, { useState } from "react";
import UAuth from "@uauth/js";

const uauth = new UAuth({
  clientID: "f9c1c68d-6191-4cb3-b52a-1ff774e2926b",
  redirectUri: "https://www.bonkme.tech/", 
  scope: "openid wallet email profile:optional social:optional",
});

function UDomain() {
  const [Uauth, setUauth] = useState();

  async function Connect() {
    try {
      const authorization = await uauth.loginWithPopup();
      setUauth(JSON.parse(JSON.stringify(authorization))["idToken"]);

      await authorization();
    } catch (error) {
      console.error(error);
    }
  }

  async function logOut() {
    await uauth.logout();
    setUauth(null);
  }

  function log() {
    if (Uauth === null || Uauth === undefined) {
      Connect();
    } else {
      logOut();
    }
  }

  return (
    <>
      <button className="walletBtn" onClick={log}>
        {Uauth != null ? Uauth["sub"] : "LogIn (UNSD)"}
      </button>
    </>
  );
}

export default UDomain;
