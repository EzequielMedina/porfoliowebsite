import React from 'react';
import { Card, makeStyles, Typography, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import ezequiel from "../img/yo_adobespark.png";
import TypeWriterEffect from "react-typewriter-effect";
import Cv from "../assents/Medina_Ezequiel_CV_2020.pdf"
const About = ({title,id, gray}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${gray && classes.sectiondark}`}>
            <div className={classes.sectionContent} id={id}>
              <Typography variant="h3">{title}</Typography>
              <Card className={classes.card}>
                <Card className={classes.cardphoto}><CardMedia title="Picture" image={ezequiel} className={classes.cardMedina}></CardMedia></Card>
                <CardContent className={classes.cardContent}>
                  <TypeWriterEffect
                    text="hi, i am Ezequiel Medina"
                    textStyle={{fontSize: "2rem", fontWeight: "700px", color:"tomato"}}
                    startDelay={100}
                    cursorColor="black"
                    typeSpeed={100}
                  />
                  <TypeWriterEffect
                    text="I'm a programmer"
                    textStyle={{fontSize: "1.2rem", fontWeight: "500px", color:"#000"}}
                    startDelay={2500}
                    cursorColor="black"
                    typeSpeed={100}
                  />
                  <Typography variant="h6" color="textSecondary">
                    texto que nos describe
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button vartian="contained" className={classes.pdfButton}>
                    <a href={Cv} download>
                      Download CV
                      </a>
                    
                    </Button>
                </CardActions>
              </Card>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      color: "#063891",
    },
    sectiondark:{
        backgroundColor: "#f2f2f2",
        
    },
    sectionContent:{
        maxWidth:"80vw",
        margin: "0 auto",
        
    },
    card:{
      [theme.breakpoints.down("sm")]:{
        height: "90vw", 
      },
      height: "70vw",
      display: "flex",
      marginTop: theme.spacing(6),
      position: "relative",
      background:"#f2f2f2",
      marginBottom: 70,
    },
    cardphoto:{
      height: "auto",
      display: "flex",
      borderRadius: "10px",
      position:"relative",
      margin: theme.spacing(3),
      
      
    },
    cardMedina:{
      width: "200px",
      height: "auto",
      objectFit: "cover",
      
      margin: theme.spacing(0)
    },
    cardContent:{
      marginTop: theme.spacing(2),
      "& h6":{
        marginTop: theme.spacing(6),
        [theme.breakpoints.down("sm")]:{
          display:"none",
        }
      }
    },
    pdfButton:{
      position: "absolute",
      bottom: "5rem",
      right: "4rem ",
      [theme.breakpoints.down("sm")]:{
        bottom: "2rem",
        right: "1rem",
        width: 100,
        height: 10,
      },
      backgroundColor:"tomato",
      padding: theme.spacing(3),
      "&:hover":{
        backgroundColor:"#fff",
      },
      "& a":{
        color: "#fff",
        textDecoration: "none",
        fontWeight: 700,
      },
      "& a:hover":{
        color: "tomato",
      }
    },
  }))

export default About;