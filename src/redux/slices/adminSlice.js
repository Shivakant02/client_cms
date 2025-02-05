import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";
import toast from "react-hot-toast";


const initialState = {
    allClaims:JSON.parse(localStorage.getItem("allClaims"))||{}
}

export const getAllClaims = createAsyncThunk("/claim/getAllClaims", async () => {
    try {
      const response = axiosInstance.get("/admin/fetchAllClaims");
      toast.promise(response, { 
        loading: "Wait! fetching your claims",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to fetch claims",
      });
      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
)

export const approveClaim = createAsyncThunk("/claim/approveClaim", async (id) => {
    try {
      const response = axiosInstance.patch(`/admin/approve/${id}`);
      toast.promise(response, { 
        loading: "Wait! approving claim",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to approve claim",
      });
      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
) 

export const rejectClaim = createAsyncThunk("/claim/rejectClaim", async (id) => {
    try {
      const response = axiosInstance.patch(`/admin/reject/${id}`);
      toast.promise(response, { 
        loading: "Wait! rejecting claim",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to reject claim",
      });
      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
)

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(getAllClaims.fulfilled, (state, action) => {
            state.allClaims = action.payload.data.allClaims;
            localStorage.setItem("allClaims",JSON.stringify(action.payload.data.allClaims))
            
        });
    }
})

export default adminSlice.reducer;