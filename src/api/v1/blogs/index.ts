// src/api/v1/blogs/index.ts
export type Methods = {
    get: {
      query?: GetListContentsQuery;
      resBody: BlogListResponse;
    };
  };