import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import portfolioTheme from "./PortfolioTheme.js"

import FadeInSection from './FadeInSection.js';

let theme = createTheme(portfolioTheme);

export default function ProjectCard(props) {

    return(
        <FadeInSection>

        <ThemeProvider theme={theme}>

            <Card sx={{ width: '100%', textAlign: 'left', fontFamily:'Menlo', flexShrink:'5', height: '30%', display:'inline', marginBottom: '5vh'}}>
                <CardContent sx={{fontFamily:'Menlo', color:'silver', fontSize: 'calc(10px + 3vmin)'}}>{props.title}</CardContent>
                <div className='rowC'>
                    <CardContent sx={{width: '60%', fontFamily:'Menlo', color:'#ffe100', marginTop: '-2vh', marginRight: '7.5%', fontSize: 'calc(10px + 2vmin)'}}>{props.description}</CardContent>
                    <img src={props.image} alt={props.title} width='20%' height='20%' onerror='null'/>
                </div>
                <CardContent sx={{width: '60%', fontFamily:'Menlo', color:'gray', marginTop: '-3vh', marginRight: '5%', fontSize: 'calc(10px + 2vmin)'}}>Technologies: <div className='tech' sx={{colo:'blue'}}>{props.technologies}</div></CardContent>
                <CardContent sx={{width: '60%', fontFamily:'Menlo', color:'gray', marginTop: '-3vh', marginRight: '5%', fontSize: 'calc(10px + 2vmin)'}}>Repository: <a href={props.link}>Click here!</a></CardContent>
            </Card>
        </ThemeProvider>
        </FadeInSection>
    );
}