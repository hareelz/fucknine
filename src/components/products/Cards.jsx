import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useCart } from "../../contexts/CartContextProvider";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useCards } from "../../contexts/CardContextProvider";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";

export default function Cards({ item }) {
  const { deleteCard } = useCards();
  const { addCardToCart, checkCardInCart } = useCart();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useAuth();

  return (
    <Card
      sx={{
        width: "calc(32% - 1vw)",
        margin: "0 10px",
        height: 500,
      }}
      className="cards"
    >
      <CardMedia sx={{ height: 250 }} image={item.image} title="green iguana" />
      <CardContent
        className="card-body"
        sx={{ maxHeight: "7rem", height: "7rem" }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="card-title"
          sx={{ fontFamily: "Roboto Slab", textAlign: "center" }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="card-desc"
          sx={{ fontFamily: "Roboto Slab", textAlign: "center" }}
        >
          {item.description}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="card-price"
          sx={{ fontFamily: "Roboto Slab", textAlign: "center" }}
        >
          {item.price}
        </Typography>
      </CardContent>
      <CardActions sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "5rem",
        }}>
        {user.email === ADMIN ? (
          <>
            <IconButton onClick={() => deleteCard(item.id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
              <EditIcon />
            </IconButton>
          </>
        ) : null}

        <IconButton
          sx={{
            backgroundColor: checkCardInCart(item.id) ? "green" : "",
            color: checkCardInCart(item.id) ? "white" : "",
          }}
          onClick={() => addCardToCart(item)}
        >
          <MonetizationOnIcon />
        </IconButton>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
