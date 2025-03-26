// UsersProvider.js
import { useState, useContext, useEffect } from "react";
import Context from "../context/Contexts";
import { GetRequest, PostRequest } from "../utils/AxiosRequest";
import { BaseUrlPath, IGNORE_URL_PATHS } from "../utils/contants";
import { getBearerToken, removeLocalStorage } from "../utils/utils";
import { LoadingToast } from "../utils/ToastMessage";
import { LogOut } from "../utils/LogOut";
import { loginUserSuccess, createUserSuccess } from "../utils/handleResponses";
const usersAPIURL = BaseUrlPath + "api/users/";
const userLoginUrl = BaseUrlPath + "api/login/";
const UsersProvider = ({ children }) => {
  let toastId = null;
  const { updatePreloader } = useContext(Context.UtilsContext);
  const [users, setUsers] = useState(null);
  const [auth, setAuth] = useState(null);

  const authenticatedUser = async () => {
    const response = await GetRequest(
      usersAPIURL + "me/",
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    if (response) {
      setAuth(response.data);
    }
  };

  const loginUser = async (data) => {
    toastId = LoadingToast("Logging in...");
    const respone = await PostRequest(
      userLoginUrl,
      data,
      null,
      loginUserSuccess,
      toastId
    );
  };
  const logOutHandler = () => {
    removeLocalStorage("access");
    removeLocalStorage("refresh");
    LogOut();
  };
  const getUsers = async (query_params) => {
    const response = await GetRequest(
      BaseUrlPath + "api/users/",
      null,
      null,
      null,
      null
    );
    if (response) {
      setUsers(response.data.results);
    }
  };

  const createUser = (data) => {
    toastId = LoadingToast("Creating User...");
    const response = PostRequest(
      usersAPIURL,
      data,
      getBearerToken,
      createUserSuccess,
      toastId
    );
    response && getUsers();
  };

  useEffect(() => {
    if (!IGNORE_URL_PATHS.includes(window.location.pathname)) {
      authenticatedUser();
    }
  }, []);
  const data = {
    users,
    getUsers,
    auth,
    authenticatedUser,
    loginUser,
    logOutHandler,
    createUser,
  };
  return (
    <Context.UserContext.Provider value={data}>
      {children}
    </Context.UserContext.Provider>
  );
};

export default UsersProvider;
