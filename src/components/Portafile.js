import React from 'react';
import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import mockData from '../monckData';
const Portafile = ({title,id, gray}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${gray && classes.sectiondark}`}>
            <div className={classes.sectionContent} id={id}>
              <Typography variant="h3">{title}</Typography>
              <Grid container className={classes.grid}>
                {
                  mockData.map(({title, image, repositorio}, index)=>(
                    <Grid item key={index} xs={12} ms={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia image={image} titulo="caratula" className={classes.caratula}/>
                        <CardContent>
                          <Link href={repositorio} color="primary" target="_blank" reel="noopener noreferrer">
                            {title}
                          </Link>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                }
              </Grid>
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      color: "#063891"
    },
    sectiondark:{
        backgroundColor: "#f2f2f2",
        
    },
    sectionContent:{
        maxWidth:"80vw",
        margin: "0 auto",
        padding: theme.spacing(5),
        
    },
    grid:{
      marginTop: theme.spacing(10),
    },
    card:{
      maxWidth: 345,
      minHeight: 275,
      margin: theme.spacing(3),
    },
    caratula:{
      height: 0,
      paddingTop: "56.25%", //16:9
      
      
    },
  }))

export default Portafile;