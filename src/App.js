import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";

/**Providers */
import ThemeProvider from "./providers/ThemeProvider";
import UsersProvider from "./providers/UsersProvider";
import CityProvider from "./providers/CityProvider";
import InvoiceProvider from "./providers/InvoiceProvider";
import UtilsProvider from "./providers/UtilsProvider";
// Components
import Home from "./Home";

// Invoice App
import Invoices from "./apps/invoices/Invoices";
import InvoiceDetails from "./apps/invoices/InvoiceDetails";
import Register from "./apps/users/Register";
import Login from "./apps/users/Login";
import Profile from "./apps/users/Profile";
import { ToastContainer } from "react-toastify";
import ChangePassword from "./apps/users/ChangePassword";
import ForgotPassword from "./apps/users/ForgotPassword";

function App() {
  return (
    <ThemeProvider>
      <UtilsProvider>
        <UsersProvider>
          <CityProvider>
            <InvoiceProvider>
              <BrowserRouter>
                <ToastContainer
                  draggablePercent={60}
                  draggable
                  className={"capitalize"}
                  stacked
                />
                <Routes>
                  <Route path="/" element={<Home />} />
                  {/* Invoices Routes */}
                  <Route path="/invoices" element={<Invoices />} />
                  <Route
                    path="/invoices/:invoice"
                    element={<InvoiceDetails />}
                  />

                  {/* Authenticated Pages */}
                  <Route path="/auth/register/" element={<Register />} />
                  <Route path="/auth/login/" element={<Login />} />
                  <Route path="/profile/" element={<Profile />} />
                  <Route
                    path="/change-password/"
                    element={<ChangePassword />}
                  />
                  <Route
                    path="/forgot-password/"
                    element={<ForgotPassword />}
                  />
                  <Route path="*" element={<NoPage />} />
                </Routes>
              </BrowserRouter>
            </InvoiceProvider>
          </CityProvider>
        </UsersProvider>
      </UtilsProvider>
    </ThemeProvider>
  );
}

export default App;
