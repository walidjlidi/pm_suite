import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { login } from '../../api/auth';
import {getIntendedUrl} from '../../utils/auth';
import useInputValue from '../../components/input-value';

function Login () {
  let {setCurrentUser, setToken} = useAuth();
  let history = useHistory();
  let email = useInputValue('email');
  let password = useInputValue('password');

  const handleSubmit = e => {
    e.preventDefault();
    login({
      email: email.value,
      password: password.value
    }).then(({ user, token }) => {
      setToken(token);
      setCurrentUser(user);
      history.push(getIntendedUrl());
    }).catch(error => {
      console.log(error);
      error.json().then(({ errors }) => email.parseServerError(errors));
    });
  };

  return (
          <main className="login-form">
              <div className="container h-100">
                  <div className="row align-items-center h-100">
                      <div className="col-8 mx-auto">
                          <div className="card mx-auto">
                              <div className="card-body">
                                  {email.error && (
                                      <div className="alert alert-danger" role="alert">
                                          {email.error}
                                      </div>
                                  )}
                                  <form onSubmit={handleSubmit} method="POST">
                                      <div className="form-group row">
                                          <label className="col-md-2 col-form-label text-md-right">E-mail</label>
                                          <div className="col-md-6">
                                              <input type="text"
                                                 id="email_address"
                                                 name="email-address"
                                                 required
                                                 {...email.bind}
                                                 className={`form-control ${
                                                     email.error ? "is-invalid" : ""
                                                 }`}
                                              />
                                          </div>
                                      </div>

                                      <div className="form-group row">
                                          <label className="col-md-2 col-form-label text-md-right">Password</label>
                                          <div className="col-md-6">
                                              <input type="password"
                                                     id="password"
                                                     className={`form-control ${
                                                         email.error ? "is-invalid" : ""
                                                     }`}
                                                     name="password"
                                                     required
                                                     {...password.bind}
                                              />
                                          </div>
                                      </div>

                                      <div className="form-group row">
                                          <div className="col-md-6 offset-md-4">
                                              <div className="checkbox">
                                                  <label>
                                                      <input type="checkbox" name="remember" /> Remember Me
                                                  </label>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="col-md-6 offset-md-4">
                                          <button type="submit" className="btn btn-primary"> Sign in </button>
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
};

export default Login;
