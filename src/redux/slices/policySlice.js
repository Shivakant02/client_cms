import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../config/axios";
import toast from "react-hot-toast";

const initialState={
    policies:[],
}

export const createPolicy = createAsyncThunk("/policy/createPolicy", async (data) => {
    try {
      const response = axiosInstance.post("/policy/purchasePolicy", data);
      toast.promise(response, { 
        loading: "Wait! creating your policy",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to purchase policy",
      });
      return await response;
    } catch (error) {
      toast.error(error?.response?.message);
    }
  }
)

export const policySlice = createSlice({
    name:"policy",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createPolicy.fulfilled,(state,action)=>{
            state.policies.push(action.payload.data.policy);
        });
    }
})
export default policySlice.reducer