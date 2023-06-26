import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const boardsApi = createApi({
  reducerPath: 'boardsApi',
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
  tagTypes: ['Boards', 'Columns'],
  endpoints: (builder) => ({
    getFetchBoards: builder.query({
      query: () => '/board ',
      providesTags: ['Boards'],
    }),
    getFetchBoardById: builder.query({
      query: (boardId) => `/board/getById/${boardId}`,
      providesTags: ['Boards'],
    }),
    createBoard: builder.mutation({
      query: (formData) => ({
        url: `/board/create`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Boards'],
    }),
    createColumn: builder.mutation({
      query: ({ formData, boardId }) => ({
        url: `/column/${boardId}`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Boards', 'Columns'],
    }),
  }),
});

export const {
  useGetFetchBoardsQuery,
  useGetFetchBoardByIdQuery,
  useCreateBoardMutation,
  useCreateColumnMutation,
} = boardsApi;
