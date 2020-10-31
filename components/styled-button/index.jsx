import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: { margin: "0 auto" },
  button: ({ backgroundColor, color, borderRadius, border, width }) => ({
    textTransform: "none",
    backgroundColor,
    border,
    boxShadow: "none !important",
    borderRadius,
    width,
    height: "50px",
    textAlign: "center",
    verticalAlign: "center",
    color,
  }),

});

export const StyledButton = ({ onClick, text, theme = "no-filled", size = "small" }) => {
  const props = {
    backgroundColor: theme === "filled" ? "#01BDA7" : "#FFF",
    color: theme === "filled" ? "#FFF" : "#00BFA5",
    borderRadius: size === "small" ? "41px" : "36px",
    width: size === "small" ? "202px" : "212px",
    border: theme === "no-filled" ? "1px solid #00BFA5" : null
  };
  const classes = useStyles(props);

  const clickAction = () => ((typeof onClick === "function") ? onClick() : null);

  // typeof childEl === "function" ? childEl({}) : childEl

  return (
    <div className={classes.root}>
      <Button onClick={clickAction} variant="contained" color="primary" className={classes.button}>
        {text}
      </Button>
    </div>
  );
};
