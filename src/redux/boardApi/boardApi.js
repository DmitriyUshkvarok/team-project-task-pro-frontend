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
      query: () => '/boardtest ',
      providesTags: ['Boards'],
    }),
    getFetchBoardById: builder.query({
      query: (boardId) => `/board/${boardId}`,
      providesTags: ['Boards'],
    }),
  }),
});

export const {
  useGetFetchBoardsQuery,
  useGetFetchBoardByIdQuery,
  useCreateBoardMutation,
  useCreateColumnMutation,
} = boardsApi;

