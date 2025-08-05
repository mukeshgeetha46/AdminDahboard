// src/routes/mainroute.jsx
import AccountSetting from '../components/AccountSetting/AccountSetting.jsx';
import MainBlog from '../components/Blog/MainBlog.jsx';
import MainBlogDetails from '../components/Blog/MainBlogDetails.jsx';
import EmailPage from '../components/Email/Email.jsx';
import Faq from '../components/FAQ/Faq.jsx';
import Kanban from '../components/Kanban/Kanban.jsx';
import Notes from '../components/Notes/Notes.jsx';
import Pricing from '../components/Pricing/Pricing.jsx';
import WidgetBanner from '../components/Widget/Banner.jsx';
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
      },
      {
        path:'email',
        element: <EmailPage />
      },
      {
        path:'kanban',
        element: <Kanban />
      },
      {
        path:'pages/pricing',
        element: <Pricing />
      },
      {
        path:'pages/faq',
        element: <Faq />
      },
      {
        path:'pages/account-settings',
        element: <AccountSetting />
      },
      {
        path:'widgets/banners',
        element: <WidgetBanner />
      },
      // Add more routes here as needed
    ],
  };


export default MainRoutes;