import React, { useEffect } from "react";
import "./FileViewer.css";

import FileItem from "./FileItem";
import FileCard from "./FileCard";

const FileViewer = ({ files, setFiles, getFiles }) => {
  useEffect(() => {
    getFiles();
  }, []);
  return (
    <div className="fileViewer">
      <div className="fileViewer__row">
        {files?.map(({ id, item }) => (
          <FileCard
            key={id}
            name={item.caption}
            url={item.url}
            id={id}
            getFiles={getFiles}
          />
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
};

export default FileViewer;
