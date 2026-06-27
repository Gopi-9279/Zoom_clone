import React from 'react'
import "../App.css"
export default function landing() {
  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navheader'>
                <h2>Video Call</h2>

        </div>
        <div className='navlist'>
            <p>join as guest</p>
            <p>Register</p>
            <div role='button'>
                <p>Login</p>

            </div>
        </div>
      </nav>
      <div className="landingMainContainer">
        <div>
            <h1><span style={{color: "#ff9839"}}>Connect</span> with your loved ones</h1>
        </div>
        <div></div>

      </div>
    </div>
  )
}
