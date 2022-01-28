import React from 'react';
import "./Admin.css";
import Button from "../Button/Button";
// import Footer from "../Footer/Footer";


function Admin() {
  return (
  
    <div className="containerAdmin">
      <form>
        <h2 className="admin"> ADMIN </h2>
        <div className="containerAdmin">
          <div>
            <label htmlFor="email" className="email">
              <input
                type="email"
                id="email"
                placeholder="Email"
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
          <Button/>
        </div>
      </form>
      {/* <Footer/> */}
    </div>
  );
}

export default Admin;
