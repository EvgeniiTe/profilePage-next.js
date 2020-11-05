import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { ContactField } from "../contact-field";
import { StyledButton } from "../styled-button";
import { PopupContainer } from "../popup-container";

const dataForFields = [
  {
    id: "name",
    imgName: "NameImg",
    label: "Фамилия и имя",
    placeholder: "Укажите ваши фамилию и имя",
    errorText: "Вы неверно указали имя"
  },
  {
    id: "email",
    imgName: "CommImg",
    label: "E-mail",
    placeholder: "Ivanova@mail.ru",
    errorText: "Вы неверно указали почту"
  },
  {
    id: "tel",
    imgName: "PhoneImg",
    label: "Номер телефона",
    placeholder: "Укажите номер телефона",
    errorText: "Вы неверно указали номер"
  }
];

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  formControl: {
    // margin: theme.spacing(1),
    width: "100%"
  },
}));

export const ChangeContacts = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const [currentName, setCurrentName] = useState();
  const [currentEmail, setCurrentEmail] = useState();
  const [currentTel, setCurrentTel] = useState();

  const currentContacts = {
    name: currentName,
    email: currentEmail,
    tel: currentTel
  };

  const [currentNameError, setCurrentNameError] = useState(false);
  const [currentEmailError, setCurrentEmailError] = useState(false);
  const [currentTelError, setCurrentTelError] = useState(false);

  const currentContactsError = {
    name: currentNameError,
    email: currentEmailError,
    tel: currentTelError
  };

  const fieldValidation = (value, setError, regExp) => {
    if (!regExp.test(value.trim())) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChangeValue = (event) => {
    const property = event.target.id;
    const { value } = event.target;
    if (property === "name") {
      setCurrentName(value);
    } else if (property === "email") {
      setCurrentEmail(value);
    } else if (property === "tel") {
      setCurrentTel(value);
    }
  };

  const handleOnFocus = (event) => {
    const property = event.target.id;
    if (property === "name") {
      setCurrentNameError(false);
    } else if (property === "email") {
      setCurrentEmailError(false);
    } else if (property === "tel") {
      setCurrentTelError(false);
    }
  };

  const handleOnBlur = (event) => {
    const property = event.target.id;
    const { value } = event.target;
    if (property === "name") {
      if (value.split(/\s+/).length < 2) {
        setCurrentNameError(true);
      } else {
        setCurrentNameError(false);
      }
    } else if (property === "email") {
      const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      fieldValidation(value, setCurrentEmailError, regExp);
    } else if (property === "tel") {
      const regExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
      fieldValidation(value, setCurrentTelError, regExp);
    }
  };

  const ContactFieldsMap = dataForFields.map((data) => {
    const { id, imgName, label, placeholder, errorText } = data;
    const value = currentContacts[id];
    const error = currentContactsError[id];
    return (
      <Grid item xs={12} md={4} key={id}>
        <ContactField
          id={id}
          value={value}
          imgName={imgName}
          label={label}
          placeholder={placeholder}
          errorText={errorText}
          onChange={handleChangeValue}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          error={error}
        />
      </Grid>
    );
  });

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
        >
          {ContactFieldsMap}
        </Grid>
        <StyledButton onClick={handleClickOpenPopup} text="Сохранить изменения" theme="filled" size="large" />
      </FormControl>
      <PopupContainer
        isOpen={openPopup}
        close={handleClosePopup}
        currentContacts={currentContacts}
      />
    </div>
  );
};
