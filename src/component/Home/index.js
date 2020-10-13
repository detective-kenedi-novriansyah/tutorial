import React from "react";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const [state, setState] = React.useState({
    username: "",
    password: "",
    validate: false,
    color: false,
    message: "",
  });

  const onChangeUsername = (e) => {
    setState({
      ...state,
      username: e.target.value,
    });
  };

  const onChangePassword = (e) => {
    setState({
      ...state,
      password: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.username === "mox@yahoo.com" && state.password === "12345") {
      setState({
        ...state,
        validate: true,
        message: "Kamu berhasil masuk",
        color: true,
      });
      setTimeout(() => {
        history.push("/About");
      }, 1000);
    } else {
      setState({
        ...state,
        validate: true,
        message: "Username atau password kamu salah.",
        color: false,
      });
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      style={{ width: "50%", display: "block", margin: "auto" }}
    >
      {state.validate ? (
        <div
          className={state.color ? "alert alert-success" : "alert alert-danger"}
          role="alert"
        >
          {state.message}
        </div>
      ) : null}
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          value={state.username}
          onChange={onChangeUsername}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          value={state.password}
          onChange={onChangePassword}
          id="exampleInputPassword1"
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          value={state.password}
          onChange={onChangePassword}
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Home;
