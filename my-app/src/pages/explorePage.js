import * as React from 'react';

import ExploreGrid from "../components/ExploreGrid";
import Tags from "../components/Tags";

import Header from "../components/Header2";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import "./explorePage.css";


  

export default function ExplorePage(props){
    return(
        <div>   
           <Header />
        <div>
   
        <Container maxWidth="xl" className="container">
                 <div className="trendingContainer">
                        <Tags />
                    </div>
                <div className="feedContainer">
                    <ExploreGrid ml={35} lg={3} md={4} sm={6} />
                </div>
        </Container>
           

        <script src="http://code.jquery.com/jquery-latest.min.js"></script>

        <script>
            
        </script>
        </div>
        </div>
    );
}