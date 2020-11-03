import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { ImgInSqrContainer } from "../img-in-sqr-container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%"
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
        justify="space-around"
        alignItems="flex-start"
      >
        <Hidden xsDown>
          <Grid item md={2} className={classes.contactImg}>
            <ImgInSqrContainer className={classes.image} imgName={imgName} sideSize="30px" />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={10}>
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
          />
        </Grid>
      </Grid>
    </div>
  );
};
