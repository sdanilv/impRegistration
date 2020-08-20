import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    pageNumber: 0,
    service: {
      serviceName: "",
      serviceDescription: "",
    },
    endpoint: {
      endpointName: "",
      endpointPrice: "",
      endpointCount: "",
    },
    email: "",
    personal: {
      address: "",
      site: "",
      name: "",
      telephone: "",
      birthday: "",
      INN: "",
      postIndex: "",
    },
  },
  reducers: {
    setService(state, { payload }) {
      state.service = { ...payload };
      state.pageNumber++;
    },
    prevPage(state) {
      state.pageNumber--;
    },
    setEndpoint(state, { payload }) {
      state.endpoint = { ...payload };
      state.pageNumber++;
    },
    setEmail(state, { payload }) {
      state.email = payload.email;
      state.pageNumber++;
    },
    setPersonal(state, { payload }) {
      state.personal = { ...state.personal, ...payload };
      state.pageNumber++;
    },
  },
});

const { actions, reducer } = registrationSlice;
export const {
  setService,
  setEndpoint,
  setEmail,
  setPersonal,
  prevPage,
} = actions;

export default reducer;
