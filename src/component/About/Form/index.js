import { Avatar } from "@material-ui/core";
import React from "react";

const FormUpload = ({
  state,
  onChangeTitle,
  onChangeDescription,
  onChangeImage,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        marginTop: "5%",
      }}
    >
      <div className="form-group">
        <label htmlFor="" className="">
          Image
        </label>
        <div className="">
          <div className="upload-btn-wrapper">
            <Avatar src={state.soft_image[0] ? state.soft_image : ""} />
            <input
              type="file"
              name=""
              id=""
              defaultValue={state.image}
              onBlur={onChangeImage}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={state.title}
          onChange={onChangeTitle}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={state.description}
          onChange={onChangeDescription}
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormUpload;
