import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ImgInSqrContainer } from "../img-in-sqr-container";

const useStyles = makeStyles((theme) => ({
  root: ({ borderBottom }) => ({
    flexGrow: 1,
    margin: 0,
    padding: 0,
    borderBottom,
  }),
  contactImage: {
    margin: theme.spacing(4.125),
    marginLeft: theme.spacing(9.625),
    marginRight: theme.spacing(5.625),

    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2.75),
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5)
    },
  }
}));

export const ConfirmedContact = ({ imgName, contactText, borderBottom }) => {
  const props = borderBottom ? { borderBottom: "1px solid #CAE7FE" } : { borderBottom: "" };
  const classes = useStyles(props);
  return (
    <div>
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Paper className={classes.contactImage} elevation={0} square>
            <ImgInSqrContainer imgName={imgName} sideSizeLargeDisp="30px" sideSizeSmallDisp="20px" />
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
