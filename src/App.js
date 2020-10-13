import React from "react";
import "./App.css";

const apis = [];

function App() {
  const [state, setState] = React.useState({
    post: apis,
  });
  const [newState, setNewState] = React.useState({
    id: 0,
    username: "",
    post: "",
  });

  const onChangeUsername = (e) => {
    setNewState({
      ...newState,
      username: e.target.value,
    });
  };

  const onChangePost = (e) => {
    setNewState({
      ...newState,
      post: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newState.id) {
      const perbaruidata = {
        id: newState.id,
        username: newState.username,
        post: newState.post,
      };
      setState({
        ...state,
        post: state.post.map((x) => (x.id === newState.id ? perbaruidata : x)),
      });
    } else {
      const newData = {
        id: state.post.length + 1,
        username: newState.username,
        post: newState.post,
      };
      setState({
        ...state,
        post: [newData, ...state.post],
      });
    }
    setNewState({
      ...newState,
      username: "",
      post: "",
      id: 0,
    });
  };

  const onDelete = (username) => {
    setState({
      ...state,
      post: state.post.filter(function (x) {
        return x.username !== username;
      }),
    });
  };

  const onUpdate = (id, username, post) => {
    setNewState({ ...newState, id: id, username: username, post: post });
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit} className="mt-4">
        <div
          className="form-group"
          style={{ display: "flex", alignItems: "center" }}
        >
          <label htmlFor="Username" className="mr-3">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={newState.username}
            onChange={onChangeUsername}
          />
        </div>
        <div
          className="form-group"
          style={{ display: "flex", alignItems: "center" }}
        >
          <label htmlFor="Username" className="mr-3">
            Post
          </label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={newState.post}
            onChange={onChangePost}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>{" "}
      <div>
        {state.post.map((data, index) => (
          <div className="card" key={index}>
            <h5 className="card-header">{data.username}</h5>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">{data.post}</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <a
                  className="btn btn-primary"
                  onClick={onUpdate.bind(
                    data,
                    data.id,
                    data.username,
                    data.post
                  )}
                >
                  Update
                </a>
                <a
                  className="btn btn-danger"
                  onClick={onDelete.bind(data, data.username)}
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
