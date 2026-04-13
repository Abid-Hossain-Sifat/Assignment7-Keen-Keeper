import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";

import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "test",
    element: <div>Hello World</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
