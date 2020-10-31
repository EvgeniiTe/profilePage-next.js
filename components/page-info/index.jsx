import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0
  },
  paper: {
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "transparent"
  }
}));

export const PageInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0} square>ЛИЧНЫЙ ПРОФИЛЬ</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0} square>Главная/Личный профиль</Paper>
        </Grid>
      </Grid>
    </div>
  );
};
