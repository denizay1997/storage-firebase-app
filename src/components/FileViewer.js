import React, { useEffect, useState } from "react";
import "./FileViewer.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import FileItem from "./FileItem";
import FileCard from "./FileCard";

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
      <div className="fileViewer__row">
        {files?.map(({ id, item }) => (
          <FileCard key={id} name={item.caption} url={item.url} id={id} />
        ))}
      </div>
      <div className="fileViewer__titles">
        <div className="fileViewer__titles--left">
          <p>Name</p>
        </div>
        <div className="fileViewer__titles--right">
          <p>Last modified</p>
          <p>File size</p>
        </div>
      </div>
      {files?.map(({ id, item }) => (
        <FileItem
          key={id}
          id={id}
          size={item.size}
          caption={item.caption}
          timestamp={item.timestamp}
          url={item.url}
        />
      ))}
    </div>
  );
}
