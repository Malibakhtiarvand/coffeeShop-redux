import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import { getsHttpMethod } from "../../services/httpMethods";

const PrsSlice = createSlice({
  name: "prsLst",
  initialState: [],
  reducers: {
    getPrs: (state, action) => {
      return action.payload;
    },
  },
});
export const { getPrs } = PrsSlice.actions;

const selectPrSlice = createSlice({
  name: "selectSlice",
  initialState: {
    count: 0,
    prs: [],
  },
  reducers: {
    addToSelectedList: (state, action) => {
      var old = state.prs.find((x) => x.id == action.payload.id);
      if (old) {
        old["count"]++;
      } else {
        state.prs.push({ ...action.payload, count: 1 });
      }
      state.count++;

      return state;
    },
    decrement: (state, action) => {
      var old = state.prs.find((x) => x.id == action.payload.id);
      old["count"]--;
      state.count--;
      return state;
    },
    deletePr: (state, action) => {
      var fil = state.prs.filter((x) => x.id !== action.payload.id);
      state.prs = fil;
      console.log(fil);
      state.count -= action.payload.count;
    },
  },
});
export const { addToSelectedList, decrement, deletePr } = selectPrSlice.actions;

const getPrsAsync = () => async (dispatch) => {
  const { data } = await getsHttpMethod();
  console.log(getPrs(data));
  dispatch(getPrs(data));
};

export const store = configureStore({
  reducer: {
    prsReducer: PrsSlice.reducer,
    selectPrReducer: selectPrSlice.reducer,
  },
});

store.dispatch(getPrsAsync());
