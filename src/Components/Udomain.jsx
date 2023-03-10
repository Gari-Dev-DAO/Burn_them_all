import React, { useState } from "react"
import UAuth from "@uauth/js"


const uauth = new UAuth({
  clientID: "331542d7-ddd5-4444-b380-3b4b4cf38540",
  redirectUri: "https://burn-all.vercel.app/",
  scope: "openid wallet email profile:optional social:optional"
})

function UDomain() {
    const [Uauth, setUauth] = useState()

    async function Connect() {
        try {
            const authorization = await uauth.loginWithPopup()
            setUauth(JSON.parse(JSON.stringify(authorization))["idToken"])

            // await authenticate()
            await authorization();
        } catch (error) {
            console.error(error)
        }
    }

    async function logOut() {
       await uauth.logout()
       setUauth(null)
    }

    function log() {
        if (Uauth === null || Uauth === undefined) {
            Connect()
        } else {
            logOut()
        }
    }

    return (
        <>
            <button className="walletBtn" onClick={log}>{Uauth != null ? Uauth["sub"] : "Login with UNSD"}</button>
        </>
    )
}

export default UDomain
