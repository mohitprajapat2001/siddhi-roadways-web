/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/**User Login Page */
import login from "../../static/img/login.gif";
import { useContext } from "react";
import Context from "../../context/Contexts";

function Login() {
  /**User Login Page */

  const { loginUser, toggleState, toggle } = useContext(Context.UserContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    loginUser(data);
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content w-full">
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <form className="card-body" method="POST" onSubmit={handleSubmit}>
              <h1 className="text-5xl text-center font-bold">Login Now</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
