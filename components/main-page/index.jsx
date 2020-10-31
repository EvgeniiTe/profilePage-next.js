import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Background } from "../background";
import { HeaderCard } from "../header-card";
import { PageInfo } from "../page-info";
import { ProfileInfo } from "../profile-info";
import { ContactsContainer } from "../contacts-container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    maxWidth: "1308px",
  }
}));

export const MainPage = () => {
  const classes = useStyles();
  return (
    <>
      <Background />
      <Container fixed disableGutters className={classes.root}>
        <HeaderCard />
        <PageInfo />
        <ProfileInfo />
        <ContactsContainer />
      </Container>
    </>
  );
};
