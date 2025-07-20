// src/routes/mainroute.jsx
import MainBlog from '../components/Blog/MainBlog.jsx';
import MainBlogDetails from '../components/Blog/MainBlogDetails.jsx';
import Notes from '../components/Notes/Notes.jsx';
import MainLayout from '../layouts/MainLayout/index.jsx';
import Home from '../pages/Home.jsx';

const MainRoutes = 
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'blog',
        element: <MainBlog />
      },
      {
        path:'blog/:name',
        element: <MainBlogDetails />
      },
      {
        path:'notes',
        element: <Notes />
      }
      // Add more routes here as needed
    ],
  };


export default MainRoutes;