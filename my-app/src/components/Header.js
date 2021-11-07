import "./Header.css";

import React from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Header(){

    return(
    <AppBar>
    <Toolbar>
        <Grid container spicing={2}>
            <Grid item xs={8}>
                <Item>
                    <Button color="inherit">HOME</Button>
                    <Button color="inherit">SEARCH</Button>
                    <Button color="inherit">NOTICE</Button>
                    </Item>
            </Grid>
            <Grid item xs={4}>
                Noti, Avatar"profile"
            </Grid>
        </Grid>

    </Toolbar>
    </AppBar> 
    );
}