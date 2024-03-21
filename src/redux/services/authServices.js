import {clientApi} from './clientApi';

export const authService = clientApi.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: body => ({
        url: `/login`,
        method: 'POST',
        body: body,
      }),
    }),
    // State Data
    fetchData: builder.query({
      query: () => '/get_all_state',
    }),

    // Register User
    registerUser: builder.mutation({
      query: body => ({
        url: `/register`,
        method: 'POST',
        body: body,
      }),
    }),

    mendateList: builder.mutation({
      query: body => ({
        url: `/mandate/list`,
        method: 'POST',
        body: body,
      }),
    }),

    CalendarData: builder.query({
      query: () => '/get_Events',
    }),

    FormuData: builder.query({
      query: () => '/get_all_forum_Category',
      method: 'GET',
    }),

    RefrealData: builder.mutation({
      query: body => ({
        url: `/add/referral`,
        method: 'POST',
        body: body,
      }),
    }),

    FetchReferalData: builder.query({
      query: id => `referral/list_by_mandate?user_mandate=${id}`,
      method: 'GET',
    }),
    ProfileData: builder.mutation({
      query: body => ({
        url: `/update`,
        method: 'PUT',
        body: body,
      }),
    }),

    update_password: builder.mutation({
      query: body => ({
        url: `/update-password`,
        method: 'PUT',
        body: body,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useFetchDataQuery,
  useRegisterUserMutation,
  useMendateListMutation,
  useCalendarDataQuery,
  useFormuDataQuery,
  useRefrealDataMutation,
  useLazyFetchReferalDataQuery,
  useProfileDataMutation,
  useUpdate_passwordMutation,
} = authService;
