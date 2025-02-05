import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";
import toast from "react-hot-toast";

const initialState={
    claims:[],
}

export const submitClaim = createAsyncThunk("/claim/submitClaim", async ({id,data}) => {
    try {
      const response = axiosInstance.post(`/claim/submitClaim/${id}`, data);
      toast.promise(response, { 
        loading: "Wait! creating your policy",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to purchase policy",
      });
      return await response;
    } catch (error) {
        // console.log(error)
      toast.error(error?.response?.data?.message);
    }
  }
)

export const getClaims = createAsyncThunk("/claim/getClaims", async () => {
    try {
      const response = axiosInstance.get("/claim/getAllClaims");
      console.log(response)
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

export const updateClaim = createAsyncThunk("/claim/updateClaim", async ({id,data}) => {
    try {
      const response = axiosInstance.put(`/claim/${id}`, data);
      toast.promise(response, { 
        loading: "Wait! updating your claim",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to update claim",
      });
      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
)

export const deleteClaim = createAsyncThunk("/claim/deleteClaim", async (id) => {
    try {
      const response = axiosInstance.delete(`/claim/${id}`);
      toast.promise(response, { 
        loading: "Wait! deleting your claim",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to delete claim",
      });
      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
)

export const claimSlice = createSlice({
    name:"claim",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(submitClaim.fulfilled,(state,action)=>{
            state.claims.push(action.payload.data.claim);
        });
        builder
        .addCase(getClaims.fulfilled,(state,action)=>{
            state.claims=action.payload.data.claims;
        });
    }
})
export default claimSlice.reducer