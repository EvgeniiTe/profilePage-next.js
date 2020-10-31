import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ConfirmedContact } from "../confirmed-contact";
import { ChangeContacts } from "../change-contacts";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    marginTop: "24px",
    backgroundColor: "#FFF",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px"

  },
});

export const ContactsContainer = () => {
  const classes = useStyles();
  return (
    // <div className={classes.root}>
    //   <ConfirmedContact imgName="CommImg" contactText="Ivanova@mail.ru" borderBottom />
    //   <ConfirmedContact imgName="PhoneImg" contactText="Укажите номер телефона" />
    // </div>
    <div className={classes.root}>
      <ChangeContacts />
    </div>
  );
};
