import React from "react";
import NextHead from "next/head";

export const Head = ({ description, title }) => {
  return (
    <NextHead>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description || "testFLG"} />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <title>{title || ""}</title>
    </NextHead>
  );
};
