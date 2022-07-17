import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
function Nav({ children }) {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          left: "5%",
          top: "5%",
          zIndex: 999,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            background: "linear-gradient(45deg, violet, purple, violet)",
          }}
          onClick={() => navigate("", { replace: true })}
        >
          Home
        </Button>
      </Box>
      {children}
    </>
  );
}

export default Nav;
