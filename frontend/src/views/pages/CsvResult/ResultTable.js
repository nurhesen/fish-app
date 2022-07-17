import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import Chart from "./Chart";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function ResultTable() {
  const result = useSelector((state) => state.fishCsv.result);

  React.useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        "& td": { color: "white" },
        "& th": { color: "white" },
        backgroundColor: "transparent",
      }}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Species</TableCell>
            <TableCell align="right">LengthVer</TableCell>
            <TableCell align="right">LengthDia</TableCell>
            <TableCell align="right">LengthCro</TableCell>
            <TableCell align="right">Height</TableCell>{" "}
            <TableCell align="right">Width</TableCell>
            <TableCell align="right">Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>
              {result?.stats.map((st) => {
                return (
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{st.name}</Box>
                    <Box>{st.percentage}%</Box>
                  </Box>
                );
              })}
            </TableCell>
            {result?.otherFields?.map((field) => {
              return (
                <TableCell align="right">
                  <Chart datas={field} />
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {result?.data.map((row, ind1) => (
            <TableRow
              key={ind1}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.map((column, index) => {
                return (
                  <TableCell
                    key={index}
                    {...(index === 0
                      ? { component: "th", scope: "row" }
                      : { align: "right" })}
                  >
                    {column}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
