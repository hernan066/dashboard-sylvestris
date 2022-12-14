import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const API = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const token = localStorage.getItem("token");

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: retry(fetchBaseQuery({ baseUrl: API, headers: { 'Authorization': token } }), {
    maxRetries: 2,
  }),
  keepUnusedDataFor: 60, // duracion de datos en cache

  refetchOnMountOrArgChange: true, // revalida al montar el componente
  refetchOnFocus: true, // revalida al cambiar de foco
  refetchOnReconnect: true, // revalida al reconectar

  tagTypes: ["Users"],

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      // keepUnusedDataFor: 3,
      extraOptions: { maxRetries: 5 },
      providesTags: ["Users"],
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      // keepUnusedDataFor: 3,
      extraOptions: { maxRetries: 3 },
      providesTags: ["Users"],
    }),
    postUser: builder.mutation({
      query: (newUser) => ({
        url: "/users",
        method: "post",
        body: newUser,
      }),
      invalidatesTags: ["Users"],
      extraOptions: { maxRetries: 0 },
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery, usePostUserMutation } = userApi;
