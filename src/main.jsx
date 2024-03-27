import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ListedBook from './components/ListedBook.jsx';
import PageToRead from './components/PageToRead.jsx';
import Home from './components/Home.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        loader: () => fetch('/public/books.json'),
        element: <Home></Home>
      },
      {
        path: '/listed-book',
        element: <ListedBook></ListedBook>
      },
      {
        path: '/pages-to-read',
        element: <PageToRead></PageToRead>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
