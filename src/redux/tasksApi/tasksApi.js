import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://task-pro-app.onrender.com/api/',
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
    createTask: build.mutation({
      query: (formData) => ({
        url: `/tasks`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const { useCreateTaskMutation } = tasksApi;
