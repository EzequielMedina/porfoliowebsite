import React ,{useState}from 'react';
import { makeStyles, Paper, Typography,Radio,TextField,Button } from '@material-ui/core';

const Contact = ({title,id, gray}) => {
    const classes = useStyles();
    const [value, setValue] = useState("Say hi");
    const handleChange = (e) => {
      setValue(e.target.value)
    }
    return(
        <div className={`${classes.section} ${gray && classes.sectiondark}`}>
            <Typography variant="h3">{title}</Typography>
            <div className={classes.sectionContent} id={id}>
            
              <Paper class={classes.root}>
                <div className={classes.titleAndChoices}>
                  <Typography variant="h5">Leave your message</Typography>
                  <div className={classes.choices}>
                    <span>Say Hello
                    <Radio 
                      value={"Say hi"}
                      checked={value === "Say hi"}
                      color="primary"
                      onChange={handleChange}
                    /></span>
                    <span>Get a Quote
                    <Radio 
                      value={"Get a Quote"}
                      checked={value === "Get a Quote"}
                      color="primary"
                      onChange={handleChange}
                    /></span>
                      
                  </div>
                </div>
                <form className={classes.form} noValidate autoComplete="off">
                  <TextField label={"Your name"}/>
                  <TextField label={"Your e-mail"}/>
                  {
                    value === "Get a Quote" ? (
                      <>
                        <TextField label={"Needed Services"}/>
                        <TextField label={"Estimated Budget"}/>
                      </>
                    ): null
                  }
                  <TextField label={"Write a message"}/>
                </form>
                <Button variant="contained">Submit</Button>
              </Paper>
            </div>
            <div className={classes.copy}>
              
              <p>Designed and developed by <b> Alexis Ezequiel Medina</b> </p>  
              <p>Copyright © 2021 </p>

            </div>
        </div>

    )
}
const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      color: "#063891",
      display: "flex",
      flexDirection:"column",
      justifyContent: "flex-star",
      alignItems: "center",
      
    },
    sectiondark:{
        backgroundColor: "#f2f2f2",
        
    },
    sectionContent:{
        maxWidth:"80vw",
        margin: "0 auto",
        borderRadius:"20px",
        
        
    },
    root:{
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "1.2rem",
      padding: theme.spacing(3),
      margin: theme.spacing(3),
      border: "#063891 solid 2px",
      borderRadius:"10px",
      maxWidth: "500px",
      "& button":{
        backgroundColor: "#fff",
        color:"#063891",
        fontWeight:"900",
        fontSize: "1.2rem",
        width:"250px"
      }
      
    },
    form:{
      margin: theme.spacing(0, 3, 3, 3),
      display: "flex",
      flexDirection:"column",
      
    },
    titleAndChoices:{
      "& h5":{
        marginBottom: theme.spacing(3),
        textAlign:"center",
      }
    },
    copy:{
      color:"#000",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    choices:{
      [theme.breakpoints.down("sm")]: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"right",
      },
    }
    
  }))

export default Contact;