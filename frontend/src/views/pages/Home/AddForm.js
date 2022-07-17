import { useDispatch, useSelector } from "react-redux";
import {
  fishFormChange,
  fishFormSend,
} from "../../../redux/actions/FormActions";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { Grid, Input, InputLabel, Slide } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";

function AddForm({ tooglePages }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(false);
  const fishForm = useSelector((state) => state.fishForm);
  const fishFormResult = useSelector((state) => state.fishFormResult);
  useEffect(() => {
    buttonClicked &&
      fishFormResult.success &&
      navigate("/form-result", { replace: true });
  }, [fishFormResult]);
  const onInputChange = (e) => {
    dispatch(fishFormChange({ [e.target.name]: e.target.value }));
  };

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
      {[
        "Species",
        "LengthVer",
        "LengthDia",
        "LengthCro",
        "Height",
        "Width",
      ].map((inp, ind) => {
        return (
          <FormControl key={ind}>
            <InputLabel htmlFor="my-input" sx={{ color: "#ff9afe54" }}>
              {inp}
            </InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={fishForm[inp] || ""}
              name={inp}
              onChange={onInputChange}
              sx={{
                input: {
                  color: "white",
                },
              }}
            />
          </FormControl>
        );
      })}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto",
          rowGap: "1rem",
        }}
      >
        <LoadingButton
          loading={fishFormResult.loading}
          variant="contained"
          color="secondary"
          sx={{
            background: "linear-gradient(45deg, violet, purple, violet)",
          }}
          onClick={() => (dispatch(fishFormSend), setButtonClicked(true))}
        >
          Send
        </LoadingButton>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            background: "linear-gradient(45deg, violet, purple, violet)",
          }}
          onClick={tooglePages}
        >
          Add CSV
        </Button>
      </Box>
    </Container>
  );
}

export default AddForm;
