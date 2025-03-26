/**React Utilities */
import { userDetailsGoogle } from "../utils/contants";
import axios from "axios";
export const redirectPage = (url) => {
  /**Redirect Page to New Url */
  window.location.href = url;
};
export const redirectPageLazy = (url) => {
  /**Redirect Page Lazy */
  window.location.href = url;
};
export const updateLocalStorage = (key, value) => {
  /**Update Browser's LocalStorage Value */
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  /**Get Browser's Local Storage Item */
  return localStorage.getItem(key);
};

export const removeLocalStorage = (key) => [
  /**Remove Browser's Local Storage Item */
  localStorage.removeItem(key),
];
export const getBearerToken = () => {
  return "Bearer " + getLocalStorage("access");
};

export const isOrganizationHead = async (user) => {
  /**Check if Logged in User is Organization Head */
  !user.organization_head && redirectPage("/unauthorized");
};

export const isUserInOrganization = async (user) => {
  /**Checks Whether User Belongs to any Organization */
  // !user.organization && redirectPage("/unauthorized");
};

/**Formatted Date time Object */
export const getFormattedDate = (date) => {
  return new Date(date).toString().slice(4, 15);
};
export const otpInputs = () => {
  const form = document.querySelector("#otp-form");
  const inputs = [...form.querySelectorAll("input[name=otp]")];
  const submit = form.querySelector("button[type=submit]");
  const handleKeyDown = (e) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputs.indexOf(e.target);
      if (index > 0) {
        inputs[index - 1].value = "";
        inputs[index - 1].focus();
      }
    }
  };

  const handleInput = (e) => {
    const { target } = e;
    const index = inputs.indexOf(target);
    if (target.value) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      } else {
        submit.focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
      return;
    }
    const digits = text.split("");
    inputs.forEach((input, index) => (input.value = digits[index]));
    submit.focus();
  };

  inputs.forEach((input) => {
    input.addEventListener("input", handleInput);
    input.addEventListener("keydown", handleKeyDown);
    input.addEventListener("focus", handleFocus);
    input.addEventListener("paste", handlePaste);
  });
};
export const get_user_google_credentials = async (access_token) => {
  /**Get User Login Information Google */
  try {
    let response = await axios({
      method: "GET",
      url: userDetailsGoogle + access_token,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
