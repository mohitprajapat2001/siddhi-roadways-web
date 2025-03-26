// CityProvider.js
import React, { useState } from "react";
import Context from "../context/Contexts";
import { GetRequest, PostRequest, DeleteRequest } from "../utils/AxiosRequest";
import { BaseUrlPath } from "../utils/contants";
import { getBearerToken } from "../utils/utils";
import { LoadingToast } from "../utils/ToastMessage";
import {
  createInvoiceSuccess,
  deleteInvoiceSuccess,
  addInvoiceItemSuccess,
  deleteInvoiceItemSuccess,
} from "../utils/handleResponses";

const InvoiceProvider = ({ children }) => {
  let toastId = null;
  const [invoices, setInvoices] = useState(null);
  const [detail, setDetail] = useState(null);
  const getInvoices = async (query_params) => {
    const response = await GetRequest(
      `${BaseUrlPath}api/invoices/` + query_params || "",
      getBearerToken
    );
    if (response) {
      setInvoices(response.data.results);
    }
  };

  const createInvoice = async (data) => {
    toastId = LoadingToast("Creating Invoice...");
    const response = await PostRequest(
      `${BaseUrlPath}api/invoices/`,
      data,
      getBearerToken,
      createInvoiceSuccess,
      toastId
    );
    if (response) {
      setInvoices(response.data.results);
    }
  };

  const getInvoiceDetails = async (id) => {
    const response = await GetRequest(
      `${BaseUrlPath}api/invoices/${id}/`,
      getBearerToken,
      null,
      null,
      null,
      "/invoices"
    );
    if (response) {
      setDetail(response.data);
    }
  };
  const deleteInvoice = (id) => {
    toastId = LoadingToast("Deleting Invoice...");
    DeleteRequest(
      `${BaseUrlPath}api/invoices/${id}/`,
      getBearerToken,
      deleteInvoiceSuccess,
      toastId
    );
    setInvoices(invoices.filter((invoice) => invoice.id !== id));
  };

  const addInvoiceItem = async (data) => {
    toastId = LoadingToast("Adding Invoice Item...");
    const response = await PostRequest(
      BaseUrlPath + "api/items/",
      data,
      getBearerToken,
      addInvoiceItemSuccess,
      toastId
    );
    return response;
  };
  const deleteInvoiceItem = async (id) => {
    toastId = LoadingToast("Deleting Invoice Item...");
    await DeleteRequest(
      BaseUrlPath + "api/items/" + id + "/",
      getBearerToken,
      deleteInvoiceItemSuccess,
      toastId
    );
  };

  const data = {
    invoices,
    detail,
    getInvoices,
    createInvoice,
    getInvoiceDetails,
    deleteInvoice,
    addInvoiceItem,
    deleteInvoiceItem,
  };
  return (
    <Context.InvoiceContext.Provider value={data}>
      {children}
    </Context.InvoiceContext.Provider>
  );
};

export default InvoiceProvider;
