import React from "react";
import HomePage from "../pages/HomePage";
import GameInfo from "../pages/GameInfo";
import Roster from "../pages/Roster";
import NotFoundPage from "../pages/NotFoundPage";
import CartPage from "../pages/CartPage";
import AdminPage from "../pages/AdminPage";
import { Route, Routes } from "react-router-dom";
import CardPage from "../pages/CardPage";
import EditPage from "../pages/EditPage";

const PUBLIC_ROUTES = [
  { id: 1, link: "/", element: <HomePage /> },
  { id: 2, link: "/gameInfo", element: <GameInfo /> },
  { id: 3, link: "/roster", element: <Roster /> },
  { id: 4, link: "/card", element: <CardPage /> },
  { id: 4, link: "/cartPage", element: <CartPage /> },
  { id: 5, link: "/admin", element: <AdminPage /> },
  { id: 6, link: "*", element: <NotFoundPage /> },
  { id: 7, link: "/edit/:id", element: <EditPage /> },
];

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
