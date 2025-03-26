// ThemeContext.js
import React from "react";
import { getLocalStorage } from "../utils/utils";

const ThemeContext = React.createContext(getLocalStorage("theme") || "light");
const UserContext = React.createContext(null);
const CitiesContext = React.createContext(null);
const InvoiceContext = React.createContext(null);
const UtilsContext = React.createContext(null);

const Context = {
  InvoiceContext,
  ThemeContext,
  UserContext,
  CitiesContext,
  UtilsContext,
};
export default Context;
