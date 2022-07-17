import { Box, Container } from "@mui/system";
import ResultTable from "./ResultTable";

function CsvResult() {
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
        src="fishbg.jpg"
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
        maxWidth="md"
      >
        <Container
          sx={{
            background: "#362B35BB",

            py: "2rem",
            border: "2px solid purple",
            borderRadius: "1rem",
            textAlign: "center",
            ">*": {
              width: "100%",
            },
          }}
        >
          <ResultTable />
        </Container>
      </Container>
    </Box>
  );
}

export default CsvResult;
