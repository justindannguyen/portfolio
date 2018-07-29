import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import style from "./AppStyle";

const App = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.introduction}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <h1 className={classes.title}>Hello, I'am JUSTIN</h1>
        <h4 className={`${classes.title} ${classes.subTitle}`}>
          Full Stack Developer | Smart City | Smart Campus
        </h4>
        <Button variant="contained" color="secondary">
          About Justin
        </Button>
      </Grid>
    </div>
  );
};

App.propTypes = {};

App.defaultProps = {};

export default withStyles(style)(App);
