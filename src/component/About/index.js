import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import { API } from "../Api";
import FormUpload from "./Form";
import Validate from "./Validate";
var fs = require("browserify-fs");

const useStyles = makeStyles({
  flex: {},

  root: {
    maxWidth: 345,
  },
  media: {
    width: 300,
    height: 140,
  },
});

// string

// ''

// object
// []
// [{}]
// {}

const About = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    post: API,
  });
  const [newState, setNewState] = React.useState({
    title: "",
    description: "",
    soft_image: "",
    image: "",
    button: "Update",
    button_del: "Delete",
    validate: false,
  });

  const onChangeTitle = (e) => {
    setNewState({
      ...newState,
      title: e.target.value,
    });
  };

  const onChangeDescription = (e) => {
    setNewState({
      ...newState,
      description: e.target.value,
    });
  };

  const onChangeImage = (e) => {
    // setNewState({
    //   ...newState,
    //   image: e.target.files[0]
    // })
    setNewState({
      ...newState,
      image: e.target.files,
      soft_image: e.target.files[0]
        ? URL.createObjectURL(e.target.files[0])
        : "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newState.id) {
      if (!newState.image) {
        setNewState({
          ...newState,
          validate: true,
        });
      } else {
        const data = {
          id: newState.id,
          title: newState.title,
          description: newState.description,
          image: newState.soft_image,
          button: newState.button,
          button_del: newState.button_del,
        };
        setState({
          ...state,
          post: state.post.map((x) => (x.id === newState.id ? data : x)),
        });
        setNewState({
          ...newState,
          id: 0,
          title: "",
          description: "",
          image: "",
          soft_image: "",
        });
      }
    } else {
      if (newState.image) {
        const data = {
          title: newState.title,
          description: newState.description,
          image: URL.createObjectURL(newState.image[0]),
          button: newState.button,
          button_del: newState.button_del,
        };
        setState({
          ...state,
          post: [data, ...state.post],
        });
        const content = "Some content!";

        setNewState({
          ...newState,
          title: "",
          description: "",
          image: "",
        });
      } else {
        setNewState({
          ...newState,
          validate: true,
        });
      }
    }
  };

  const onUpdate = (id, title, description, image) => {
    setNewState({
      ...newState,
      id: id,
      title: title,
      description: description,
      soft_image: image,
    });
  };

  const onDelete = (id) => {
    setState({
      ...state,
      post: state.post.filter(function (x) {
        return x.id !== id;
      }),
    });
  };

  const onCloseValidate = () => {
    setNewState({
      ...newState,
      validate: false,
    });
  };

  return (
    <React.Fragment>
      <FormUpload
        state={newState}
        onChangeTitle={onChangeTitle}
        onChangeDescription={onChangeDescription}
        onChangeImage={onChangeImage}
        onSubmit={onSubmit}
      />
      <Validate openValidate={newState.validate} onClose={onCloseValidate} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
          flexWrap: "wrap",
        }}
      >
        {state.post.map((data, index) => (
          <Card
            className={classes.root}
            key={index}
            style={{
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            <CardActionArea>
              <CardMedia
                style={{
                  width: "420px",
                  height: "210px",
                }}
                image={data.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default About;
