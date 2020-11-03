import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ConfirmedContact } from "../confirmed-contact";
import { ChangeContacts } from "../change-contacts";
import { ProfileContactsContext } from "../../helpers/profile-contacts-context";

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

export const ContactsContainer = ({ confirmed }) => {
  const classes = useStyles();
  const {
    profileEmail,
    profileTel
  } = useContext(ProfileContactsContext);

  if (!confirmed) {
    return (
      <div className={classes.root}>
        <ChangeContacts />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <ConfirmedContact imgName="CommImg" contactText={profileEmail} borderBottom />
      <ConfirmedContact imgName="PhoneImg" contactText={profileTel} />
    </div>
  );
};
