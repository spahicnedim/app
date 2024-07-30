import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const createCompany = createAsyncThunk(
  "companies/createCompany",
  async (companyData, thunkAPI) => {
    try {
      const response = await api.post("/companies", companyData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchCompanies = createAsyncThunk(
  "companies/fetchCompanies",
  async (serviceId, thunkAPI) => {
    try {
      const response = await api.get(`/companies/${serviceId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchoneCompany = createAsyncThunk(
  "companies/fetchOneCompany",
  async ({ serviceId, companyId }, thunkAPI) => {
    try {
      const response = await api.get(`/companies/${serviceId}/${companyId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchGradovi = createAsyncThunk(
  "cities/fetchGradovi",
  async () => {
    const response = await api.get("/gradovi");
    console.log(response.data);
    return response.data;
  }
);

export const updateCompany = createAsyncThunk(
  "companies/updateCompany",
  async ({ companyId, companyData }, rejectWithValue) => {
    try {
      const response = await api.put(`/companies/${companyId}`, companyData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
