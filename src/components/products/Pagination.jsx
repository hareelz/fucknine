import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../../index.css";

export default function PaginationControlled(props) {
  const { page, handleChange, count } = props;

  return (
    <Stack sx={{ marginLeft: "34em", marginTop: "-10em" }} spacing={2}>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        className="pagination"
        showFirstButton
        showLastButton
      />
    </Stack>
  );
}
