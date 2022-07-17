import { createStats, statsOthers } from "./functions";

const axios = require("axios").default;

export const fishFormChange = (args) => async (dispatch) => {
  dispatch({
    type: "STORE_FISHES",
    payload: args,
  });
};

export const fishFormSend = (dispatch, getState) => {
  const { fishForm } = getState();
  dispatch({
    type: "FORM_REQUEST",
  });
  axios
    .post(process.env.REACT_APP_BASE_URL, fishForm)
    .then(function (response) {
      response.data.fish_weight = Math.round(response.data.fish_weight);
      dispatch({
        type: "FORM_SUCCESS",
        payload: response.data,
      });
    })
    .catch(function (error) {
      dispatch({
        type: "FORM_ERROR",
      });
    });
};

export const fishCsvChange = (csv) => async (dispatch) => {
  dispatch({
    type: "STORE_CSV",
    payload: csv,
  });
};

export const fishCsvSend = (dispatch, getState) => {
  const {
    fishCsv: { csv },
  } = getState();
  dispatch({
    type: "CSV_REQUEST",
  });
  axios
    .post(
      process.env.REACT_APP_BASE_URL + "get-csv/",
      { fish_list: csv },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then(function (response) {
      const data = response.data.data;
      const species = data.map((d) => {
        return d[0];
      });

      let stats = createStats(species);
      const nameList = [
        "LengthVer",
        "LengthDia",
        "LengthCro",
        "Height",
        "Width",
        "Weight",
      ];
      const otherFields = nameList.map((name, ind) => {
        const nameData = data.map((d) => {
          return Math.abs(parseInt(d[ind + 1]));
        });

        return { name: name, data: statsOthers(nameData) };
      });

      dispatch({
        type: "CSV_SUCCESS",
        payload: {
          data: data.map((d) => {
            return d.map((d2, ind) => {
              if (ind > 0) {
                return Math.abs(Math.round(d2 * 10000) / 10000);
              }
              return d2;
            });
          }),
          stats: stats,
          otherFields: otherFields,
        },
      });
    })
    .catch(function (error) {
      dispatch({
        type: "CSV_ERROR",
      });
    });
};
