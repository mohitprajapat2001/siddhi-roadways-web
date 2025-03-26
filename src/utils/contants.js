/**Constants */

/**Daisy UI Themes */
export const themes = ["light", "dark", "lofi", "black", "night"];

export const IGNORE_URL_PATHS = ["/auth/login/", "/auth/login"];

export const BaseUrlPath = "http://127.0.0.1:8000/";
// export const BaseUrlPath = "https://halydeals.com/";
export const urlForgotPassword =
  "http://127.0.0.1:8000/accounts/forgot-password/";
export const urlForgotPasswordOtpSubmit =
  "http://127.0.0.1:8000/accounts/otp-verification/";

export const MANAGER = "manager";

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const userDetailsGoogle = `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=`;

export const dispatcherActions = {
  ME: "ME",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGISTER",
  SET_PNR: "SET_PNR",
  SET_TRAINS: "SET_TRAINS",
  SET_TRAIN: "SET_TRAIN",
  SET_STATIONS: "SET_STATIONS",
  SET_STATION: "SET_STATION",
  SET_TBIS: "SET_TBIS",
  RESET_DETAILS: "RESET_DETAILS",
};

export const LoadingMessages = {
  LOGIN: "Logging In...",
  LOGOUT: "Logging Out...",
  REGISTER: "Registering User...",
  PROFILE_UPDATE: "Updating Profile...",
  FORGOT_PASSWORD: "Sending Password Reset Link...",
  PASSWORD_CHANGED: "Changing Password...",
  FETCHING_PNR: "Fetching PNR Status...",
  FETCHING_TRAIN_DETAILS: "Fetching Train Details...",
  RESETTING_TRAIN_DETAILS: "Resetting Train Details...",
  TBIS_LOADING: "Fetching Available Trains...",
  FETCHING_STATION_DETAILS: "Fetching Station Details...",
  RESETTING_STATION_DETAILS: "Resetting Station Details...",
  RESETTING_TBIS: "Resetting Available Trains...",
  SEAT_AVAILABILITY_LOADING: "Fetching Seat Availability...",
  FARE_DETAILS_LOADING: "Fetching Fare Details...",
};

export const ResponseMessages = {
  // Invoice Response Messages
  INVOICE_CREATED_SUCCESS: "Invoice Created Successfully",
  INVOICE_DELETED_SUCCESS: "Invoice Deleted Successfully",
  INVOICE_ITEM_ADDED_SUCCESS: "Invoice Item Added Successfully",
  INVOICE_ITEM_DELETE_SUCCESS: "Invoice Item Deleted Successfully",

  // User Response Messge
  USER_CREATED_SUCCESS: "User Created Successfully",
  USER_UPDATED_SUCCESS: "User Updated Successfully",
  USER_DELETED_SUCCESS: "User Deleted Successfully",
};
