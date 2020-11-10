import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { ImgInSqrContainer } from "../img-in-sqr-container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  contactField: {
    height: "97px",
    padding: theme.spacing(2.875),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(9.625),

    [theme.breakpoints.down("sm")]: {
      padding: "0",
      borderRight: "none",
      height: "auto",

      "&:nth-child(1)": { paddingTop: "0" },
    },
  },
  textField: {
    minWidth: "254px",
    height: "57px",
  },
}));

export const ContactField = ({
  id,
  value,
  imgName,
  label,
  placeholder,
  error,
  errorText,
  onChange,
  onFocus,
  onBlur,
}) => {
  const classes = useStyles();

  const helperText = error ? errorText : null;

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.contactField}
      >
        <Hidden xsDown>
          <Grid item className={classes.contactImg}>
            <ImgInSqrContainer className={classes.image} imgName={imgName} sideSize="30px" />
          </Grid>
        </Hidden>
        <Grid item>
          <TextField
            id={id}
            label={label}
            placeholder={placeholder}
            value={value}
            variant="outlined"
            error={error}
            helperText={helperText}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={classes.textField}
          />
        </Grid>
      </Grid>
    </div>
  );
};
