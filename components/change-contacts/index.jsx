import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { ContactField } from "../contact-field";
import { StyledButton } from "../styled-button";
import { PopupContainer } from "../popup-container";

const dataForFields = [
  {
    imgName: "NameImg",
    label: "Фамилия и имя",
    placeholder: "Укажите ваши фамилию и имя",
    errorText: "Вы неверно указали имя"
  },
  {
    imgName: "CommImg",
    label: "E-mail",
    placeholder: "Ivanova@mail.ru",
    errorText: "Вы неверно указали почту"
  },
  {
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

  const ContactFieldsMap = dataForFields.map((data) => {
    const { imgName, label, placeholder, errorText } = data;
    return (
      <Grid item xs={12} md={4}>
        <ContactField
          imgName={imgName}
          label={label}
          placeholder={placeholder}
          errorText={errorText}
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
      <PopupContainer open={openPopup} close={handleClosePopup} />
    </div>
  );
};
