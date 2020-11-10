import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Background } from "../background";
import { HeaderCard } from "../header-card";
import { PageInfo } from "../page-info";
import { ProfileInfo } from "../profile-info";
import { ContactsContainer } from "../contacts-container";
import { ProfileContactsContext } from "../../helpers/profile-contacts-context";
import { ContactsChangeHandlerContext } from "../../helpers/contacts-change-handler-context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    maxWidth: "1308px",

    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(1.25),
      paddingLeft: theme.spacing(1.25),
    },
  }
}));

export const MainPage = () => {
  const classes = useStyles();
  const [profileName, setProfileName] = useState("Иванова Анна Михайловна");
  const [profileEmail, setProfileEmail] = useState("Ivanova@mail.ru");
  const [profileTel, setProfileTel] = useState("Укажите номер телефона");

  const profileContacts = {
    profileName,
    profileEmail,
    profileTel
  };

  const [confirmedChanges, setConfirmedChanges] = useState(true);

  const handleConfirmContactsChanges = (name, email, tel) => {
    setProfileName(name);
    setProfileEmail(email);
    setProfileTel(tel);
  };

  const handleStartChangeContacts = () => {
    setConfirmedChanges(false);
  };

  const handleCloseChangeContacts = () => {
    setConfirmedChanges(true);
  };

  const handlersForChangingContacts = {
    handleConfirmContactsChanges,
    handleCloseChangeContacts
  };

  return (
    <>
      <ProfileContactsContext.Provider value={profileContacts}>
        <Background />
        <Container fixed disableGutters className={classes.root}>
          <HeaderCard />
          <PageInfo />
          <ProfileInfo
            startChanging={handleStartChangeContacts}
            stopChanging={handleCloseChangeContacts}
            confirmed={confirmedChanges}
          />
          <ContactsChangeHandlerContext.Provider value={handlersForChangingContacts}>
            <ContactsContainer confirmed={confirmedChanges} />
          </ContactsChangeHandlerContext.Provider>
        </Container>
      </ProfileContactsContext.Provider>
    </>
  );
};
