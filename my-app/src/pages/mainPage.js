import * as React from 'react';

import Feed from "../components/Feed";
import Trending from "../components/Trending";

import Header from "../components/Header2";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import "./mainPage.css";


  

export default function MainPage(props){
    return(
        <div>   
           <Header />
        <div>
   
        <Container maxWidth="md" className="container">
                <div className="feedContainer">
                    <Feed/>
                </div>
                
                <div className="trendingContainer">
                    <Trending />
                </div>
        </Container>
           

        <script src="http://code.jquery.com/jquery-latest.min.js"></script>

        <script>
            
        </script>
        </div>
        </div>
    );
}