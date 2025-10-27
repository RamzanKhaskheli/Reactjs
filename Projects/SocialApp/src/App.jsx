import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";
import Form from "./Components/Form";
import PostListProvider from "./store/Post_List_Context";
import PostList from "./Components/PostList";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
            <div className="posts">
          {selectedTab === "Home" ? <PostList /> : <Form />}
            </div>
              

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
