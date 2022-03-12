import "./App.css";
import FileViewer from "./components/FileViewer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__main">
        <Sidebar />
        <FileViewer />
      </div>
    </div>
  );
}

export default App;
