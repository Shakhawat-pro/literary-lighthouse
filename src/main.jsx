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
import ErrorPage from './components/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: () => fetch('/books.json'),
        element: <Home></Home>
      },
      {
        path: '/listed-book',
        loader: () => fetch('/books.json'),
        element: <ListedBook></ListedBook>
      },
      {
        path: '/pages-to-read',
                loader: () => fetch('/books.json'),

        element: <PageToRead></PageToRead>
      },
      {
        path: '/book-details/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json'),
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
