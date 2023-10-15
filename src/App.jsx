import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Books from "./features/books/Books";
import CartPage from "./features/cart/CartPage";
import BookDetails from "./features/book-details/BookDetails";
import NotFound from "./components/not-found/NotFound";
import Login from "./features/auth/Login";
import { Signup } from "./features/auth/Signup";
import Dashboard from "./features/dashboard/Dashboard";
import AdminCategories from "./features/categories/AdminCategories";
import AddBook from "./features/books/AddBook";
import Profile from "./features/auth/Profile";
import AdminOrders from "./features/orders/admin-orders/AdminOrders";
import UserOrders from "./features/orders/user-orders/UserOrders";
import Payment from "./pages/payment/Payment";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} errorElement={<NotFound />} />
        <Route path="books/:id" element={<BookDetails />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="payment" element={<Payment />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="books" element={<Books />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="add-book" element={<AddBook />} />
          <Route path="admin-orders" element={<AdminOrders />} />
          <Route path="user-orders" element={<UserOrders />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>,
    ])
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
