import * as React from 'react';

import Navs from "../components/CommunityNav";
import CommunityFeed from "../components/CommunityFeed";

import Header from "../components/Header2";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import "./communityPage.css";


  

export default function CommunityPage(props){
    return(
        <div>   
           <Header />
        <div>
        <Container maxWidth="lg" className="container">
            <div className="trendingContainer">
                        <Navs />
                    </div>
                <div className="feedContainer">
                        <CommunityFeed />
                </div>
        </Container>
           

        <script src="http://code.jquery.com/jquery-latest.min.js"></script>

        <script>
            
        </script>
        </div>
        </div>
    );
}