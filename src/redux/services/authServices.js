import {clientApi} from './clientApi';

// const BASE_URL = 'http://54.190.192.105:9185/angel';

export const authService = clientApi.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: body => ({
        url: `/login`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {useLoginUserMutation} = authService;
