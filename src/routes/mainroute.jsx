// src/routes/mainroute.jsx
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
      // Add more routes here as needed
    ],
  },
];

export default MainRoutes;