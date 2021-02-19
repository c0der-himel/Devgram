import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const loginData = () => {
    fetch('/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          setErr(data.error);
        } else {
          history.push('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-4 d-grid">
                  <button className="btn btn-dark py-2" onClick={loginData}>
                    Login
                  </button>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                  <p>Don't have an account ?</p>
                  <Link to="/signup" className="nav-item mx-1 login-link">
                    Signup
                  </Link>
                </div>
                <div className="text-center">
                  {err && (
                    <div className="alert alert-danger" role="alert">
                      {err}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
