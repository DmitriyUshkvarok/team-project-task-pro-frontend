import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profileApi',
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
    changeProfileAvatar: build.mutation({
      query: (formData) => ({
        url: `users/avatar`,
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['Profile'],
    }),
    getCurrentUser: build.query({
      query: () => 'users/current',
      providesTags: ['Profile'],
    }),
    updateUser: build.mutation({
      query: (formData) => ({
        url: 'users/',
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const {
  useChangeProfileAvatarMutation,
  useGetCurrentUserQuery,
  useUpdateUserMutation,
} = profileApi;
