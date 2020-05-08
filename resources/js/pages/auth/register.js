import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import {register} from '../../api/auth';
import useInputValue from '../../components/input-value';

function Register () {
  let history = useHistory();
  let { setCurrentUser, setToken } = useAuth();
  let email = useInputValue('email');
  let name = useInputValue('name');
  let password = useInputValue('password');
  let passwordConfirmation = useInputValue('password_confirmation');

  const handleSubmit = e => {
    e.preventDefault();

    register({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value
    }).then(({user, token}) => {
      setCurrentUser(user);
      setToken(token);
      history.push('/home');
    }).catch(error => {
      error.json().then(({errors}) => {
        ;[email, name, password].forEach(({parseServerError}) => parseServerError(errors));
      });
    });
  };

  return (
      <main className="login-form">
          <div className="container h-100">
              <div className="row align-items-center h-100">
                  <div className="col-8 mx-auto">
                      <div className="card mx-auto">
                          <div className="card-body">
                              <form onSubmit={handleSubmit} method="POST">
                                  <div className="form-group row">
                                      <label className="col-md-3 col-form-label text-md-right">Username</label>
                                      <div className="col-md-5">
                                          <input
                                              type="text"
                                              id="username"
                                              name="name"
                                              className={`form-control ${name.error ? 'is-invalid' : ''}`}
                                              required
                                              {...name.bind}
                                          />
                                      </div>
                                      <div className="col-md-3">
                                          { name.error && <p className="text-danger">{name.error}</p> }
                                      </div>
                                  </div>

                                  <div className="form-group row">
                                      <label className="col-md-3 col-form-label text-md-right">Email</label>
                                      <div className="col-md-5">
                                          <input
                                              id="email"
                                              name="email"
                                              type="email"
                                              className={`form-control ${email.error ? 'is-invalid' : ''}`}
                                              required
                                              {...email.bind}
                                          />
                                      </div>
                                      <div className="col-md-3">
                                          { email.error && <p className="text-danger">{email.error}</p> }
                                      </div>
                                  </div>

                                  <div className="form-group row">
                                      <label className="col-md-3 col-form-label text-md-right">Password</label>
                                      <div className="col-md-5">
                                          <input
                                              type="password"
                                              id="password"
                                              name="password"
                                              className={`form-control ${password.error ? 'is-invalid' : ''}`}
                                              minLength={6}
                                              required
                                              {...password.bind}
                                          />
                                      </div>
                                      <div className="col-md-3">
                                          { password.error && <p className="text-danger">{password.error}</p> }
                                      </div>
                                  </div>

                                  <div className="form-group row">
                                      <label className="col-md-3 col-form-label text-md-right">Password confirmation</label>
                                      <div className="col-md-5">
                                          <input
                                              type="password"
                                              id="password-confirmation"
                                              className={`form-control ${passwordConfirmation.error ? 'is-invalid' : ''}`}
                                              name="password-confirmation"
                                              minLength={6}
                                              required
                                              {...passwordConfirmation.bind}
                                          />
                                      </div>
                                      <div className="col-md-3">
                                          { passwordConfirmation.error && <p className="text-danger">{passwordConfirmation.error}</p> }
                                      </div>
                                  </div>

                                  <div className="col-md-6 offset-md-4">
                                      <button type="submit" className="btn btn-primary"> Sign up </button>
                                      <Link
                                          className="btn btn-link"
                                          to="/forgot-password"
                                          className="text-sm underline text-gray-600 font-bold"
                                      >
                                          Forget password?
                                      </Link>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  );
}

export default Register;
