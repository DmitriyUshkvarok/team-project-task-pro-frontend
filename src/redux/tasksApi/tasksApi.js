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
      query: (formData, boardId, columnId) => ({
        url: `/tasks/60c8c6bbf0c9a15f7c41979a/60c8c6bbf0c9a15f7c41979a`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Profile'],
    }),
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

export const { useCreateTaskMutation, useUpdateTaskMutation } = tasksApi;
