import { useDispatch, useSelector } from "react-redux";
import {
  fishCsvChange,
  fishCsvSend,
  fishFormChange,
  fishFormSend,
} from "../../../redux/actions/FormActions";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { Grid, Input, InputLabel, Slide } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCsv({ tooglePages }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(false);
  const fishCsv = useSelector((state) => state.fishCsv);
  useEffect(() => {
    buttonClicked &&
      fishCsv.success &&
      navigate("/csv-result", { replace: true });
  }, [fishCsv]);
  return (
    <Container
      sx={{
        background: "#362b358c",
        py: "2rem",
        border: "2px solid purple",
        borderRadius: "1rem",
        ">*": {
          width: "100%",
        },
      }}
    >
      <FormControl sx={{ mb: "2rem" }}>
        <InputLabel htmlFor="my-input" sx={{ color: "#ff9afe54" }}>
          CSV
        </InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          type="file"
          onChange={(e) => {
            dispatch(fishCsvChange(e.target.files[0]));
          }}
          sx={{
            input: {
              color: "white",
            },
          }}
        />
      </FormControl>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto",
          rowGap: "1rem",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            background: "linear-gradient(45deg, violet, purple, violet)",
          }}
          onClick={() => (dispatch(fishCsvSend), setButtonClicked(true))}
        >
          Send
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            background: "linear-gradient(45deg, violet, purple, violet)",
          }}
          onClick={tooglePages}
        >
          Add Form
        </Button>
      </Box>
    </Container>
  );
}

export default AddCsv;
