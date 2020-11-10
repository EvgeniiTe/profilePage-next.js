import React, { useState, useContext } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { ImgInSqrContainer } from "../img-in-sqr-container";
import { StyledButton } from "../styled-button";
import { ContactsChangeHandlerContext } from "../../helpers/contacts-change-handler-context";

const useStyles = makeStyles((theme) => ({
  root: ({ display }) => ({
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: "1101",
    display,
  }),
  popupContainer: {
    position: "absolute",
    top: "220px",
    left: "50%",
    transform: "translate(-50%, 0)",
    width: "600px",
    height: "318px",
    backgroundColor: "#FFF",
    borderRadius: "10px",
    animationName: "$appearance",
    animationDuration: "1s",
    [theme.breakpoints.down("xs")]: {
      top: "142px",
      width: "320px",
      height: "100%",
    },
  },
  "@keyframes appearance": {
    from: { opacity: "0" },
    to: { opacity: "1" }
  },
  cross: {
    position: "absolute",
    top: "29px",
    right: "29px",
  },
  message: {
    margin: "0",
    color: "rgba(49, 49, 49, 0.7)",
    fontSize: "24px",
    fontWeight: "600",
    textAlign: "center"

  },
  confirmationForm: {
    margin: "69px 0 0 0",
    height: "193px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  }
}));

const ConfirmationForm = ({
  classConfirmationForm,
  classMessage,
  currentContacts,
  close
}) => {
  const message = "Сохранить изменения?";

  const handlersForChangingContacts = useContext(ContactsChangeHandlerContext);
  const confirmContacts = handlersForChangingContacts.handleConfirmContactsChanges;
  const closeChangingView = handlersForChangingContacts.handleCloseChangeContacts;

  const [changesSaved, setChangesSaved] = useState(false);
  const [errorWhileSaving, setErrorWhileSaving] = useState(false);

  const confirmAndSave = (contacts) => {
    const { name, email, tel } = contacts;
    axios.post("/user", {
      name,
      email,
      tel
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("tel", tel);
        setChangesSaved(true);
        confirmContacts(name, email, tel);
      })
      .catch((err) => {
        setErrorWhileSaving(true);
        if (err.response) {
          console.log(err.message);
        } else if (err.request) {
          console.log(err.message);
        } else {
          console.log("что-то не так в коде");
        }
      });
  };

  const finalMessage = (messageText, buttonText) => {
    return (
      <div className={classConfirmationForm}>
        <p className={classMessage}>{messageText}</p>
        <StyledButton text={buttonText} theme="filled" size="small" onClick={closeChangingView} />
      </div>
    );
  };

  if (changesSaved) {
    return finalMessage("Данные успешно сохранены", "Хорошо");
  }

  if (errorWhileSaving) {
    return finalMessage("Упсс...ошибка, попробуйте позднее", "Хорошо");
  }

  return (
    <div className={classConfirmationForm}>
      <p className={classMessage}>{message}</p>
      <StyledButton text="Сохранить" theme="filled" size="small" onClick={() => confirmAndSave(currentContacts)} />
      <StyledButton text="Не сохранять" size="small" onClick={() => close()} />
    </div>
  );
};

export const PopupContainer = ({ isOpen, close, currentContacts }) => {
  const display = isOpen ? "block" : "none";
  const props = { display };
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.popupContainer}>
        <div className={classes.cross} onClick={() => close()} role="button" tabIndex={0}>
          <ImgInSqrContainer imgName="CrossGreyImg" sideSize="14px" />
        </div>
        <ConfirmationForm
          classConfirmationForm={classes.confirmationForm}
          classMessage={classes.message}
          currentContacts={currentContacts}
          close={close}
        />
      </div>
    </div>
  );
};
