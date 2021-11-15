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

export default function ExploreGrid(props){
    const { ml, lg, md, sm } = props;

    return(
            <Box className="GridBox" sx={{ml: (ml)}}>
            <Grid container spacing={2} elevation={1} >

                <Grid item lg={(lg)} md={(md)} sm={(sm)}>
                    <GridContent />
                </Grid>

                <Grid item lg={(lg)} md={(md)} sm={(sm)}>
                    <GridContent />
                </Grid>
                <Grid item lg={(lg)} md={(md)} sm={(sm)}>
                    <GridContent />
                </Grid>
                <Grid item lg={(lg)} md={(md)} sm={(sm)}>
                    <GridContent />
                </Grid>
                <Grid item lg={(lg)} md={(md)} sm={(sm)}>
                    <GridContent />
                </Grid>
                <Grid item lg={(lg)} md={(md)} sm={(sm)}>
                    <GridContent />
                </Grid>
                <Grid item lg={(lg)} md={(md)} sm={(sm)}>
                    <GridContent />
                </Grid>
                <Grid item lg={(lg)} md={(md)} sm={(sm)}>
                    <GridContent />
                </Grid>
                <Grid item lg={(lg)} md={(md)} sm={(sm)}>
                    <GridContent />
                </Grid>
                
            </Grid>
            
            </Box>
        
    );
}