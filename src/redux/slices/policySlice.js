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

export const myPolicies = createAsyncThunk("/policy/myPolicies", async () => {
    try {
      const response = axiosInstance.get("/policy/getAllPolicies");
        toast.promise(response, {
            loading: "Wait! fetching your policies",
            success: (data) => {
            return data?.data?.message;
            },
            error: "Failed to fetch policies",
        });
        console.log(response)
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
        builder
        .addCase(myPolicies.fulfilled,(state,action)=>{
            state.policies=action.payload.data.policies;
        });
    }
})
export default policySlice.reducer