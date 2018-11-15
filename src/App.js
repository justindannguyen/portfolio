import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import style from "./AppStyle";
import Avatar from "@material-ui/core/Avatar";
import ReactGA from "react-ga";

class App extends Component {
  constructor(props) {
    super(props)
    ReactGA.initialize("UA-129327422-1")
  }

  componentWillMount = () => {
    ReactGA.pageview("/");
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          container
          className={classes.introduction}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Avatar
            alt="Remy Sharp"
            src="https://justindannguyen.github.io/about/justin.jpeg"
            className={classes.avatar}
          />
          <h1 className={classes.title}>Hello, I'am JUSTIN</h1>
          <h4 className={`${classes.title} ${classes.subTitle}`}>
            Full Stack Developer | Smart City | Smart Campus
          </h4>
          <Button
            href="/about/"
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            About me
          </Button>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export default withStyles(style)(App);
