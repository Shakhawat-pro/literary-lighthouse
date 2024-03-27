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
import BookDetails from './components/BookDetails.jsx';
import AboutUS from './components/AboutUS.jsx';
import ContactUs from './components/ContactUs.jsx';


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
        loader: () => fetch('/public/books.json'),
        element: <ListedBook></ListedBook>
      },
      {
        path: '/pages-to-read',
                loader: () => fetch('/public/books.json'),

        element: <PageToRead></PageToRead>
      },
      {
        path: '/book-details/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/public/books.json'),
      },
      {
        path: 'about-us',
        element: <AboutUS></AboutUS>
      },
      {
        path: '/contact-us',
        element: <ContactUs></ContactUs>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
