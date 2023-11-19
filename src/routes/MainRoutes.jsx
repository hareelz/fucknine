import React from "react";
import HomePage from "../pages/HomePage";
import GameInfo from "../pages/GameInfo";
import Roster from "../pages/Roster";
import NotFoundPage from "../pages/NotFoundPage";
import CartPage from "../pages/CartPage";
import CardPage from "../pages/CardPage";

import AdminPage from "../pages/AdminPage";
import { Route, Routes, Navigate } from "react-router-dom";
import EditPage from "../pages/EditPage";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import { useAuth } from "../contexts/AuthContextProvider";
import { ADMIN } from "../helpers/consts";
import OrderPage from "../pages/OrderPage";
import ModalRoster from "../components/roster/ModalRosters";

const PUBLIC_ROUTES = [
  { id: 1, link: "/", element: <HomePage /> },
  { id: 2, link: "/gameInfo", element: <GameInfo /> },
  { id: 3, link: "/roster", element: <Roster /> },
  { id: 4, link: "/cartPage", element: <CartPage /> },
  { id: 6, link: "*", element: <NotFoundPage /> },
  { id: 8, link: "/register", element: <Register /> },
  { id: 9, link: "/login", element: <Login /> },
  { id: 10, link: "/cardPage", element: <CardPage /> },
  { id: 11, link: "/orderPage", element: <OrderPage /> },
  { id: 12, link: "/modal/:id", element: <ModalRoster /> },
];

const PRIVATE_ROUTES = [
  { id: 5, link: "/admin", element: <AdminPage /> },
  { id: 7, link: "/edit/:id", element: <EditPage /> },
];

const MainRoutes = () => {
  const { user } = useAuth();

  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                key={item.id}
                path={item.link}
                element={
                  user.email === ADMIN ? item.element : <Navigate to="*" />
                }
              />
            ))
          : null}
      </Routes>
    </div>
  );
};

export default MainRoutes;
