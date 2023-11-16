import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { IconButton } from "@mui/material";
import { useCards } from "../../contexts/CardContextProvider";
import { useNavigate } from "react-router-dom";
import "../../index.css";

export default function Cards({ item }) {
  const { deleteCard } = useCards();
  const navigate = useNavigate();
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
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => deleteCard(item.id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
          <EditIcon />
        </IconButton>
        <IconButton>
          <LocalMallIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
