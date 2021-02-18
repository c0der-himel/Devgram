import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="Login">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="login shadow-lg rounded-3 p-5">
              <div className="login-title px-5 text-center mb-5">
                <h1 className="logo">Login</h1>
                <hr />
              </div>
              <div className="login-content">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="***********************"
                    />
                  </div>
                  <div className="mt-4 d-grid">
                    <button className="btn btn-dark py-2">Login</button>
                  </div>
                  <div className="mt-4 d-flex justify-content-center">
                    <p>Don't have an account ?</p>
                    <Link to="/signup" className="nav-item mx-1 login-link">
                      Signup
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
