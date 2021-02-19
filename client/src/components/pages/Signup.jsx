import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const signUpData = () => {
    fetch('/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErr(data.error);
        } else {
          history.push('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                  <button className="btn btn-dark py-2" onClick={signUpData}>
                    Signup
                  </button>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                  <p>Already have an account ?</p>
                  <Link to="/login" className="nav-item mx-1 login-link">
                    Login
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

export default Signup;
