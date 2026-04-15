import { StrictMode, Suspense, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import Root from './Components/Root/Root.jsx';

import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Timeline from './Components/Timeline/Timeline.jsx';
import Graph from './Components/StateGraph/Graph.jsx';
import Details from './Components/Friends Details/Details.jsx';
import Error404 from './Components/404 Error/Error.jsx';
import Loading from './Components/Loading/Loading.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'timeline', Component: Timeline},
      {path: 'state', Component: Graph},
      {path: 'friend/:id', Component: Details},
      {path: '*', Component: Error404}
    ]
  }
]);

const AppEntry = () => {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isBooting) {
    return <Loading size="md" fullScreen />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} fallbackElement={<Loading />}></RouterProvider>
    </Suspense>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppEntry />
  </StrictMode>,
)
