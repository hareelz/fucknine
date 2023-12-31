import * as React from "react";
import { useCart } from "../../contexts/CartContextProvider";
import { Button, Icon, IconButton, Box } from "@mui/material";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, getCart, changeCardCount, deleteCardFromCart } = useCart();
  const navigate = useNavigate();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <div className="cart-list">
      {cart.cards.map((row) => (
        <ul
          key={row.item.id}
          style={{ width: "100%", margin: "auto", padding: 0 }}
        >
          <li
            className="list-cart"
            style={{
              display: "flex",
              gap: "140px",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", width: "40%", marginLeft: "10rem" }}>
              <img
                src={row.item.image}
                alt={row.item.title}
                style={{
                  maxWidth: "30%",
                  width: "28%",
                  backgroundSize: "cover",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "25px",
                  fontWeight: 700,
                  width: "60%",
                }}
              >
                <h3
                  style={{
                    color: "black",
                    margin: 0,
                    padding: 0,
                    textAlign: "center",
                  }}
                >
                  {row.item.title}
                </h3>
                <p
                  style={{
                    color: "black",
                    margin: 0,
                    fontSize: "20px",
                    fontWeight: 600,
                    padding: 0,
                    textAlign: "center",
                  }}
                >
                  {row.item.category}
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "10px",
              }}
            >
              <input
                style={{
                  height: "20px",
                  padding: "10px",
                  fontSize: "20px",
                }}
                onChange={(e) => changeCardCount(row.item.id, e.target.value)}
                type="number"
                value={row.count}
                min={1}
                max={10}
              />
            </div>
            <p
              style={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "25px",
                fontWeight: "700",
              }}
            >
              {row.subPrice}KGS
            </p>
            <IconButton
              sx={{
                width: "60px",
                marginRight: "12rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => deleteCardFromCart(row.item.id)}
            >
              <DeleteIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "3rem",
                  color: "black",
                }}
              />
            </IconButton>
          </li>
        </ul>
      ))}
      <button className="btn_cart" onClick={() => navigate("/orderPage")}>
        {" "}
        BUY NOW FOR <br /> {cart.totalPrice}
      </button>
    </div>
  );
}
