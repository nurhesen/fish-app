import { Box, Container } from "@mui/system";
import { useSelector } from "react-redux";

function FormResult() {
  const fishFormResult = useSelector((state) => state.fishFormResult);
  const fishForm = useSelector((state) => state.fishForm);

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
        <Container
          sx={{
            background: "#362b358c",
            py: "2rem",
            border: "2px solid purple",
            borderRadius: "1rem",
            textAlign: "center",
            ">*": {
              width: "100%",
            },
          }}
        >
          <Box component="p" sx={{ color: "white", fontSize: "2rem" }}>
            {fishForm["Species"]}
          </Box>
          <Box
            component="img"
            sx={{
              height: "auto",
              width: "100%",
            }}
            alt="fish"
            src={fishFormResult.fish_image}
          />

          <Box component="p" sx={{ color: "white" }}>
            Weight:{" "}
            {fishFormResult.fish_weight > 1000
              ? fishFormResult.fish_weight / 1000 + "kg"
              : fishFormResult.fish_weight + "gr"}
          </Box>
        </Container>
      </Container>
    </Box>
  );
}

export default FormResult;
