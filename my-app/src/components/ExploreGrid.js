import React from "react";
import FeedContent from "./FeedContent";
import "./ExploreGrid.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import GridContent from "./GridContent";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ExploreGrid(){
    return(
        <div className="GridBox">
            
            <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2} elevation={1} >
                <Grid item lg={3} md={4} sm={6}>
                    <GridContent />
                </Grid>
                <Grid item lg={3} md={4} sm={6}>
                    <GridContent />
                </Grid>
                <Grid item lg={3} md={4} sm={6}>
                    <GridContent />
                </Grid>
                <Grid item lg={3} md={4} sm={6}>
                    <GridContent />
                </Grid>
                <Grid item lg={3} md={4} sm={6}>
                    <GridContent />
                </Grid>
                <Grid item lg={3} md={4} sm={6}>
                    <GridContent />
                </Grid>
                <Grid item lg={3} md={4} sm={6}>
                    <GridContent />
                </Grid>
                <Grid item lg={3} md={4} sm={6}>
                    <GridContent />
                </Grid>
                <Grid item lg={3} md={4} sm={6}>
                    <GridContent />
                </Grid>
                
            </Grid>
            </Box>
            
        </div>
    );
}