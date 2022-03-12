import "./App.css";
import FileViewer from "./components/FileViewer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [files, setFiles] = useState();
  const getFiles = () => {
    getDocs(collection(db, "myFiles")).then((item) => {
      setFiles(
        item.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  };
  return (
    <div className="App">
      <Header />
      <div className="app__main">
        <Sidebar getFiles={getFiles} />
        <FileViewer files={files} setFile={setFiles} getFiles={getFiles} />
      </div>
    </div>
  );
}

export default App;
