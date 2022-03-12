import React, { useEffect, useState } from "react";
import "./FileViewer.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import FileItem from "./FileItem";

export default function FileViewer() {
  const [files, setFiles] = useState();
  useEffect(() => {
    getDocs(collection(db, "myFiles")).then((item) => {
      setFiles(
        item.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="fileViewer">
      <div className="fileViewer__row"></div>
      <div className="fileViewer__titles">
        <div className="fileViewer__titles--left">
          <p>Name</p>
        </div>
        <div className="fileViewer__titles--right">
          <p>Last modified</p>
          <p>File size</p>
        </div>
      </div>
      {files?.map((item) => (
        <FileItem
          key={item.id}
          id={item.id}
          size={item.item.size}
          caption={item.item.caption}
          timestamp={item.item.timestamp}
          url={item.item.url}
        />
      ))}
    </div>
  );
}
