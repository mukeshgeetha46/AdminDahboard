// src/routes/mainroute.jsx
import AccountSetting from '../components/AccountSetting/AccountSetting.jsx';
import Error404 from '../components/Authentication/404.jsx';
import ForgetPassword from '../components/Authentication/ForgetPassword.jsx';
import Login from '../components/Authentication/Login.jsx';
import Register from '../components/Authentication/Register.jsx'; // ⬅ Added Register import
import TwoStepAuthentication from '../components/Authentication/TwoStepAuthentication.jsx';
import MainBlog from '../components/Blog/MainBlog.jsx';
import MainBlogDetails from '../components/Blog/MainBlogDetails.jsx';
import Chat from '../components/Chat/Chat.jsx';
import Class from '../components/Classes/Class.jsx';
import Contact from '../components/Contact/Contact.jsx';
import EmailPage from '../components/Email/Email.jsx';
import Faq from '../components/FAQ/Faq.jsx';
import Kanban from '../components/Kanban/Kanban.jsx';
import Movie from '../components/Movie/Movie.jsx';
import Notes from '../components/Notes/Notes.jsx';
import Pricing from '../components/Pricing/Pricing.jsx';
import Allteachers from '../components/School/Allteachers.jsx';
import TeacherDetail from '../components/School/TeacherDetail.jsx';
import Ticket from '../components/Ticket/Ticket.jsx';
import WidgetBanner from '../components/Widget/Banner.jsx';
import WidgetCard from '../components/Widget/WidgetCard.jsx';
import MainLayout from '../layouts/MainLayout/index.jsx';
import Home from '../pages/Home.jsx';

// Routes with layout
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: 'blog', element: <MainBlog /> },
    { path: 'blog/:name', element: <MainBlogDetails /> },
    { path: 'notes', element: <Notes /> },
    { path: 'email', element: <EmailPage /> },
    { path: 'kanban', element: <Kanban /> },
    { path: 'pages/pricing', element: <Pricing /> },
    { path: 'pages/faq', element: <Faq /> },
    { path: 'pages/account-settings', element: <AccountSetting /> },
    { path: 'widgets/banners', element: <WidgetBanner /> },
    { path: 'widgets/cards', element: <WidgetCard /> },
    { path: 'teachers/all-teachers', element: <Allteachers /> },
    { path: 'teachers/teachers-details', element: <TeacherDetail /> },
    { path: 'apps/tickets', element: <Ticket /> },
    { path: 'apps/chats', element: <Chat /> },
    { path: 'apps/contacts', element: <Contact /> },
    { path: 'school-pages/classes', element: <Class /> },
  ],
};

// Routes without layout
const AuthRoutes = {
  path: '/',
  children: [
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    { path: 'auth/forgot-password', element: <ForgetPassword /> },
    { path: 'auth/two-step', element: <TwoStepAuthentication /> },
    { path: 'auth/404', element: <Error404 /> },
    { path: 'movie', element: <Movie /> },
  ],
};

export { MainRoutes, AuthRoutes };
