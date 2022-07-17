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
import AddForm from "./AddForm";
import AddCsv from "./AddCsv";
import env from "react-dotenv";

function Home() {
  useEffect(() => {
    console.log(process.env);
  }, []);
  const [fadeOut, setFadeOut] = useState(false);
  const [isCsv, setIsCsv] = useState(false);
  const tooglePages = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsCsv(!isCsv);
      setFadeOut(false);
    }, 500);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        component="img"
        sx={{
          height: "100%",
          width: "auto",
          minWidth: "100%",
          position: "fixed",
        }}
        alt="Fish Background"
        src="static/images/fishbg.jpg"
      />
      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "fixed",
          backgroundColor: "#000000a3",
        }}
      />

      <Container
        sx={{
          position: "relative",
          py: "9rem",
        }}
        maxWidth="sm"
      >
        <Slide
          direction={fadeOut ? "right" : "left"}
          in={!fadeOut}
          mountOnEnter
          unmountOnExit
        >
          <Box>
            {isCsv ? (
              <AddCsv tooglePages={tooglePages} />
            ) : (
              <AddForm tooglePages={tooglePages} />
            )}
          </Box>
        </Slide>
      </Container>
    </Box>
  );
}

export default Home;
