import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from '../../assets/config';

export const miniImgApi = createApi({
  reducerPath: 'miniImg',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
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
