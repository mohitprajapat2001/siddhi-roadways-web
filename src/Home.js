/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { FaList } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import Context from "./context/Contexts";
import Sidebar from "./components/Sidebar";
import Preloader from "./components/Preloader";
import AddUserModal from "./apps/invoices/AddUserModal";

const Home = () => {
  const { preload } = useContext(Context.UtilsContext);
  const { users, getUsers } = useContext(Context.UserContext);
  const { cities, getCities } = useContext(Context.CitiesContext);
  const { createInvoice } = useContext(Context.InvoiceContext);
  useEffect(() => {
    users || getUsers();
    cities || getCities();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    createInvoice(data);
  };

  return (
    (preload && <Preloader />) || (
      <>
        <Sidebar />
        <div className="p-1 ml-20 h-screen bg-base-300">
          <div className="flex flex-col items-start justify-start gap-3 h-full overflow-y-auto">
            <div className="px-2 py-1 rounded-box bg-base-200 shadow-md w-full">
              <div className="flex flex-row items-center justify-between">
                <p className="text-xl font-semibold">Create Invoices</p>
                <button
                  type="button"
                  className="flex items-center btn btn-soft btn-sm btn-primary"
                >
                  <NavLink to="/invoices" className="flex items-center gap-1">
                    <FaList /> View Invoices
                  </NavLink>
                </button>
              </div>
            </div>
            <div className="bg-base-100 h-screen overflow-y-auto p-2 rounded-box shadow-md w-full">
              <form method="POST" className="w-full" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 items-center">
                  {/* Truck Number */}
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Enter Truck Number</span>
                    </div>
                    <input
                      type="text"
                      name="truck_number"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">To Pay</span>
                    </div>
                    <select
                      className="select select-bordered w-full"
                      name="to_pay"
                    >
                      <option value={0} selected>
                        Not Paid
                      </option>
                      <option value={1}>Paid</option>
                    </select>
                  </label>
                </div>
                <div className="divider">
                  Enter Consigner / Consignee Details
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="grid grid-cols-2 gap-4 items-center w-full">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Select Consigner</span>
                      </div>
                      <Select
                        name="consignor"
                        placeholder="Select Consigner"
                        options={users?.map((user) => ({
                          value: user.id,
                          label: user.get_full_name,
                        }))}
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Select Consignee</span>
                      </div>
                      <Select
                        name="consignee"
                        placeholder="Select Consignee"
                        options={users?.map((user) => ({
                          value: user.id,
                          label: user.get_full_name,
                        }))}
                      />
                    </label>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      document.getElementById("add_user_modal").showModal()
                    }
                  >
                    Create Consignee/Consigner
                  </button>
                  <AddUserModal />
                </div>
                <div className="divider">
                  Enter Source / Destination Details
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="grid grid-cols-2 gap-4 items-center w-full">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Booking From</span>
                      </div>
                      <Select
                        name="source"
                        placeholder="Select Source"
                        options={cities?.map((user) => ({
                          value: user.id,
                          label: user.name_ascii,
                        }))}
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Booking Upto</span>
                      </div>
                      <Select
                        name="destination"
                        placeholder="Select Destination"
                        options={cities?.map((user) => ({
                          value: user.id,
                          label: user.name_ascii,
                        }))}
                      />
                    </label>
                  </div>
                  <button className="btn btn-primary w-full">
                    Create Invoice
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Home;
