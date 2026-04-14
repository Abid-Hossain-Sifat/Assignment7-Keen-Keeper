import { StrictMode } from 'react'
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

const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'timeline', Component: Timeline},
      {path: 'state', Component: Graph},
      {path: 'friend/:id', Component: Details}
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
