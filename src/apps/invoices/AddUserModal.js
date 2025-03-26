import { useContext } from "react";
import Context from "../../context/Contexts";

const AddUserModal = () => {
  const { createUser } = useContext(Context.UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("add-user-form");
    const data = new FormData(form);
    createUser(data);
  };
  return (
    <div>
      <dialog id="add_user_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add User!</h3>
          <div>
            <form
              method="POST"
              className="flex flex-col gap-3"
              id="add-user-form"
            >
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="input input-bordered w-full"
                  name="first_name"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="input input-bordered w-full"
                  name="last_name"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Username</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input input-bordered w-full"
                  name="username"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="input input-bordered w-full"
                  name="email"
                  required
                />
              </label>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-secondary w-full"
              >
                Add User
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddUserModal;
