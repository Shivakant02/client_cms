import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";
import toast from "react-hot-toast";

const initialState={
    isLoggedIn:localStorage.getItem("isLoggedIn")||false,
    role:localStorage.getItem("role")||"",
    currentUser:JSON.parse(localStorage.getItem("currentUser"))||{},
}

export const signup = createAsyncThunk("/auth/signup", async (data) => {
    try {
      const response = axiosInstance.post("/user/signup", data);
      // console.log(response)
      toast.promise(response, {
        loading: "Wait! creating your account",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to create account",
      });
      return await response;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  });
export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
      const response = axiosInstance.post("/user/signin", data);
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

  //forget password
  export const forgetPassword = createAsyncThunk("/auth/forgetPassword", async (data) => {
    try {
      const response = axiosInstance.post("/user/forgotPassword", data);
      toast.promise(response, {
        loading: "Wait! sending reset link",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to send reset link",
      });
      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  });

  //reset password
  export const resetPassword = createAsyncThunk("/auth/resetPassword", async ({resetToken,data}) => {
    try {
      const response = axiosInstance.post(`/user/resetPassword/${resetToken}`, data);
      toast.promise(response, {
        loading: "Wait! resetting password",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to reset password",
      });
      return await response;
    } catch (error) {
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
            state.role=action.payload.data.user.role;
            state.currentUser=action.payload.data.user;
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action.payload.data.user.role);
            localStorage.setItem("currentUser",JSON.stringify(action.payload.data.user));
        });
        builder
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoggedIn=true;
            state.role=action.payload.data.user.role;
            state.currentUser=action.payload.data.user;
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action.payload.data.user.role);
            localStorage.setItem("currentUser",JSON.stringify(action.payload.data.user));
        });
        
    }
  })


  export default authSlice.reducer;