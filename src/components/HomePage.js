/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import imagen from "../img/img_30298_programhtml.jpg";
import '../index.css';
const HomePage = ({title,id}) => {
    const classes = useStyles();
    return(
        <div className={classes.section}>
            
              
            <div className={classes.logo} >
              
              <svg className={classes.svglogo} viewBox="0 0 500 150" preserveAspectRatio="none" >
                <path className={classes.path} d="M-5.36,-2.45 C122.17,120.88 316.87,-89.30 502.54,56.73 L503.10,150.48 L0.00,150.00 Z" ></path>
              </svg>
              
              </div>
            <div className={classes.sectionContent} id={id}>
              <Typography variant="h3" class="textoheader">
                <h2>{title}</h2>
                </Typography>
                
                <Typography variant="h4"  class="textoheader">
                <h3>I am a programmer</h3>
                </Typography>
            </div>
            
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
  section: {
    
    minHeight: "100vh",
    width: "100%",
    height: "600px",
    bottom: 0,
    background: "#373B44",
    background: `-webkit-linear-gradient(to right, #4286f4c0, #373b44b2),  url(${imagen})` /* Chrome 10-25, Safari 5.1-6 */,
    background: `linear-gradient(to right, #4286f4c0, #373b44b2), url(${imagen})`, //* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    position: "relative" /* fallback for old browsers */,
  },
  logo: {
    height: "150px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
  },
  svglogo: {
    height: "100%",
    width: "100%",
  },
  path: {
    stroke: "none",
    fill: "#fff",
  },
  sectionContent: {
    display: "flex",
    height: "60%",
    width: "100%",
    alignItems:"center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    maxWidth: "80vw",
    margin: "0 auto",
    
    
  },
  
 
}));

export default HomePage;
//<div class="wave" style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 283.01,-37.00 502.54,70.55 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>