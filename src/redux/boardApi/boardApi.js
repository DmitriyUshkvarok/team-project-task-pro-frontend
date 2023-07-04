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
  tagTypes: ['Boards', 'Columns', 'BoardsId', 'Profile', 'BoardBg'],
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
    createTask: builder.mutation({
      query: ({ values, boardId, columnId }) => ({
        url: `/tasks/${boardId}/${columnId}`,
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Profile', 'BoardsId'],
    }),
    getFetchTaskById: builder.query({
      query: (boardId) => `/board/getById/${boardId}`,
      providesTags: ['Profile'],
    }),
    editColumn: builder.mutation({
      query: ({ values, id }) => ({
        url: `/column/${id}`,
        method: 'PATCH',
        body: values,
      }),
      invalidatesTags: ['BoardsId', 'Columns'],
    }),
    deleteColumn: builder.mutation({
      query: (id) => ({
        url: `/column/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['BoardsId', 'Columns'],
    }),
    editBoard: builder.mutation({
      query: ({ values, id }) => ({
        url: `/board/update/${id}`,
        method: 'PATCH',
        body: values,
      }),
      invalidatesTags: ['Boards', 'BoardsId'],
    }),
    updateTask: builder.mutation({
      query: ({ values, idTask }) => ({
        url: `/tasks/${idTask}`,
        method: 'PATCH',
        body: values,
      }),
      invalidatesTags: ['BoardsId', 'Columns'],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['BoardsId', 'Columns'],
    }),
    getBoardBdById: builder.query({
      query: (name) => `background/${name}`,
      providesTags: ['BoardsId'],
    }),
  }),
});

export const {
  useGetFetchBoardsQuery,
  useGetFetchBoardByIdQuery,
  useCreateBoardMutation,
  useCreateColumnMutation,
  useDeleteBoardMutation,
  useCreateTaskMutation,
  useEditColumnMutation,
  useEditBoardMutation,
  useDeleteColumnMutation,
  useUpdateTaskMutation,
  useGetBoardBdByIdQuery,
  useDeleteTaskMutation,
} = boardsApi;
