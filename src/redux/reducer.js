import {createSlice} from "@reduxjs/toolkit";


const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    serviceName: "",
    serviceDescription: "",

    endpointName: "",
    endpointPrice: "",
    endpointCount: "",

    email: "",
    password: "",

    address: "",
    site: "",
    name: "",
    telephone: "",
    birthday: "",
    INN: "",
    postIndex: "",
  },
  reducers: {}})
export default  registrationSlice

