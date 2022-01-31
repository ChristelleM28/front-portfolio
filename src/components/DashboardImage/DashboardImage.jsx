import React from "react";
import Button from "../Button/Button";
import "../Admin/Admin.css";

function DashboardImage() {
  return (
    <div>
      <form id="formAdmin">
        <h2 className="admin"> DASHBOARD IMAGE </h2>
        <div className="containerAdmin">
          <div>
            <label htmlFor="selectFile" className="selectFile">
              <input
                type="text"
                id="selectFile"
                placeholder="Select File"
                // value={email}
                // onChange={handleEmailChange}
                // required
              />
            </label>
          </div>

          <div>
            <label htmlFor="imageName" className="imageName">
              <input
                type="text"
                id="imageName"
                placeholder="Image Name"
                // value={password}
                // onChange={password}
              />
            </label>
          </div>

          <div>
            <label htmlFor="imageUrl" className="imageUrl">
              <input
                type="url"
                id="imageUrl"
                placeholder="Image Url"
                // value={password}
                // onChange={password}
              />
            </label>
          </div>

          <div>
            <label htmlFor="imageDescription" className="imageDescription">
              <textarea
                type="text"
                id="imageDescription"
                placeholder="Image Description"
                // value={message}
                // onChange={handleMessageChange}
              />
            </label>
          </div>

          <Button /> <Button /> <Button />
        </div>
      </form>
    </div>
  );
}

export default DashboardImage;
