// src/routes/mainroute.jsx
import MainBlog from '../components/Blog/MainBlog.jsx';
import MainLayout from '../layouts/MainLayout/index.jsx';
import Home from '../pages/Home.jsx';

const MainRoutes = [
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
      }
      // Add more routes here as needed
    ],
  },
];

export default MainRoutes;