/**Exception Handling Toast*/
import { toast } from "react-toastify";
import { redirectPageLazy } from "./utils";
const UpdateToast = (id, message, type) => {
  toast.update(id, {
    render: message,
    type: type,
    isLoading: false,
    autoClose: 7000,
    draggable: true,
    closeButton: true,
  });
};
export const ExceptionHandling = (id, errors) => {
  Object.values(errors.response.data).forEach((error) => {
    if (typeof error == "string") {
      UpdateToast(id, error, "error");
    } else {
      error.forEach((err) => {
        UpdateToast(id, err, "error");
      });
    }
  });
};

export const LoadingToast = (message, options) => {
  return toast.loading(message, options);
};

export const ErrorToast = (id, message) => {
  UpdateToast(id, message, "error");
};

export const SuccessToast = (id, message, successUrl) => {
  UpdateToast(id, message, "success");
  successUrl && redirectPageLazy(successUrl);
};
