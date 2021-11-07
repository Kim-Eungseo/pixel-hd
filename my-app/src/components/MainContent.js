import React from "react";
import { Grid, AppBar, Toolbar, Typography } from "@mui/material";
import "./MainContent.css";

export default () => (
  <React.Fragment>

    <div className="flex-no-shrink">

    </div>
    <Grid container className="flex-section">
      <Grid
        item
        xs={6}
        className={"flex-col-scroll"}
        style={{ backgroundColor: "pink" }}
      >
        <h1>Column 1</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>end line</h1>
        
      </Grid>
      <Grid
        item
        xs={6}
        className={"flex-col-scroll"}
        style={{ backgroundColor: "lightblue" }}
      >
        <h1>Column 2</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>new line</h1>
        <h1>end line</h1>

      </Grid>
    </Grid>
  </React.Fragment>
);
