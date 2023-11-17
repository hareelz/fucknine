import * as React from "react";
import { useCart } from "../../contexts/CartContextProvider";
import {
  Box,
  Button,
  Icon,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
const style = {
  // position: "absolute",
  // top: "40rem",
  // left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Cart() {
  const { cart, getCart, changeCardCount, deleteCardFromCart } = useCart();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Button onClick={handleOpen}> BUY NOW FOR {cart.totalPrice}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ color: "black" }}
          >
            Text in a modal
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{ color: "black" }}
          >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

      {/* <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            width: "80%",
            margin: "auto",
          }}
          aria-label="simple table"
        >
          <TableBody>
            {cart.cards.map((row) => (
              <TableRow
                key={row.item.id}
                sx={{
                  border: "2px solid black",
                  gap: "20px",
                }}
              >
                <TableCell component="th" scope="row">
                  <img src={row.item.image} alt="" width={"100"} />
                </TableCell>
                <TableCell align="right">{row.item.title}</TableCell>
                <TableCell align="right">{row.item.category}</TableCell>
                <TableCell align="right">{row.item.price}</TableCell>
                <TableCell align="right">
                  <input
                    onChange={(e) =>
                      changeCardCount(row.item.id, e.target.value)
                    }
                    type="number"
                    value={row.count}
                    min={1}
                    max={20}
                  />
                </TableCell>
                <TableCell align="right">{row.subPrice}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => deleteCardFromCart(row.item.id)}>
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button onClick={cartCleaner}> BUY NOW FOR {cart.totalPrice}</Button>
      </TableContainer> */}
    </div>
  );
}
