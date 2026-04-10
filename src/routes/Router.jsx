import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import Books from "../pages/books/Books";
import BookDetails from "../pages/bookdetails/BookDetails";
import PageToRead from "../pages/pageToRead/PageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: '/books',
        Component: Books
      },
      {
        path: '/page-to-read',
        Component: PageToRead
      },
      {
        path: 'bookDetails/:bookId',
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
]);