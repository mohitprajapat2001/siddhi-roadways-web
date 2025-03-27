/**Handle Responses */
import { updateLocalStorage, redirectPage } from "../utils/utils";
import { SuccessToast } from "../utils/ToastMessage";
import { ResponseMessages } from "./contants";

/**
 * Invoice Created Successfully Callback
 */

export const createInvoiceSuccess = (response, id) => {
  SuccessToast(id, ResponseMessages.INVOICE_CREATED_SUCCESS);
  redirectPage(`/invoices/${response.invoice_number}/`);
};

/**
 * Invoice Deleted Successfully Callback
 */
export const deleteInvoiceSuccess = (response, id) => {
  SuccessToast(id, ResponseMessages.INVOICE_DELETED_SUCCESS);
};

/**
 * Add Invoice Item Success
 */
export const addInvoiceItemSuccess = (response, id) => {
  SuccessToast(id, ResponseMessages.INVOICE_ITEM_ADDED_SUCCESS);
};

/**
 * Delete Invoice Item Success
 */
export const deleteInvoiceItemSuccess = (response, id) => {
  SuccessToast(id, ResponseMessages.INVOICE_ITEM_DELETE_SUCCESS);
};

/**
 * Login Success
 */
export const loginUserSuccess = (response, id) => {
  updateLocalStorage("access", response.access);
  updateLocalStorage("refresh", response.refresh);
  SuccessToast(id, ResponseMessages.LOGIN_SUCCESS);
  redirectPage("/");
};

/**
 * Create User Success
 */
export const createUserSuccess = (response, id) => {
  SuccessToast(id, ResponseMessages.USER_CREATED_SUCCESS);
};

/**
 * Register user Success
 */
export const registerUserSuccess = (response, id) => {
  SuccessToast(id, ResponseMessages.USER_REGISTED_SUCCESS);
  redirectPage("/auth/login")
}