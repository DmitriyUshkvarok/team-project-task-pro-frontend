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
  tagTypes: ['Boards', 'Columns', 'BoardsId'],
  endpoints: (builder) => ({
    getFetchBoards: builder.query({
      query: () => '/board ',
      providesTags: ['Boards'],
    }),
    getFetchBoardById: builder.query({
      query: (boardId) => `/board/getById/${boardId}`,
      providesTags: ['BoardsId'],
    }),
    createBoard: builder.mutation({
      query: (formData) => ({
        url: `/board/create`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Boards'],
    }),
    deleteBoard: builder.mutation({
      query: (id) => ({
        url: `/board/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Boards', 'Columns'],
    }),
    createColumn: builder.mutation({
      query: ({ values, boardId }) => ({
        url: `/column/${boardId}`,
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['BoardsId', 'Columns'],
    }),
    editColumn: builder.mutation({
      query: ({ values, id }) => ({
        url: `/column/${id}`,
        method: 'PATCH',
        body: values,
      }),
      invalidatesTags: ['BoardsId', 'Columns'],
    }),
  }),
});

export const {
  useGetFetchBoardsQuery,
  useGetFetchBoardByIdQuery,
  useCreateBoardMutation,
  useCreateColumnMutation,
  useDeleteBoardMutation,
  useEditColumnMutation,
} = boardsApi;
