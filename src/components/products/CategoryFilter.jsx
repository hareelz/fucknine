import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Paper, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useCards } from "../../contexts/CardContextProvider";
import "../../index.css";
import "../products/CategoryFilter.css";

const CategoryFilter = () => {
  const { categories, getCategories, fetchByParams } = useCards();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  console.log(search);

  return (
    <Paper
      sx={{
        width: "100%",
        height: "8em",
        p: 2,
        background: "none",
        marginTop: "7%",
        width: "100%",
        display: "flex",
        textAlign: "center",
        // clipPath: "polygon(20% 0, 100% 0%, 80% 100%, 100% 0%)",
      }}
      elevation={8}
    >
      <TextField
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        fullWidth
        variant="standard"
        label="Search..."
        sx={{
          width: "20%",
          textAlign: "center",
          top: "8.8em",
          left: "65em",
          position: "absolute",
        }}
      />
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams("category", e.target.value)}
          sx={{
            display: "flex",
            marginLeft: "15em",
          }}
        >
          <FormControlLabel
            className="css-ahj2mt-MuiTypography-root"
            id="category_all"
            value={"all"}
            control={<Radio />}
            label={"All"}
            sx={{
              flexBasis: "calc(53.33% - 1px)",
              typography: { all: {} },
            }}
          />
          {categories.map((item) => (
            <FormControlLabel
              className="category"
              sx={{
                typography: {
                  flexBasis: "calc(53.33% - 1px)",

                  fontFamily: "Cinzel, serif",
                },
              }}
              key={item.id}
              value={item.name}
              control={<Radio />}
              label={item.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default CategoryFilter;
