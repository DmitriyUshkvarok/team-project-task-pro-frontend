import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const miniImgApi = createApi({
  reducerPath: 'miniImg',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://task-pro-app.onrender.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['MiniImg'],
  endpoints: (builder) => ({
    getMiniImg: builder.query({
      query: () => '/miniImages',
      providesTags: ['MiniImg'],
    }),
  }),
});

export const { useGetMiniImgQuery } = miniImgApi;
