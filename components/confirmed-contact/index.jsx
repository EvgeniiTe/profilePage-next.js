import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ImgInSqrContainer } from "../img-in-sqr-container";

const useStyles = makeStyles({
  root: ({ borderBottom }) => ({
    flexGrow: 1,
    margin: 0,
    padding: 0,
    height: "96px",
    borderBottom,
  })
});

export const ConfirmedContact = ({ imgName, contactText, borderBottom }) => {
  const props = borderBottom ? { borderBottom: "1px solid #CAE7FE" } : { borderBottom: "" };
  const classes = useStyles(props);
  return (
    <div>
      <Grid
        className={classes.root}
        container
        xs={12}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Paper elevation={0} square>
            <ImgInSqrContainer className={classes.image} imgName={imgName} sideSize="30px" />
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={0} square>
            {contactText}
          </Paper>
        </Grid>
      </Grid>

    </div>
  );
};
