import React from "react";
import "./FileCard.css";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { db, storage } from "../firebase";
import { ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from "firebase/firestore";

const FileCard = ({ name, url, id }) => {
  const handleDelete = (name, id) => {
    const desertRef = ref(storage, "files/" + name);
    deleteObject(desertRef)
      .then((del) => {
        console.log("delted file");
        deleteDoc(doc(db, "myFiles", id));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="fileCard">
      <a href={url} target="_blank" rel="noreferrer" download>
        <div className="fileCard--top">
          <InsertDriveFileIcon style={{ fontSize: 130, color: "gray" }} />
        </div>
      </a>
      <div className="fileCard--bottom">
        <p>{name}</p>
        <DeleteForeverIcon
          className="todo__delete"
          onClick={() => handleDelete(name, id)}
        />
      </div>
    </div>
  );
};

export default FileCard;
