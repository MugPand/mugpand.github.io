import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircleIcon from '@mui/icons-material/Circle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Icon } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import devpost from './devpost.svg';
import portfolioTheme from "./PortfolioTheme.js"

let theme = createTheme(portfolioTheme);

export default function TerminalCard() {
    return(
        <ThemeProvider theme={theme}>
            <Card sx={{ width: '80%', textAlign: 'left', fontFamily:'Menlo', flexShrink:'5'}} >
                <CardContent sx={{marginTop: '-1vh', color: 'gray'}}>
                    <CircleIcon sx={{fontSize: 'calc(10px + 1vmin)', color: '#d9515d', marginRight: '0.5vw', marginTop: '0.2vh'}}></CircleIcon>
                    <CircleIcon sx={{fontSize: 'calc(10px + 1vmin);', color: '#FFBD44', marginRight: '0.5vw'}}></CircleIcon>
                    <CircleIcon sx={{fontSize: 'calc(10px + 1vmin);', color: '#00CA4E', marginRight: 'calc(55% + -23vmin)'}}></CircleIcon>
                    <span sx={{color:'blue'}}>--portfolio--</span>
                </CardContent>
                <CardContent sx={{marginLeft: '2vw', marginTop:'-2vh', fontFamily:'Menlo', color:'silver'}}>% Location:</CardContent>
                <CardContent sx={{marginLeft: '2vw', marginTop:'-2vh', fontFamily:'Menlo'}}>Greater NYC</CardContent>
                <CardContent sx={{marginLeft: '2vw', marginTop:'-2vh', fontFamily:'Menlo', color:'silver'}}>% Currently Pursuing:</CardContent>
                <CardContent sx={{marginLeft: '2vw', marginTop:'-2vh', fontFamily:'Menlo'}}>Software Engineering and AI/ML</CardContent>
                <CardContent sx={{marginLeft: '2vw', marginTop:'-2vh', fontFamily:'Menlo', color:'silver'}}>% Programming Languages:</CardContent>
                <CardContent sx={{marginLeft: '2vw', marginTop:'-2vh', fontFamily:'Menlo'}}>Python, C, Java, SQL, Javascript, HTML/CSS, React:</CardContent>
                <CardContent sx={{marginLeft: '2vw', marginTop:'-2vh', fontFamily:'Menlo', color:'silver'}}>% Technologies:</CardContent>
                <CardContent sx={{marginLeft: '2vw', marginTop:'-2vh', fontFamily:'Menlo'}}>Git, Jupyter Notebook, MYSQL Workbench, Android Studio, IntelliJ IDEs, MS Visual Studio Code, Microsoft Suite, Google Suite</CardContent>
                <CardContent sx={{marginLeft: '2vw', marginTop:'-2vh', fontFamily:'Menlo', color:'silver'}}>% Coursework:</CardContent>
                <CardContent sx={{marginLeft: '2vw', marginTop:'-2vh', fontFamily:'Menlo'}}>Data Structures & Algorithms, Analysis of Algorithms, Deep Learning, Software Methodology, Computer Architecture, Systems Programming, Databases, Discrete Structures, Linear Algebra, Statistics, Calculus I & II.</CardContent>
                <CardContent sx={{marginLeft: '2vw', marginTop:'-2vh', fontFamily:'Menlo', color:'silver'}}>% Websites:</CardContent>
                <CardContent sx={{marginLeft: '2vw', marginTop:'-2vh'}}>
                <a href="https://www.linkedin.com/in/mugdhesh-pandkar" sx={{marginTop:'-2vh'}}>
                    <LinkedInIcon sx={{fontSize: 'calc(10px + 4vmin)', verticalAlign: '-1vh', marginRight: '0.5vw'}}></LinkedInIcon>
                    Linkedin, 
                </a>
                <a href="https://github.com/MugPand" sx={{marginTop:'-2vh'}}>
                    <GitHubIcon sx={{fontSize: 'calc(10px + 3vmin)', verticalAlign: '-0.5vh', marginRight: '0.5vw'}}></GitHubIcon>
                    GitHub, 
                </a>
                <a href="https://devpost.com/mugpand">
                    <Icon sx={{fontSize: 'calc(10px + 3vmin)', verticalAlign: '-0.5vh', marginRight: '0.5vw'}}>
                    <img src={devpost}/>
                    </Icon>
                    Devpost
                </a>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}