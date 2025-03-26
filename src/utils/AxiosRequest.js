/**Handle Common Axios Request */
import axios from "axios";
import { redirectPage } from "./utils";
import { ExceptionHandling } from "./ToastMessage";
import { LogOut } from "./LogOut";
const AxiosRequest = async (
  url,
  method,
  data,
  header,
  callBack,
  id,
  updatePreloader, errorRedirectUrl
) => {
  let headers = {
    "Content-Type": "multipart/form-data",
  };
  if (header) {
    headers["Authorization"] = header();
  }
  headers["Accept"] = "application/json";
  try {
    let response = await axios({
      method: method,
      url: url,
      data: data,
      headers: headers,
    });
    if (callBack) {
      callBack(response.data, id);
    }
    updatePreloader && updatePreloader();
    return response;
  } catch (error) {
    console.error(error);
    updatePreloader && updatePreloader();
    if (error.response && error.response.status === 401) {
      LogOut();
    } else if (error.response && error.response.status === 404) {
      errorRedirectUrl && redirectPage(errorRedirectUrl)
    } else {
      ExceptionHandling(id, error);
    }
  }
};

/**Get Request */
export const GetRequest = async (
  url,
  header,
  callback,
  toast,
  updatePreloader, errorRedirectUrl
) => {
  /**Common Get Request Handling */
  return await AxiosRequest(
    url,
    "GET",
    null,
    header,
    callback,
    toast,
    updatePreloader, errorRedirectUrl
  );
};

/**Post Request */
export const PostRequest = async (
  url,
  data,
  header,
  callback,
  toast,
  updatePreloader
) => {
  /**Common Get Request Handling */
  return await AxiosRequest(
    url,
    "POST",
    data,
    header,
    callback,
    toast,
    updatePreloader
  );
};

/**Patch Request */
export const PatchRequest = async (
  url,
  data,
  header,
  callback,
  toast,
  updatePreloader
) => {
  /**Common Patch Request Handling */
  return await AxiosRequest(
    url,
    "PATCH",
    data,
    header,
    callback,
    toast,
    updatePreloader
  );
};
/**Put Request */
export const PutRequest = async (
  url,
  data,
  header,
  callback,
  toast,
  updatePreloader
) => {
  /**Common Put Request Handling */
  return await AxiosRequest(
    url,
    "PUT",
    data,
    header,
    callback,
    toast,
    updatePreloader
  );
};

/**Delete Request */
export const DeleteRequest = async (
  url,
  header,
  callback,
  toast,
  updatePreloader
) => {
  /**Common Delete Request Handling */
  return await AxiosRequest(
    url,
    "DELETE",
    null,
    header,
    callback,
    toast,
    updatePreloader
  );
};
