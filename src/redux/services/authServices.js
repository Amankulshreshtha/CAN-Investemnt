import {clientApi} from './clientApi';

export const authService = clientApi.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: body => ({
        url: `/investor_login`,
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
        url: `/add_Investor`,
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
        url: `/update_Investor`,
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
    PortfolioData: builder.query({
      query: id => '/get_all_portfolio',
      method: 'GET',
    }),
    Active_Mandate: builder.mutation({
      query: body => ({
        url: `/mandate/list`,
        method: 'POST',
        body: body,
      }),
    }),

    valuation: builder.query({
      query: id => `/quetion_data_by_category?category_id=${id}`,
      method: 'GET',
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
  usePortfolioDataQuery,
  useActive_MandateMutation,
  useLazyValuationQuery,
} = authService;
