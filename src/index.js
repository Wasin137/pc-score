import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Mdd2Q from './components/Mdd2Q';
import MiniCog from './components/MiniCog';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './components/NavBar';
import MNAShort from './components/MNAShort';
import MSRA5 from './components/MSRA5';
import Charlson from './components/Charlson';
import Wexner from './components/Wexner';
import Footer from './components/Footer';
import Insomnia from './components/Insomnia';
import Anxiety from './components/Anxiety';
import IPSS from './components/IPSS';
import ViewRank from './components/ViewRank';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mdd",
    element: <Mdd2Q />,
  },
  {
    path: "/minicog",
    element: <MiniCog />,
  },
  {
    path: "/mnashort",
    element: <MNAShort />
  },
  {
    path: "/msra5",
    element: <MSRA5 />
  },
  {
    path: "/cci",
    element: <Charlson />
  },
  {
    path: "/wexner",
    element: <Wexner />
  },
  {
    path: "/insomnia",
    element: <Insomnia />
  },
  {
    path: "/anxiety",
    element: <Anxiety />
  },
  {
    path: "/ipss",
    element: <IPSS />
  },
  {
    path: "/viewrank",
    element: <ViewRank />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NavBar/>
      <RouterProvider router={router} />
      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
