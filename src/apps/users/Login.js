/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/**User Login Page */
import { useContext } from "react";
import Context from "../../context/Contexts";
import { Link } from "react-router-dom";

function Login() {
  /**User Login Page */

  const { loginUser } = useContext(Context.UserContext);
  const { toggle, setToggle } = useContext(Context.UtilsContext)
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
            <form className="card-body flex flex-col w-full gap-y-5" method="POST" onSubmit={handleSubmit}>
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
                  type={toggle ? "password" : "text"}
                  name="password"
                  placeholder="Enter Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <input type="checkbox" class="toggle toggle-primary" defaultChecked onClick={() => setToggle(!toggle)} />
                  <span class="label-text">Click to view password</span>
                </div>
                <div className="">
                  New here? <Link className="text-info underline" to="/auth/register">register now</Link>
                </div>
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
