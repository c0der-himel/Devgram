import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <section className="Signup">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="signup shadow-lg rounded-3 p-5">
              <div className="signup-title px-5 text-center mb-5">
                <h1 className="logo">Signup</h1>
                <hr />
              </div>
              <div className="signup-content">
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
                  <div className="mb-3">
                    <label htmlFor="confirm-password" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="confirm-password"
                      id="confirm-password"
                      className="form-control"
                      placeholder="***********************"
                    />
                  </div>
                  <div className="mt-4 d-grid">
                    <button className="btn btn-dark py-2">Signup</button>
                  </div>
                  <div className="mt-4 d-flex justify-content-center">
                    <p>Already have an account ?</p>
                    <Link to="/login" className="nav-item mx-1 login-link">
                      Login
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

export default Signup;
