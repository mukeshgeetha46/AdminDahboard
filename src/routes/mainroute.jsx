// src/routes/mainroute.jsx
import AccountSetting from '../components/AccountSetting/AccountSetting.jsx';
import MainBlog from '../components/Blog/MainBlog.jsx';
import MainBlogDetails from '../components/Blog/MainBlogDetails.jsx';
import Chat from '../components/Chat/Chat.jsx';
import Contact from '../components/Contact/Contact.jsx';
import EmailPage from '../components/Email/Email.jsx';
import Faq from '../components/FAQ/Faq.jsx';
import Kanban from '../components/Kanban/Kanban.jsx';
import Notes from '../components/Notes/Notes.jsx';
import Pricing from '../components/Pricing/Pricing.jsx';
import Allteachers from '../components/School/Allteachers.jsx';
import TeacherDetail from '../components/School/TeacherDetail.jsx';
import Ticket from '../components/Ticket/Ticket.jsx';
import WidgetBanner from '../components/Widget/Banner.jsx';
import WidgetCard from '../components/Widget/WidgetCard.jsx';
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
      {
        path:'widgets/cards',
        element: <WidgetCard />
      },
      {
        path:'teachers/all-teachers',
        element: <Allteachers />
      },
      {
        path:'teachers/teachers-details',
        element: <TeacherDetail />
      },
      {
        path:'apps/tickets',
        element: <Ticket />
      },
      {
        path:'apps/chats',
        element: <Chat />
      },
      {
        path:'apps/contacts',
        element: <Contact />
      },
      // Add more routes here as needed
    ],
  };


export default MainRoutes;