import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './src/pages/homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

let parent = document.getElementById("parent");
let root = ReactDOM.createRoot(parent);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  }, {
    path: '/search',
    element: <SearchPage />,
  }
]);
const App = () => {
  return (
    <RouterProvider router={router} />);
};
root.render(<App />)