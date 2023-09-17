import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseurl = "https://jsonplaceholder.typicode.com";

const restApis = createApi({
  reducerPath: `restApis`,

  baseQuery: fetchBaseQuery({
    baseUrl: baseurl,
  }),
  tagTypes: ["edit", "todo"],
  endpoints: (builder) => ({
    // get users todos
    getTodos: builder.query({
      query: (data) => `${baseurl}/todos`,
      providesTags: [`todo`],
    }),

    //post
    addTodo: builder.mutation({
      query: (data) => ({
        url: `${baseurl}/todos`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),

    //put
    editTodos: builder.mutation({
      query: (data) => ({
        url: `${baseurl}/todos/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),

    //delete todo
    deleteTodos: builder.mutation({
      query: (data) => ({
        url: `${baseurl}/todos/${data}`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,

  useAddTodoMutation,

  useEditTodosMutation,
  useDeleteTodosMutation,
} = restApis;

export default restApis;
