import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./FileComponent.css";

const Filecomponent = () => {
  return (
    <div className="file">
      <div className="file__container">
        <AddIcon fontSize="large" />
        <p>New</p>
      </div>
    </div>
  );
};

export default Filecomponent;
