import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";
import toast from "react-hot-toast";
import { all } from "axios";


const initialState = {
    allClaims:{},
    allPolicies:[],
    allUsers:[],
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

export const approveMultipleClaims = createAsyncThunk("/claim/approveMultipleClaims", async (claimIds) => {
    try {
      const response = axiosInstance.post(`/admin/approve-multiple`,{claimIds});
      toast.promise(response, { 
        loading: "Wait! approving claims",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to approve claims",
      });
      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
)

//get all policies
export const getAllPolicies = createAsyncThunk("/policy/getAllPolicies", async () => {
    try {
      const response = axiosInstance.get("/admin/getAllPolicies");
      toast.promise(response, {
        loading: "Wait! fetching your policies",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to fetch policies",
      });
      return await response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
)

//get all users
export const getAllUsers = createAsyncThunk("/user/getAllUsers", async () => {
    try {
      const response = axiosInstance.get("/admin/getAllUsers");
      toast.promise(response, {
        loading: "Wait! fetching your users",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to fetch users",
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
            // localStorage.setItem("allClaims",JSON.stringify(action.payload.data.allClaims))
            
        });

        builder
        .addCase(getAllPolicies.fulfilled,(state,action)=>{
            state.allPolicies=action.payload.data.allPolicies;
        })
        .addCase(getAllUsers.fulfilled,(state,action)=>{
            state.allUsers=action.payload.data.allUsers;
        })
    }
})

export default adminSlice.reducer;