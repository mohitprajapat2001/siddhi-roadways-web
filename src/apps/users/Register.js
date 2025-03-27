/* eslint-disable jsx-a11y/no-redundant-roles */
/**User Registration Page */
import signup from "../../static/img/signup.gif";
import { useContext } from "react";
import Context from "../../context/Contexts";

function Register() {
  /**User Registration Page */
  const { registerUser, } = useContext(
    Context.UserContext
  );
  const { toggle, setToggle } = useContext(Context.UtilsContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    registerUser(data);
  };

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="289813396319-2bpdlvdug1pu2ldabbga0n76aieg86nt.apps.googleusercontent.com"
        data-login_uri="{% url 'google_login_by_token' %}"
      ></div>
      <div className="hero min-h-screen bg-base-200 py-5">
        <div className="drop-shadow-xl w-full rounded-md flex justify-between items-stretch">
          <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
            <img src={signup} alt="login" className="h-[500px]" />
          </div>
          <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold">
              Create Account
            </h1>
            <form
              method="POST"
              onSubmit={handleSubmit}
              role="form"
              className="w-full mt-5 sm:mt-8"
            >
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <label class="form-control w-full">
                  <div class="label">
                    <span class="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    name="first_name"
                    className="input input-bordered input-primary w-full"
                  />
                </label>
                <label class="form-control w-full">
                  <div class="label">
                    <span class="label-text">UserName</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    className="input input-bordered input-primary w-full"
                  />
                </label>
                <label class="form-control w-full">
                  <div class="label">
                    <span class="label-text">Email</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    name="email"
                    className="input input-bordered input-primary w-full"
                  />
                </label>
                <label class="form-control w-full">
                  <div class="label">
                    <span class="label-text">Password</span>
                  </div>
                  <input
                    type="password"
                    placeholder="Choose Your Password"
                    name="password"
                    className="input input-bordered input-primary w-full"
                  />
                </label>
                <label class="form-control w-full">
                  <div class="label">
                    <span class="label-text">Confirm Password</span>
                  </div>
                  <input
                    type={toggle ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirm_password"
                    className="input input-bordered input-primary w-full"
                  />
                </label>
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-x-4">
                    <input
                      type="checkbox"
                      onClick={() => setToggle(!toggle)}
                      className="toggle toggle-primary"
                    />
                    <span className="label-text">Show Password</span>
                  </label>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center w-60 mx-auto">
                  <button
                    role="button"
                    type="submit"
                    className="btn btn-active btn-primary btn-block"
                  >
                    Sign Up
                  </button>
                  <a
                    href="/login"
                    role="button"
                    className="btn btn-outline btn-primary btn-block"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
