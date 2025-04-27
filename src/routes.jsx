// src/routes.js
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SubmitProblemPage from './components/SubmitProblemPage';
import SolutionsPage from './components/SolutionsPage';
import ContactPage from './components/ContactPage';
import NotFound from './components/NotFound';
import Layout from './components/Layout'; // this will include Header/Footer

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'submit', element: <SubmitProblemPage /> },
      { path: 'solutions', element: <SolutionsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;



