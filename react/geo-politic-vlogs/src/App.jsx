import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AuthorBlog from "./pages/AuthorBlog";
import { PostContext } from "./hooks/PostsContext";
import usePosts from "./hooks/usePosts";
import ArticleCard from "./components/ArticleCard";
import Layout from "./layout/Layout";
import About from "./pages/About";
import EditorWritersCard from "./components/editor/EditorWritersCard";

function App() {
  const {
    author,
    articles,
    Theme,
    logoImage,
    setTheme,
    filterAuthorsName,
    editorKey,
    isEditor,
    setIsEditor
  } = usePosts();

  return (
    <>
      <PostContext.Provider
        value={{
          author,
          articles,
          Theme,
          logoImage,
          setTheme,
          filterAuthorsName,
          editorKey,
          isEditor,
          setIsEditor
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/AuthorBlog/:id" element={<AuthorBlog />} />
              <Route path="/article/:id" element={<ArticleCard />} />
              <Route path="/About" element={<About />} />
              <Route
                path="/EditorWritersCard"
                element={<EditorWritersCard />}
              />
            </Route>
          </Routes>
        </Router>
      </PostContext.Provider>
    </>
  );
}

export default App;
