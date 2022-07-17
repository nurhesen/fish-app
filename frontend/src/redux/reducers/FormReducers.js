export const fishFormReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_FISHES":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export const fishFormResultReducer = (state = {}, action) => {
  switch (action.type) {
    case "FORM_REQUEST":
      return { ...state, loading: true };
    case "FORM_SUCCESS":
      return { ...state, loading: false, success: true, ...action.payload };
    case "FORM_ERROR":
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };

    default:
      return state;
  }
};

export const fishCsvReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_CSV":
      return { ...state, csv: action.payload };
    case "CSV_REQUEST":
      return { ...state, loading: true, result: action.payload };
    case "CSV_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        result: action.payload,
      };
    case "CSV_ERROR":
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        result: action.payload,
      };

    default:
      return state;
  }
};
