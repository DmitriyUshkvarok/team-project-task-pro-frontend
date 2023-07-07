import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from '../../assets/config';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
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
  tagTypes: ['Profile'],
  endpoints: (build) => ({
    updateTask: build.mutation({
      query: (formData, id) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const { useUpdateTaskMutation } = tasksApi;
