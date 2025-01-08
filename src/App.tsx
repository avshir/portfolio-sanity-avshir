import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

import AboutPage from "./pages/AboutPage";
import TempPage from "./pages/TempPage";
import PostPage from "./pages/PostPage";
import ProjectPage from "./pages/ProjectPage";
import SinglePostPage from "./pages/SinglePostPage";

import "./index.css";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        {/* <Route path="/project/:id" element={<SingleProjectPage />} /> */}
        <Route path="/post" element={<PostPage />} />
        <Route path="post/:slug" element={<SinglePostPage />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/temp" element={<TempPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
