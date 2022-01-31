import React from 'react';
import "./Admin.css";
import Button from "../Button/Button";
// import Footer from "../Footer/Footer";


function Admin() {
  return (
  
    <div>
      <form id="formAdmin">
        <h2 className="admin"> ADMIN </h2>
        <div className="containerAdmin">

          <div>
            <label htmlFor="email" className="email">
              <input
                type="email"
                id="email"
                placeholder="@"
                // value={email}
                // onChange={handleEmailChange}
                // required
                />
            </label>
          </div>

          <div>
            <label htmlFor="password" className="password">
              <input
                type="password"
                id="password"
                placeholder="Password"
                // value={password}
                // onChange={password}
              />
            </label>
          </div>

          <Button titre="Send" plus="Let's go!"/>
        </div>
      </form>
      {/* <Footer/> */}
      </div>

  );
}

export default Admin;
