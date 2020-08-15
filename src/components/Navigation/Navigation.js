import React from "react";

export default function Navigation({ onRouteChange, isSignedIn }) {
  if (isSignedIn) {
    return (
      <div>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p onClick={() => onRouteChange('signOut')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
        </nav>
      </div>
    )
  } else {
    return (
      <div>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p onClick={() => onRouteChange('signIn')} className="f3 link dim black underline pa3 pointer">Sign In</p>
          <p onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer">Register</p>
        </nav>
      </div>

    )

  }

}
