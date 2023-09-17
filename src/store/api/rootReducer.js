import restApis from "../api/restApis";

const rootReducer = {
  [restApis.reducerPath]: restApis.reducer,
};

export default rootReducer;
