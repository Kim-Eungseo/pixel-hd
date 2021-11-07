import React from "react";
import FeedContent from "./FeedContent";
import "./ExploreGrid.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
            <Grid container spacing={2} elevation={0} >
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Tristique magna sit amet purus gravida quis blandit. Aliquet eget sit amet tellus cras adipiscing. Ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam. In aliquam sem fringilla ut. Non blandit massa enim nec dui nunc. Id aliquet risus feugiat in. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Massa sapien faucibus et molestie ac. </Item>
                </Grid>
                
                
            </Grid>
            </Box>
            
        </div>
    );
}