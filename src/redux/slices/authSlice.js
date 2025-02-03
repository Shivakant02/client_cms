import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";
import toast from "react-hot-toast";

const initialState={
    isLoggedIn:localStorage.getItem("isLoggedIn")||false,
    role:localStorage.getItem("role")||"",
    currentUser:localStorage.getItem("currentUser")||{},
}

export const signup = createAsyncThunk("/auth/signup", async (data) => {
    try {
      const response = axiosInstance.post("/user/login", data);
      toast.promise(response, {
        loading: "Wait! creating your account",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to create account",
      });
      return await response;
    } catch (error) {
      //console.log(error);
      toast.error(error?.response?.data?.message);
    }
  });
export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
      const response = axiosInstance.post("/user/login", data);
      toast.promise(response, {
        loading: "Wait! logging in your account",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to logged in  account",
      });
      return await response;
    } catch (error) {
      //console.log(error);
      toast.error(error?.response?.data?.message);
    }
  });

  export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(signup.fulfilled,(state,action)=>{
            state.isLoggedIn=true;
            state.role=action.payload.data.role;
            state.currentUser=action.payload.data;
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action.payload.data.role);
            localStorage.setItem("currentUser",JSON.stringify(action.payload.data));
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoggedIn=true;
            state.role=action.payload.data.role;
            state.currentUser=action.payload.data;
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action.payload.data.role);
            localStorage.setItem("currentUser",JSON.stringify(action.payload.data));
        })
    }
  })


  export default authSlice.reducer;