const baseUrl = process.env.REACT_APP_API_URL

const HttpService = {
    loginUrl: baseUrl + 'api/users/login',
    loginUrlVerifyToken: baseUrl + 'api/auth/token/verify/',
    forgotPassword: baseUrl + '/password',
    SignupUrl:baseUrl+'api/createuser',
    GetCategoryUrl: baseUrl+'get/category',
    GetLocationUrl:baseUrl+'get/alllocations',
    addListingUrl:baseUrl+'get/plans/features',
    FetchUserDetailUrl:baseUrl+'api/get/user/'
};

export default HttpService;